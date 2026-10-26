<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:B388FF,100:00D2FF&height=200&section=header&text=Prism%20Keycode&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Keyboard%20event%20inspector%20%2B%20snippet%20generator&descAlignY=58&descSize=16" width="100%" alt="Prism Keycode" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=B388FF&center=true&vCenter=true&width=680&lines=e.key%2C+e.code%2C+keyCode;Ctrl%2BShift%2BK+%E2%86%92+a+ready+handler;React+useEffect+snippet;Mac+%E2%8C%98%E2%8C%A5%E2%87%A7+symbols" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-keycode/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-keycode/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-keycode/"><img src="https://img.shields.io/badge/Live_Demo-Open-B388FF?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-B388FF?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-keycode?style=for-the-badge&color=00D2FF" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism Keycode screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" />

## ⚡ Overview

**Prism Keycode** shows everything the browser reports for a key press: `e.key`, `e.code`, the legacy `keyCode`, key location (left/right/numpad) and live modifier state. Each press becomes a shortcut combo and a ready-to-paste handler for vanilla JS, React or hotkeys.js, and recent presses are kept in a clickable history.

## ✨ Features

- **Big live readout** of the last key with modifier lights
- **e.key / e.code / keyCode / location** at a glance
- **Shortcut combo** formatting (Mac symbols on macOS)
- **Snippets** for vanilla JS, React `useEffect` and hotkeys.js
- **History** of recent combos — click one to regenerate its snippet
- Prevents default browser actions so you can test combos like Ctrl+S

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism Keycode on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism Keycode on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-keycode/](https://krishyaa06.github.io/prism-keycode/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-keycode.git
cd prism-keycode
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

Open the page and press any key or combination. Pick a snippet flavour and hit **Copy**. Click a key in **History** to bring back its snippet.

## 📁 Project Structure

```
prism-keycode/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # keyboard listeners and UI
│   ├── core.js   # event description + snippet generation — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── README.md
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism Keycode is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00D2FF,50:B388FF,100:07060f&height=110&section=footer" width="100%" />
