(() => {
  const { $, $$, copy, tabs, esc } = Prism;
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  let last = null, view = "js";
  const hist = [];
  function show(e) {
    const d = Core.describe(e);
    $("#hint").textContent = d.repeat ? "Holding…" : "Last key"; $("#big").textContent = d.label;
    $("#f-key").textContent = JSON.stringify(d.key); $("#f-code").textContent = d.code || "—"; $("#f-keyCode").textContent = d.keyCode; $("#f-location").textContent = d.location;
    $$("#mods span").forEach((s) => s.classList.toggle("on", d.mods.includes(s.dataset.m.toLowerCase())));
    $("#combo").textContent = Core.combo(e, mac ? "mac" : "other");
    last = { key: e.key, code: e.code, ctrlKey: e.ctrlKey, altKey: e.altKey, shiftKey: e.shiftKey, metaKey: e.metaKey };
    $("#code").textContent = Core.snippets(last)[view];
    if (!d.repeat) { hist.unshift({ ...last, label: Core.combo(e, mac ? "mac" : "other") }); hist.length = Math.min(hist.length, 40); renderHist(); }
  }
  function renderHist() {
    $("#hist").innerHTML = hist.length ? hist.map((h, i) => `<kbd data-i="${i}" title="${esc(h.code)}">${esc(h.label)}</kbd>`).join("") : `<p class="muted">Keys you press show up here.</p>`;
    $$("#hist kbd").forEach((k) => (k.onclick = () => { last = hist[+k.dataset.i]; $("#code").textContent = Core.snippets(last)[view]; }));
  }
  document.addEventListener("keydown", (e) => {
    if (e.target.closest && e.target.closest("button,a,input,textarea") && e.key === "Enter") return;
    if (!(e.metaKey && ["r", "R"].includes(e.key)) && !(e.ctrlKey && ["r", "R"].includes(e.key))) e.preventDefault();
    show(e);
  });
  document.addEventListener("keyup", (e) => $$("#mods span").forEach((s) => s.classList.toggle("on", Core.describe(e).mods.includes(s.dataset.m.toLowerCase()))));
  tabs($("#snip"), (v) => { view = v; if (last) $("#code").textContent = Core.snippets(last)[view]; });
  $("#copy").onclick = () => copy($("#code").textContent);
  $("#clear").onclick = () => { hist.length = 0; renderHist(); };
  $("#stage").focus();
})();
