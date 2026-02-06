

# 📚 Ardi's Web Dev Revision Website

## Topics Found in Your PDFs

### HTML (from Bootcamp_Note.pdf)
- Tags: inline vs block, semantic vs non-semantic (`<strong>`, `<em>`, `<b>`, `<i>`)
- Elements: `<div>`, `<br>`, `<button>`, `<a>`, `<img>`, lists (`<ol>`, `<ul>`, `<li>`, `<dl>`)
- Attributes & structure
- HTML5 tags: `<audio>`, `<video>`, `<canvas>`, `<datalist>`, `<details>`, `<embed>`, `<figure>`
- Input types: date, datetime-local, month, range

### CSS (from Bootcamp_Note.pdf)
- CSS types: inline, internal, external
- Selectors: id, class, element, universal, grouping, attribute, pseudo-class, pseudo-element
- Units: px, rem, em, %, vh, vw, fr
- Box model, margin, padding, border, border-radius
- Display: block, inline, inline-block, none, visibility
- Flexbox: justify-content, align-items, flex-direction, flex-wrap, gap, flex-grow/shrink
- Grid: template-columns/rows, grid-area, template-areas, place-items
- Positioning: relative, absolute, z-index
- Responsive design: media queries, breakpoints, viewport
- Transform, transition, animation (@keyframes)
- Overflow, white-space, text-overflow
- Background images, box shadow
- CSS Specificity
- Block-based vs utility-based design

### JavaScript (from JavaScript.pdf, web_day_13–18)
- Data types & variables (var, let, const)
- Math operations, increment/decrement, compound assignment
- Strings: declaring, escaping, concatenation, length, bracket notation, immutability, methods (toLowerCase, toUpperCase, trim, split, replace, replaceAll, substring)
- Arrays: creating, accessing, nesting, push/pop/shift/unshift, includes, indexOf, join, concat, slice, splice, sort, reverse
- Objects: dot/bracket notation, nested objects, delete/update, looping (for...in, Object.keys), constructor functions, classes, `this`, structuredClone, Object.freeze
- Conditionals: if/else, comparison operators (==, ===, !=, !==), ternary, nested ternary, switch, logical operators (&&, ||, !, !!)
- Loops: for, for...of, while, do...while
- Functions: declaration, parameters/arguments, return, scope (global/local), arrow functions
- Number methods: parseInt, parseFloat, toFixed, Number(), isNaN, Number.isInteger, toString
- Math object: round, floor, ceil, abs, random
- Date object: creating, getting values, formatting, comparing, age calculator
- "use strict", JSON.stringify, radix/number systems

### Git & GitHub (from Bootcamp_Note.pdf)
- What is Git/GitHub, differences
- Commands: init, status, add, commit, log, branch, checkout, merge, push, pull, clone, fetch
- Collaboration, branching

### Practice Tasks & Logic Tips
- BMI calculator, vowel checker, string reversal
- Loop logic patterns ("search for failure" pattern)
- Array traversal and reversal techniques

---

## Site Structure (Sitemap)

- **🏠 Home** — Welcome + progress overview + 7-day revision planner
- **📄 HTML**
  - Tags (Inline vs Block, Semantic vs Non-Semantic)
  - Lists & Structure
  - HTML5 Elements & Input Types
- **🎨 CSS**
  - Selectors
  - Box Model & Units
  - Flexbox
  - Grid
  - Positioning & Z-index
  - Responsive Design & Media Queries
  - Transform, Transition & Animation
  - Overflow & Text Handling
  - CSS Specificity & Design Approaches
- **⚡ JavaScript**
  - Variables & Data Types
  - Operators & Math
  - Strings & String Methods
  - Arrays & Array Methods
  - Objects & Classes
  - Conditionals & Logical Operators
  - Loops
  - Functions & Arrow Functions
  - Math & Date Objects
  - Strict Mode & Freezing
- **🔧 Git & GitHub**
  - Basics & Commands
  - Collaboration
- **❓ Interview Questions** — Collected from all notes
- **📝 Practice Tasks** — Coding exercises from your notes
- **⚡ Quick Revision** — One-page bullet-point summaries of every topic
- **📋 Cheatsheets** — Compact reference cards for HTML, CSS, JS, Git

---

## Features

### Page 1: Home Dashboard
- Welcome message with your overall revision progress (percentage of topics marked as revised)
- Auto-generated **7-day revision planner** based on the sitemap
- Quick links to jump into any section

### Page 2–N: Topic Pages
Each topic page includes:
- **Simple definition** in easy English
- **Why it matters** section
- **Syntax/patterns** with styled code blocks
- **Examples** taken directly from your notes
- **Common mistakes** (where noted)
- **Quick recap** bullet points
- **Mini practice questions** with toggle-to-reveal answers
- **"Mark as revised" checkbox** (saved to localStorage)
- **Previous / Next** navigation buttons

### Learning Features
- **Collapsible sidebar** with all topics organized by category
- **Sticky header** with global search bar across all content
- **Dark / Light mode toggle** (saved to localStorage)
- **Breadcrumb navigation** (Home → JS → Arrays)
- **Fully responsive** for mobile and desktop
- **Random Quiz Generator** — pulls questions from your notes, shows one at a time with reveal answers
- **Quick Revision page** — short summaries of all topics on one scrollable page
- **Cheatsheets page** — compact reference cards

### Data Architecture
- All content stored in a structured JSON-like data file
- Content loaded dynamically from the data source
- Progress state persisted in localStorage

