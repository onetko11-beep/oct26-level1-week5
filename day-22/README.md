# Web Development Assignment — HTML, CSS, JavaScript & Git Workflow

## Overview
This project demonstrates core front-end web development setup and styling techniques alongside a structured Git and GitHub version control workflow in Visual Studio Code.

---

## What Was Accomplished

### 1. Project Structure & HTML/JavaScript Integration
* **Linked External JavaScript:** Connected the `.js` script file to the HTML document using `<script src="script.js"></script>` placed right before the closing `</body>` tag so all DOM elements load prior to script execution.
* **Verified Script Connection:** Added a `console.log()` check inside the JavaScript file and confirmed execution in the Chrome DevTools **Console** tab (`F12` / `Ctrl + Shift + I`) with zero `404` or file-path errors.

### 2. CSS Styling & List Formatting
* **Applied Core CSS Properties:** Styled page elements across typography (`color`, `font-family`, `font-size`, `font-weight`, `text-align`, `line-height`), colors and backgrounds (`background-color`, `opacity`), the box model (`width`, `height`, `padding`, `margin`, `border`, `border-radius`), and layout (`display`, `justify-content`, `align-items`, `gap`).
* **Centered Ordered List Content & Markers:** Aligned `<ol>` numbers with list item text using `list-style-position: inside;` with `text-align: center;` (or centered list containers with `width: fit-content; margin: 0 auto;`).
* **Removed Default List Markers:** Cleared default numbers and bullets using `list-style-type: none;` and reset default indentation (`padding-left: 0;`).

### 3. VS Code Workspace & GitHub Version Control Workflow
* **Verified Workspace File Paths:** Confirmed exact local save paths in VS Code via editor tab hover tooltips, breadcrumbs, and **Copy Path** (`Shift + Alt + C`).
* **Verified Repository & Remote Link:** Checked the active directory (`pwd`) and confirmed the linked GitHub remote URL (`git remote -v`) before syncing.
* **Committed & Pushed Changes:** Followed the complete local-to-remote Git workflow:
  ```powershell
  git status
  git add .
  git commit -m "Complete HTML, CSS, and JS assignment setup"
  git push
  ```

---

## Project Files
* `index.html` — Semantic HTML5 document structure with external CSS `<link>` in `<head>` and `<script>` at the bottom of `<body>`.
* `styles.css` — Custom stylesheet covering typography, box model spacing, layout, and list formatting.
* `script.js` — Connected JavaScript file verified via browser console output.
* `README.md` — Project documentation summarizing setup, styling, and Git workflow steps.

---

## How to Run Locally
1. Clone or open the project folder in **Visual Studio Code**.
2. Open `index.html` in Chrome (or launch via the **Live Server** extension).
3. Press **F12** (or **Ctrl + Shift + I**) and open the **Console** tab to verify JavaScript output.
