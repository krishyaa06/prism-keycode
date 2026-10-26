const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");
const ev = (o) => ({ key: "k", code: "KeyK", keyCode: 75, location: 0, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, ...o });
test("describe", () => {
  const d = C.describe(ev({ ctrlKey: true, location: 0 }));
  assert.deepEqual([d.label, d.code, d.keyCode, d.location, d.mods], ["K", "KeyK", 75, "Standard", ["ctrl"]]);
  assert.equal(C.describe(ev({ key: " ", code: "Space" })).label, "Space");
});
test("combo formatting", () => {
  assert.equal(C.combo(ev({ ctrlKey: true, shiftKey: true })), "Ctrl+Shift+K");
  assert.equal(C.combo(ev({ metaKey: true }), "mac"), "⌘K");
  assert.equal(C.combo(ev({ key: "Shift", shiftKey: true })), "Shift");
});
test("snippets", () => {
  const s = C.snippets(ev({ metaKey: true }));
  assert.match(s.js, /e\.key === "k" && e\.metaKey/);
  assert.match(s.hotkeys, /hotkeys\("meta\+k"/);
  assert.match(s.react, /removeEventListener/);
});
