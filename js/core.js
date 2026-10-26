/* Prism Keycode · core logic */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.Core = api;
})(typeof self !== "undefined" ? self : this, function () {
  const MODS = ["ctrlKey", "altKey", "shiftKey", "metaKey"];
  const LOCATION = ["Standard", "Left", "Right", "Numpad"];
  const PRETTY = { " ": "Space", ArrowUp: "↑", ArrowDown: "↓", ArrowLeft: "←", ArrowRight: "→", Escape: "Esc", Enter: "Enter ↵", Backspace: "⌫ Backspace", Tab: "Tab ⇥", Meta: "⌘ Meta", Control: "Ctrl", Alt: "Alt", Shift: "⇧ Shift", CapsLock: "Caps Lock", Delete: "Del" };
  function describe(e) {
    return {
      key: e.key, code: e.code, keyCode: e.keyCode ?? e.which ?? 0, which: e.which ?? e.keyCode ?? 0,
      location: LOCATION[e.location || 0] || "Standard", repeat: !!e.repeat,
      mods: MODS.filter((m) => e[m]).map((m) => m.replace("Key", "")),
      label: PRETTY[e.key] || (e.key && e.key.length === 1 ? e.key.toUpperCase() : e.key || e.code),
    };
  }
  function combo(e, platform = "other") {
    const mac = platform === "mac";
    const parts = [];
    if (e.ctrlKey) parts.push(mac ? "⌃" : "Ctrl");
    if (e.altKey) parts.push(mac ? "⌥" : "Alt");
    if (e.shiftKey) parts.push(mac ? "⇧" : "Shift");
    if (e.metaKey) parts.push(mac ? "⌘" : "Meta");
    const k = e.key;
    if (!["Control", "Alt", "Shift", "Meta"].includes(k)) parts.push(k === " " ? "Space" : k.length === 1 ? k.toUpperCase() : k);
    return parts.join(mac ? "" : "+");
  }
  function snippets(e) {
    const conds = [`e.key === ${JSON.stringify(e.key)}`];
    for (const m of MODS) if (e[m]) conds.push(`e.${m}`);
    const hk = [e.ctrlKey && "ctrl", e.altKey && "alt", e.shiftKey && "shift", e.metaKey && "meta", ["Control", "Alt", "Shift", "Meta"].includes(e.key) ? null : (e.key === " " ? "space" : e.key.toLowerCase())].filter(Boolean).join("+");
    return {
      js: `document.addEventListener("keydown", (e) => {\n  if (${conds.join(" && ")}) {\n    e.preventDefault();\n    // handle ${combo(e)}\n  }\n});`,
      react: `useEffect(() => {\n  const onKey = (e) => {\n    if (${conds.join(" && ")}) {\n      // handle ${combo(e)}\n    }\n  };\n  window.addEventListener("keydown", onKey);\n  return () => window.removeEventListener("keydown", onKey);\n}, []);`,
      hotkeys: `hotkeys("${hk}", (e) => {\n  e.preventDefault();\n});`,
      code: `e.code === ${JSON.stringify(e.code)}`,
    };
  }
  return { describe, combo, snippets };
});
