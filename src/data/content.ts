export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface TopicSection {
  id: string;
  title: string;
  definition: string;
  whyItMatters: string;
  syntax: string[];
  examples: string[];
  commonMistakes?: string[];
  recap: string[];
  practiceQuestions: QuizQuestion[];
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  topics: TopicSection[];
}

export const categories: Category[] = [
  {
    id: "html",
    title: "HTML",
    icon: "📄",
    topics: [
      {
        id: "html-tags",
        title: "Tags (Inline vs Block, Semantic vs Non-Semantic)",
        definition: "HTML tags are keywords surrounded by angle brackets that define how content is displayed. Inline tags don't break the flow of text, while block tags take up the full width. Semantic tags have meaning, non-semantic ones don't.",
        whyItMatters: "Understanding tag types helps you structure web pages correctly and write cleaner, more accessible code that search engines and screen readers understand.",
        syntax: [
          "<!-- Non-Semantic (not recommended) -->\n<b>Bold</b>\n<i>Italic</i>",
          "<!-- Semantic (meaningful) -->\n<strong>Important</strong>\n<em>Emphasis</em>",
          "<!-- Block elements -->\n<h1>Heading</h1>\n<p>Paragraph</p>",
          "<!-- Inline elements -->\n<span>Inline text</span>\n<a href=\"#\">Link</a>"
        ],
        examples: [
          "// Inline tags don't stop text flow:\n<strong>Bold text</strong> continues on the same line.",
          "// Block elements take full width:\n<h1>This heading</h1>\n<p>Takes its own line</p>"
        ],
        commonMistakes: [
          "Using <b> and <i> instead of <strong> and <em> — semantic tags are preferred in modern web dev.",
          "Putting block elements inside inline elements."
        ],
        recap: [
          "Inline tags: don't break text flow (<strong>, <em>, <a>, <span>)",
          "Block tags: take full width (<h1>, <p>, <div>)",
          "Semantic tags have meaning — use <strong> not <b>",
          "<em> = emphasis, <strong> = important"
        ],
        practiceQuestions: [
          { question: "What is the difference between <b> and <strong>?", options: ["No difference", "<strong> is semantic and means important", "<b> is newer", "<strong> is inline only"], answer: "<strong> is semantic and means important" },
          { question: "Which is a block element?", options: ["<span>", "<a>", "<p>", "<em>"], answer: "<p>" },
          { question: "What does <em> stand for?", options: ["Emergency", "Emphasis", "Embed", "Element"], answer: "Emphasis" }
        ]
      },
      {
        id: "html-lists-structure",
        title: "Lists & Structure",
        definition: "HTML provides several ways to organize content: ordered lists (<ol>), unordered lists (<ul>), and description lists (<dl>). The <div> tag is a generic container for grouping elements.",
        whyItMatters: "Lists and containers help organize content logically, making pages easier to read and navigate.",
        syntax: [
          "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>",
          "<ul>\n  <li>Bullet item</li>\n</ul>",
          "<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>",
          "<div>Generic container</div>\n<br> <!-- Line break -->\n<button>Click me</button>",
          "<a href=\"url\">Link text</a>\n<img src=\"images/pic.png\" alt=\"description\">"
        ],
        examples: [
          "<!-- Ordered list -->\n<ol>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ol>",
          "<!-- Image with relative path -->\n<img src=\"images/ardi/pic1\" alt=\"Profile pic\">"
        ],
        recap: [
          "<ol> = ordered (numbered) list",
          "<ul> = unordered (bullet) list",
          "<li> = list item (inside ol or ul)",
          "<dl> = description list, <dt> = title, <dd> = description",
          "<div> = generic container for grouping",
          "<a href=\"\"> = anchor tag with href attribute",
          "<img src=\"\" alt=\"\"> = image with source and alt text"
        ],
        practiceQuestions: [
          { question: "Which tag creates a numbered list?", options: ["<ul>", "<ol>", "<dl>", "<nl>"], answer: "<ol>" },
          { question: "What goes inside <ol> or <ul>?", options: ["<dt>", "<dd>", "<li>", "<dl>"], answer: "<li>" },
          { question: "What attribute does <a> need for a link?", options: ["src", "href", "link", "url"], answer: "href" }
        ]
      },
      {
        id: "html5-elements",
        title: "HTML5 Elements & Input Types",
        definition: "HTML5 introduced new semantic elements like <audio>, <video>, <canvas>, <datalist>, <details>, <embed>, <figure>, and new input types for better forms.",
        whyItMatters: "HTML5 elements let you embed media and create richer forms without extra plugins or JavaScript.",
        syntax: [
          "<audio> → sound player\n<video> → video player\n<canvas> → drawing board for JS",
          "<datalist> → autocomplete input\n<details> → click to expand info\n<embed> → insert external file",
          "<figure> → container for media\n<figcaption> → title for the media",
          "<!-- New input types -->\ntype=\"date\" → calendar date picker\ntype=\"datetime-local\" → local date & time\ntype=\"month\" → month & year picker\ntype=\"range\" → number slider"
        ],
        examples: [
          "<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content here</p>\n</details>",
          "<input type=\"range\" min=\"0\" max=\"100\">\n<input type=\"date\">"
        ],
        recap: [
          "<audio> for sound, <video> for video, <canvas> for JS drawing",
          "<datalist> gives autocomplete suggestions",
          "<details> creates expandable sections",
          "<figure> + <figcaption> for media with captions",
          "New input types: date, datetime-local, month, range"
        ],
        practiceQuestions: [
          { question: "Which HTML5 tag is used for a drawing board?", options: ["<draw>", "<canvas>", "<svg>", "<paint>"], answer: "<canvas>" },
          { question: "What input type creates a slider?", options: ["slider", "number", "range", "bar"], answer: "range" }
        ]
      }
    ]
  },
  {
    id: "css",
    title: "CSS",
    icon: "🎨",
    topics: [
      {
        id: "css-selectors",
        title: "Selectors",
        definition: "CSS selectors are patterns used to select and style HTML elements. There are many types: id, class, element, universal, grouping, attribute, pseudo-class, and pseudo-element selectors.",
        whyItMatters: "Selectors are the foundation of CSS — you can't style anything without knowing how to target it.",
        syntax: [
          "/* ID selector (unique) */\n#id-name { }",
          "/* Class selector (reusable) */\n.class-name { }",
          "/* Element selector */\nbody { }\nh1 { }",
          "/* Universal selector */\n* { }",
          "/* Grouping selector */\nh1, h2, h3 { }",
          "/* Attribute selectors */\na[href] { }              /* has attribute */\ninput[type=\"text\"] { }    /* exact value */\na[href^=\"https\"] { }     /* starts with */\nimg[src$=\".png\"] { }     /* ends with */",
          "/* Pseudo-class */\na:visited { }\nbtn:hover { }\nli:last-child { }\ninput:focus { }\nli:nth-child(2n) { }",
          "/* Pseudo-element */\np::first-letter { }\np::first-line { }\n::selection { }\n::after { }\n::before { }\ninput::placeholder { }"
        ],
        examples: [
          "/* Multiple classes on one element */\n<button class=\"main blue submit\">Submit</button>",
          "/* Grouping selectors */\n.highlight, .attention {\n  color: yellow;\n  font-weight: bolder;\n}",
          "/* Styling a specific part */\n<p>Text <span style=\"color: red;\">highlighted</span> here</p>"
        ],
        commonMistakes: [
          "Using IDs too much — classes are more reusable.",
          "Forgetting that attribute selectors use square brackets []."
        ],
        recap: [
          "#id — unique, .class — reusable, tag — all elements",
          "* — universal, h1, h2 — grouping",
          "Attribute: a[href], input[type='text'], a[href^='https']",
          "Pseudo-class: :hover, :focus, :nth-child()",
          "Pseudo-element: ::before, ::after, ::first-letter",
          "Remember: [] means select by attribute"
        ],
        practiceQuestions: [
          { question: "Which selector targets all elements?", options: ["#all", ".all", "*", "all()"], answer: "*" },
          { question: "How do you select an element with id 'header'?", options: [".header", "#header", "header", "*header"], answer: "#header" },
          { question: "Which pseudo-class is triggered on mouse hover?", options: [":active", ":hover", ":focus", ":visited"], answer: ":hover" }
        ]
      },
      {
        id: "css-box-model",
        title: "Box Model & Units",
        definition: "The CSS box model describes how every element is a box with content, padding (inside space), border, and margin (outside space). CSS units define sizes — px is fixed, rem/em/% are relative.",
        whyItMatters: "Understanding the box model is essential for controlling layout and spacing. Using the right units ensures responsive, consistent designs.",
        syntax: [
          "/* Box model */\ndiv {\n  width: 320px;\n  padding: 10px;\n  border: 5px solid gray;\n  margin: 0;\n}\n/* Total width = 320 + 20(padding) + 10(border) = 350px */",
          "/* Border */\nborder: 10px solid color-name;\nborder-top: ...;",
          "/* Margin shortcuts */\nmargin: top right bottom left;    /* 4 values */\nmargin: top-bottom right-left;    /* 2 values */\nmargin: top right-left bottom;    /* 3 values */",
          "/* Border radius (clockwise) */\n/* 4 values: TL TR BR BL */\n/* 3 values: TL TR BR (BL=TR) */\n/* 2 values: (TL+BR) (TR+BL) */\n/* 1 value: all corners */"
        ],
        examples: [
          "/* CSS Units */\npx  → fixed (borders, small stuff)\nrem → best default for fonts + spacing\nem  → based on current text (good for button padding)\n%   → based on parent (layout width)\nvh  → based on screen height\nvw  → based on screen width\nfr  → grid flexible columns",
          "/* Rule of thumb */\nUse rem for most things\npx for tiny fixed things\n% / fr for layout\nvh / vw for screen sizing\n\n16px = 1rem"
        ],
        commonMistakes: [
          "Forgetting that padding and border add to the total width of an element.",
          "Using px for everything — use rem for scalable designs."
        ],
        recap: [
          "Every element is a box: content → padding → border → margin",
          "Padding = inside space, Margin = outside space",
          "Total width = width + padding + border",
          "px = fixed, rem = best for fonts, % = parent-based, vh/vw = screen-based",
          "16px = 1rem"
        ],
        practiceQuestions: [
          { question: "What is the total width of an element with width: 200px, padding: 10px, border: 5px?", options: ["200px", "230px", "215px", "220px"], answer: "230px" },
          { question: "Which unit is relative to the root font size?", options: ["px", "em", "rem", "%"], answer: "rem" },
          { question: "What does padding do?", options: ["Adds space outside the element", "Adds space inside the element", "Adds a border", "Changes font size"], answer: "Adds space inside the element" }
        ]
      },
      {
        id: "css-flexbox",
        title: "Flexbox",
        definition: "Flexbox (Flexible Box Layout) is a one-dimensional layout system that distributes space along a single axis — either horizontally (row) or vertically (column).",
        whyItMatters: "Flexbox makes it easy to align, distribute, and order items in a container without complex float or positioning tricks.",
        syntax: [
          "display: flex;",
          "/* Main axis (horizontal) */\njustify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;",
          "/* Cross axis (vertical) */\nalign-items: start | end | center | stretch;",
          "/* Direction */\nflex-direction: row | row-reverse | column | column-reverse;",
          "/* Wrapping */\nflex-wrap: wrap | nowrap;",
          "/* Gap */\ngap: 10px;\ncolumn-gap: 10px;\nrow-gap: 10px;",
          "/* Child properties */\nflex-grow: 0;   /* default, don't grow */\nflex-grow: 1;   /* fill empty space */\nflex-shrink: 1; /* default, can shrink */\nflex-shrink: 0; /* don't shrink */",
          "/* Multi-line alignment */\nalign-content: space-around | space-between | space-evenly | flex-start | flex-end | center;"
        ],
        examples: [
          "/* Center items */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
          "/* Navbar with space-between */\n/* Items on opposite sides */\njustify-content: space-between;\n/* Put items inside divs */",
          "/* space-between: first and last item touch the edge */\n/* space-around: uneven spaces */\n/* space-evenly: all spaces are even */"
        ],
        commonMistakes: [
          "Confusing justify-content (main axis) with align-items (cross axis).",
          "Forgetting that flex-direction changes which axis is main."
        ],
        recap: [
          "display: flex on parent container",
          "justify-content = horizontal alignment",
          "align-items = vertical alignment",
          "flex-direction: row (default) or column",
          "gap for spacing between items",
          "flex-grow: 1 fills space, flex-shrink: 0 prevents shrinking",
          "space-between: edges, space-around: uneven, space-evenly: equal",
          "align-content controls all lines, align-items controls each line"
        ],
        practiceQuestions: [
          { question: "Which property centers items horizontally in flexbox?", options: ["align-items: center", "justify-content: center", "text-align: center", "flex-align: center"], answer: "justify-content: center" },
          { question: "What does flex-direction: column do?", options: ["Items go left to right", "Items stack vertically", "Items reverse order", "Items wrap"], answer: "Items stack vertically" },
          { question: "What's the difference between space-between and space-evenly?", options: ["No difference", "space-between has equal gaps, space-evenly doesn't", "space-between: items touch edges; space-evenly: equal gaps everywhere", "space-evenly is deprecated"], answer: "space-between: items touch edges; space-evenly: equal gaps everywhere" }
        ]
      },
      {
        id: "css-grid",
        title: "Grid",
        definition: "CSS Grid is a two-dimensional layout system that works with both rows and columns simultaneously. The parent controls the grid structure, and children control their position inside it.",
        whyItMatters: "Grid makes complex layouts easy — cards, dashboards, full-page layouts. It's more powerful than flexbox for 2D designs.",
        syntax: [
          "/* Parent (Container) */\ndisplay: grid;\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-rows: auto 200px;\ngap: 10px;",
          "/* Shorthand */\ngrid-template: repeat(2, 200px) / repeat(3, 1fr);",
          "/* Alignment */\nplace-items: center;  /* shortcut for align + justify items */\nplace-content: center; /* move entire grid */",
          "/* Child (Item) */\ngrid-column: 1 / 3;  /* span columns */\ngrid-row: 1 / 2;\nplace-self: center;  /* center just this item */",
          "/* Named areas */\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n\n.container {\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}"
        ],
        examples: [
          "/* 90% usage - Parent */\ndisplay: grid;\ngrid-template-columns: ...;\ngap: ...;\nplace-items: ...;",
          "/* 90% usage - Child */\ngrid-column: ...;\ngrid-row: ...;\nplace-self: ...;"
        ],
        recap: [
          "Grid = 2D layout (rows + columns)",
          "Parent controls structure, child controls position",
          "grid-template-columns: repeat(3, 1fr) = 3 equal columns",
          "gap for spacing, place-items for alignment",
          "grid-area + grid-template-areas for named layouts",
          "Grid vs Flex: Grid = content placement, Flex = content flow"
        ],
        practiceQuestions: [
          { question: "Is CSS Grid one-dimensional or two-dimensional?", options: ["One-dimensional", "Two-dimensional", "Three-dimensional", "Neither"], answer: "Two-dimensional" },
          { question: "What does 1fr mean in grid?", options: ["1 pixel", "1 fraction of available space", "1 frame", "1 font-size"], answer: "1 fraction of available space" }
        ]
      },
      {
        id: "css-positioning",
        title: "Positioning & Z-index",
        definition: "CSS position property controls how an element is placed on the page. Elements can be positioned relative to their normal flow or absolutely within a parent. Z-index controls stacking order.",
        whyItMatters: "Positioning is essential for overlays, badges, floating elements, and any time you need to place something precisely on the page.",
        syntax: [
          "/* Position an element on corner of parent */\n.parent {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n}",
          "/* Bottom-left corner */\nbottom: 0;\nleft: 0;\ntransform: translate(-50%, 50%);",
          "/* Top-left corner */\ntop: 0;\nleft: 0;\ntransform: translate(-50%, -50%);"
        ],
        examples: [
          "/* Place a badge on top-right of a card */\n.card { position: relative; }\n.badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n}"
        ],
        commonMistakes: [
          "Using position: absolute without setting the parent to position: relative.",
          "Forgetting that positioned elements become floating — they leave normal document flow."
        ],
        recap: [
          "position: relative — stays in flow, offset from normal position",
          "position: absolute — removed from flow, positioned relative to nearest positioned parent",
          "Always set parent to relative when using absolute on child",
          "z-index controls stacking order (higher = on top)",
          "transform: translate() to fine-tune position"
        ],
        practiceQuestions: [
          { question: "What must the parent have for absolute positioning to work correctly?", options: ["display: flex", "position: relative", "z-index: 1", "overflow: hidden"], answer: "position: relative" },
          { question: "What does z-index control?", options: ["Horizontal position", "Vertical position", "Stacking order", "Font size"], answer: "Stacking order" }
        ]
      },
      {
        id: "css-responsive",
        title: "Responsive Design & Media Queries",
        definition: "Responsive design makes websites adapt to different screen sizes. Media queries apply CSS rules based on screen width using breakpoints.",
        whyItMatters: "Most users browse on mobile. Responsive design ensures your site looks great on all devices.",
        syntax: [
          "/* Media query syntax */\n@media [media-type] and (breakpoint) {\n  /* css code */\n}",
          "/* Mobile first (scale up) */\n@media (min-width: 516px) { }",
          "/* Desktop first (scale down) */\n@media (max-width: 576px) { }",
          "/* Tablet range */\n@media screen and (min-width: 576px) and (max-width: 992px) { }",
          "/* Common breakpoints */\n/* Phone: max-width: 576px */\n/* Tablet: 576px - 992px */\n/* Desktop: 992px+ */"
        ],
        examples: [
          "/* Responsive thinking in 5 steps */\n1. Set breakpoints\n2. Write media queries\n3. Adjust styles\n4. Handle images, navbar, fonts\n5. Test on different devices",
          "/* Responsive image */\nimg { max-width: 100%; }",
          "/* Responsive container */\n.container {\n  max-width: 1600px;\n  margin: auto;\n}"
        ],
        recap: [
          "min-width = mobile first (scale up)",
          "max-width = desktop first (scale down)",
          "img { max-width: 100% } for responsive images",
          "Use relative units (rem, %, vw) for responsive sizing",
          "max-width + margin: auto = centered responsive container",
          "Make responsive right after each section is done"
        ],
        practiceQuestions: [
          { question: "What does min-width mean in a media query?", options: ["Apply when screen is smaller than value", "Apply when screen is larger than value", "Set minimum element width", "Set minimum font size"], answer: "Apply when screen is larger than value" },
          { question: "How do you make an image responsive?", options: ["width: 100px", "max-width: 100%", "display: flex", "position: absolute"], answer: "max-width: 100%" }
        ]
      },
      {
        id: "css-transform-animation",
        title: "Transform, Transition & Animation",
        definition: "Transform changes an element's shape/position (scale, rotate, translate, skew). Transition creates smooth changes between states. Animation uses @keyframes for complex multi-step effects.",
        whyItMatters: "Animations and transitions make websites feel polished and professional, improving user experience.",
        syntax: [
          "/* Transform */\ntransform: translate(x, y);  /* move */\ntransform: scale(1.5);       /* resize */\ntransform: rotate(45deg);    /* rotate */\ntransform: skew(10deg);      /* diagonal */",
          "/* Combine transforms (order matters) */\ntransform: scale(1.2) rotate(10deg);",
          "/* Transition (smooth state changes) */\ntransition: property duration timing delay;\ntransition: transform 0.3s ease, box-shadow 0.3s ease;",
          "/* Animation with @keyframes */\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\nanimation: fadeUp 0.6s ease-out forwards;"
        ],
        examples: [
          "/* Hover effect with transition */\n.card:hover {\n  transform: scale(1.05);\n  transition: transform 0.3s ease;\n}"
        ],
        recap: [
          "transform: translate() moves, scale() resizes, rotate() spins, skew() slants",
          "Can combine multiple transforms (order matters)",
          "transition = smooth change between two states",
          "animation + @keyframes = multi-step complex effects",
          "translate() moves element without disturbing others",
          "Best used for hover effects and animations"
        ],
        practiceQuestions: [
          { question: "What does transform: scale(2) do?", options: ["Moves element", "Doubles the size", "Rotates 2 degrees", "Sets opacity to 2"], answer: "Doubles the size" },
          { question: "What CSS property creates smooth hover effects?", options: ["animation", "transform", "transition", "@keyframes"], answer: "transition" }
        ]
      },
      {
        id: "css-overflow",
        title: "Overflow & Text Handling",
        definition: "Overflow controls what happens when content is too big for its container. White-space controls text wrapping. Text-overflow controls how hidden text is displayed.",
        whyItMatters: "Handling overflow and text properly prevents ugly layout breaks and ensures content is readable.",
        syntax: [
          "/* Overflow */\noverflow: visible;  /* default, content spills out */\noverflow: hidden;   /* content clipped */\noverflow: scroll;   /* always show scrollbars */\noverflow: auto;     /* scrollbars only when needed */",
          "/* White-space */\nwhite-space: normal;  /* default, text wraps */\nwhite-space: nowrap;  /* text never wraps */\nwhite-space: pre;     /* preserves formatting */",
          "/* Text-overflow */\ntext-overflow: clip;      /* text cut off */\ntext-overflow: ellipsis;  /* shows ... */\n\n/* For ellipsis to work, need all three: */\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;"
        ],
        examples: [
          "/* Truncate text with ellipsis */\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"
        ],
        recap: [
          "overflow: auto is usually the best choice",
          "For text truncation: nowrap + hidden + ellipsis",
          "white-space: nowrap prevents text wrapping",
          "title attribute shows full text on hover"
        ],
        practiceQuestions: [
          { question: "How do you show '...' when text overflows?", options: ["overflow: dots", "text-overflow: ellipsis", "text-wrap: ellipsis", "overflow: ellipsis"], answer: "text-overflow: ellipsis" }
        ]
      },
      {
        id: "css-specificity",
        title: "CSS Specificity & Design Approaches",
        definition: "CSS Specificity determines which styles win when multiple rules target the same element. Block-based design uses semantic classes, utility-based design uses small reusable classes like Tailwind.",
        whyItMatters: "Understanding specificity prevents frustrating style conflicts. Choosing the right design approach affects scalability.",
        syntax: [
          "/* Specificity hierarchy (highest to lowest) */\n!important > #id > .class > tag > * (universal)",
          "/* Block-based design */\n.card { padding: 1rem; background: white; }\n\n/* Utility-based design (like Tailwind) */\n<div class=\"p-4 bg-white\">..."
        ],
        examples: [
          "/* Block vs Utility comparison */\n| Feature       | Block-based    | Utility-based |\n| CSS size      | Larger         | Smaller       |\n| HTML          | Cleaner        | Busy          |\n| Reusability   | Medium         | High          |\n| Scalability   | Medium         | Excellent     |\n| Best for      | Small-medium   | Large apps    |"
        ],
        recap: [
          "!important > #id > .class > tag > *",
          "Block-based: semantic classes (.card), cleaner HTML",
          "Utility-based: small classes (p-4), better scalability",
          "Use block-based for small projects, utility for large ones"
        ],
        practiceQuestions: [
          { question: "Which has higher specificity?", options: [".class", "#id", "tag", "*"], answer: "#id" },
          { question: "What overrides everything in CSS?", options: ["#id", "inline styles", "!important", ".class"], answer: "!important" }
        ]
      },
      {
        id: "css-display-visibility",
        title: "Display & Visibility",
        definition: "The display property controls how elements are rendered. Display: none hides an element completely. Visibility: hidden hides content but keeps the space. Display: inline-block lets you set width/height on inline elements.",
        whyItMatters: "Controlling element visibility and display behavior is fundamental for building layouts and toggling UI elements.",
        syntax: [
          "display: none;        /* hides everything including space */\nvisibility: hidden;   /* hides content but keeps space */",
          "display: block;       /* takes full width */\ndisplay: inline;      /* no width/height */\ndisplay: inline-block; /* inline but can set width/height */",
          "/* Box shadow */\nbox-shadow: 10px 10px 5px gray;    /* +x +y blur color */\nbox-shadow: -10px -10px 5px gray;  /* -x -y */",
          "/* Background image */\nbackground-image: url('file.png');\nbackground-repeat: no-repeat;\nbackground-size: cover;\nbackground-position: center;"
        ],
        examples: [
          "/* Hide for responsive */\n.hide { display: none !important; }",
          "/* Background hero */\nbackground-size: cover;  /* best for hero banners */\nbackground-size: contain; /* whole image visible */"
        ],
        recap: [
          "display: none removes element entirely",
          "visibility: hidden keeps the space",
          "inline-block = inline + can set width/height",
          "width and height don't work on display: inline",
          "box-shadow: x y blur color",
          "background-size: cover for hero images"
        ],
        practiceQuestions: [
          { question: "What's the difference between display:none and visibility:hidden?", options: ["No difference", "display:none removes space, visibility:hidden keeps it", "visibility:hidden removes space", "Both keep space"], answer: "display:none removes space, visibility:hidden keeps it" }
        ]
      }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "⚡",
    topics: [
      {
        id: "js-variables",
        title: "Variables & Data Types",
        definition: "Variables are containers that hold data values. JavaScript has 7 data types: undefined, null, string, number, boolean, symbol, and object. Variables are declared with var, let, or const.",
        whyItMatters: "Variables are the building blocks of every program. Understanding data types prevents bugs and helps you write correct code.",
        syntax: [
          "// Declaring variables\nvar a;           // declaring (uninitialized)\nvar b = 4;       // declaring and assigning\n\n// 5 things to declare: keyword, name, =, value, ;",
          "// var vs let vs const\nvar   → for the whole program\nlet   → only within the scope\nconst → can never change (primitive value)",
          "// Data types\nundefined, null, string, number, boolean, symbol, object",
          "// typeof operator\ntypeof 42        // \"number\"\ntypeof \"hello\"   // \"string\"",
          "// Naming rules\n- No keywords\n- No spaces\n- No quotes\n- Can't start with number\n- Use camelCase: myFirstName"
        ],
        examples: [
          "var myFirstName = \"Ardi\";\nvar greetMe = \"Hello, \" + myFirstName + \"!\";",
          "// const with arrays/objects\nconst a = [1, 2, 3];\na.push(4);  // ✅ allowed (modifying)\na = [5, 6]; // ❌ error (reassigning)",
          "// 3 naming conventions\nsnake_case  → my_first_name\ncamelCase   → myFirstName (most used)\nPascalCase  → MyFirstName"
        ],
        commonMistakes: [
          "Using var instead of let/const — var has function scope which can cause unexpected bugs.",
          "Trying to reassign a const variable.",
          "Forgetting that const arrays/objects can still be modified (push, delete), just not reassigned."
        ],
        recap: [
          "var = function scope, let = block scope, const = can't reassign",
          "7 data types: undefined, null, string, number, boolean, symbol, object",
          "typeof checks data type",
          "Use camelCase for variable names",
          "const arrays can be modified (push/pop) but not reassigned"
        ],
        practiceQuestions: [
          { question: "Which keyword creates a variable that can't be reassigned?", options: ["var", "let", "const", "fixed"], answer: "const" },
          { question: "Can you push to a const array?", options: ["Yes", "No", "Only strings", "Only numbers"], answer: "Yes" },
          { question: "What does typeof return for a string?", options: ["\"text\"", "\"string\"", "\"str\"", "\"char\""], answer: "\"string\"" }
        ]
      },
      {
        id: "js-operators",
        title: "Operators & Math",
        definition: "Operators perform operations on values. JavaScript has arithmetic operators (+, -, *, /, %), increment/decrement (++, --), compound assignment (+=, -=), and the exponentiation operator (**).",
        whyItMatters: "Math operations are used everywhere — calculations, counters, scoring, indexes, and more.",
        syntax: [
          "// Arithmetic\nvar sum = 10 + 1;        // addition\nvar diff = 5 - 3;       // subtraction\nvar prod = 10 * 1;      // multiplication\nvar div = 15 / 5;       // division\nvar rem = 10 % 3;       // remainder (modulo)",
          "// Increment & Decrement\nvar a = 4;\na++;  // a = 5\nvar b = 6;\nb--;  // b = 5",
          "// Compound Assignment\nvar a = 5;\na += 3;  // a = 8\na -= 1;  // a = 4\na *= 5;  // a = 25\nb /= 11; // b = 10",
          "// Exponentiation\n5 ** 2  // 25",
          "// Decimal (floating point)\nvar myDecimal = 1.007;"
        ],
        examples: [
          "// Type coercion with +\nconsole.log(50 + '10');  // '5010' (string concat!)\nconsole.log(50 - '10');  // 40 (number math)"
        ],
        commonMistakes: [
          "Adding a number and string with + gives string concatenation, not addition! Only happens with +, not -, *, /."
        ],
        recap: [
          "+ - * / % are basic arithmetic operators",
          "++ increments, -- decrements",
          "+= -= *= /= are compound assignments",
          "** is exponentiation (power)",
          "50 + '10' = '5010' (string!), 50 - '10' = 40 (number)"
        ],
        practiceQuestions: [
          { question: "What does 10 % 3 return?", options: ["3", "1", "0.33", "3.33"], answer: "1" },
          { question: "What does 50 + '10' give?", options: ["60", "'5010'", "510", "Error"], answer: "'5010'" },
          { question: "What does 5 ** 2 equal?", options: ["10", "25", "52", "7"], answer: "25" }
        ]
      },
      {
        id: "js-strings",
        title: "Strings & String Methods",
        definition: "Strings are sequences of characters. They can be declared with single quotes, double quotes, or backticks. Strings are immutable — they can't be changed after creation, but you can create new strings.",
        whyItMatters: "Strings are used for text, messages, user input, URLs, and more. String methods are essential for data processing.",
        syntax: [
          "// Declaring strings\nvar str1 = \"double quotes\";\nvar str2 = 'single quotes';\nvar str3 = `backticks (template literals)`;",
          "// Escaping\nvar quote = \"She said \\\"Hello\\\"\";\n// Escape sequences: \\' \\\" \\\\ \\n \\t",
          "// Concatenation\nvar full = \"Hello, \" + \"World!\";\nvar name = \"Ardi\";\nvar msg = \"Hi \" + name;\n\n// Appending\nvar str = \"Moon is \";\nstr += \"Beautiful!\";",
          "// Length & Bracket Notation\nvar name = \"Ardi\";\nname.length;           // 4\nname[0];               // \"A\" (first)\nname[name.length - 1]; // \"i\" (last)",
          "// String Methods\n.toLowerCase()\n.toUpperCase()\n.trim()       // removes whitespace from start & end\n.trimStart()  // removes from start\n.trimEnd()    // removes from end",
          "// split, replace, substring\n.split(separator)     // string → array\n.replace(\"old\", \"new\") // replaces FIRST match only\n.replaceAll(\"old\", \"new\") // replaces ALL matches\n.substring(start, end)  // extracts part (end not included)"
        ],
        examples: [
          "// String immutability\nvar myStr = \"Jello World\";\nmyStr = \"Hello World\";  // OK: reassign whole string\n// myStr[0] = \"H\";     // NOT OK: can't change individual chars",
          "// Reversing a string\nlet name = \"Ardi\";\nname.split('').reverse().join('');\n// 1. split() → ['A','r','d','i']\n// 2. reverse() → ['i','d','r','A']\n// 3. join() → 'idrA'",
          "// substring\nlet text = \"JavaScript\";\ntext.substring(4, 10); // \"Script\"\n// Automatically swaps if start > end\n\"Hello\".substring(4, 1); // \"ell\" (same as substring(1, 4))",
          "// replace vs replaceAll\nlet msg = \"hi hi hi\";\nmsg.replace(\"hi\", \"hello\");    // \"hello hi hi\"\nmsg.replaceAll(\"hi\", \"hello\"); // \"hello hello hello\"\n// These don't change the original string!"
        ],
        commonMistakes: [
          "Strings are immutable — you can't change characters with bracket notation.",
          "replace() only replaces the FIRST match. Use replaceAll() for all.",
          "replace/replaceAll don't change original — store the result!"
        ],
        recap: [
          "Strings are immutable (can't change, but can reassign)",
          "3 ways to declare: \"...\", '...', `...`",
          ".length for size, [0] for first, [length-1] for last",
          ".toLowerCase(), .toUpperCase(), .trim()",
          ".split() → string to array",
          ".replace() = first match only, .replaceAll() = all matches",
          ".substring(start, end) extracts part, end not included",
          "Reverse: split('').reverse().join('')"
        ],
        practiceQuestions: [
          { question: "Are strings mutable in JavaScript?", options: ["Yes", "No", "Only with const", "Only with let"], answer: "No" },
          { question: "What does 'hello'.split('') return?", options: ["['hello']", "['h','e','l','l','o']", "'h,e,l,l,o'", "Error"], answer: "['h','e','l','l','o']" },
          { question: "Does .replace() modify the original string?", options: ["Yes", "No", "Sometimes", "Only with let"], answer: "No" }
        ]
      },
      {
        id: "js-arrays",
        title: "Arrays & Array Methods",
        definition: "Arrays store multiple values in one variable, accessed by index (starting at 0). Arrays are mutable — you can change their elements. JavaScript has many built-in methods to manipulate arrays.",
        whyItMatters: "Arrays are used to store lists of data — users, products, scores. Array methods are essential for processing and transforming data.",
        syntax: [
          "// Creating arrays\nvar arr = [\"Ardi\", 20, true];\nvar nested = [[1, 2], [3, 4]]; // multi-dimensional",
          "// Accessing & Modifying\narr[0];           // \"Ardi\"\narr[2] = false;   // modify\nnested[1][0];     // 3",
          "// Adding & Removing\n.push(item)    // add to END\n.pop()         // remove from END\n.unshift(item) // add to BEGINNING\n.shift()       // remove from BEGINNING",
          "// Search methods\n.includes(value)  // returns true/false (case sensitive)\n.indexOf(value)   // returns index or -1\nArray.isArray(val) // checks if value is array",
          "// Transform methods\n.join(separator)  // array → string\n.concat(arr2)     // combine arrays (doesn't change original)\n.slice(start)     // extract part (doesn't change original)\n.reverse()        // reverses array (changes original!)\n.sort()           // sorts array (changes original!)",
          "// splice (changes original!)\narr.splice(startIndex, deleteCount, ...newItems)\n\nlet nums = [1, 2, 3, 4, 5, 6];\nnums.splice(1, 3);       // removes 3 items from index 1\n// nums = [1, 5, 6]\n\nnums.splice(2, 2, 10, 11); // replace 2 items with 10, 11"
        ],
        examples: [
          "// Queue (stand in line)\nfunction queue(arr, item) {\n  arr.push(item);      // add to end\n  return arr.shift();  // remove from front\n}\nvar test = [1, 2, 3, 4, 5];\nqueue(test, 6); // returns 1, test = [2,3,4,5,6]",
          "// Reversing without .reverse()\nlet arr = [1, 2, 3, 4];\nlet reversed = [];\nfor (let num of arr) {\n  reversed.unshift(num); // add each to beginning\n}\n// reversed = [4, 3, 2, 1]",
          "// Slice vs Splice\n// slice = safe copy, doesn't change original\n// splice = modifies original array",
          "// concat doesn't change originals\nlet today = [\"HTML\", \"CSS\"];\nlet tomorrow = [\"JS\", \"React\"];\nlet all = today.concat(tomorrow);\n// all = [\"HTML\",\"CSS\",\"JS\",\"React\"]\n// today still = [\"HTML\", \"CSS\"]"
        ],
        commonMistakes: [
          "splice() CHANGES the original array. slice() does NOT.",
          "reverse() and sort() change the original array.",
          "concat() does NOT change the original — it returns a new array.",
          "includes() is case sensitive."
        ],
        recap: [
          "push/pop = end, shift/unshift = beginning",
          "includes() checks existence, indexOf() finds position",
          "join() = array→string, split() = string→array",
          "slice() = safe copy, splice() = modifies original",
          "concat() combines arrays without changing originals",
          "reverse() and sort() modify the original!",
          "Last index is always arr.length - 1"
        ],
        practiceQuestions: [
          { question: "Which method adds to the beginning of an array?", options: ["push()", "pop()", "unshift()", "shift()"], answer: "unshift()" },
          { question: "Does splice() change the original array?", options: ["Yes", "No", "Sometimes", "Only with const"], answer: "Yes" },
          { question: "What does .includes('hello') return?", options: ["Index number", "true or false", "The element", "undefined"], answer: "true or false" }
        ]
      },
      {
        id: "js-objects",
        title: "Objects & Classes",
        definition: "Objects store data as key-value pairs. Keys must be strings, values can be anything. Methods are functions inside objects. Classes are blueprints for creating objects with shared behavior.",
        whyItMatters: "Objects model real-world things — users, products, settings. Classes let you create many objects with the same structure efficiently.",
        syntax: [
          "// Object literal\nlet user = {\n  name: \"Ardi\",\n  age: 22\n};",
          "// Dot notation (fixed, valid key)\nuser.name;      // \"Ardi\"\nuser.age = 23;  // update",
          "// Bracket notation (dynamic, or special chars)\nlet key = \"name\";\nuser[key];       // \"Ardi\"\nuser[\"first-name\"]; // for keys with hyphens",
          "// Methods (functions in objects)\nlet user = {\n  name: \"Ardi\",\n  greet() {\n    console.log(this.name); // 'this' = the object\n  }\n};\nuser.greet(); // \"Ardi\"",
          "// Nested objects\nlet user = {\n  address: { city: \"Dhaka\", country: \"Bangladesh\" }\n};\nuser.address.city;            // \"Dhaka\"\nuser[\"address\"][\"city\"];      // \"Dhaka\"",
          "// Delete & Update\ndelete user.email;\nuser.address.city = \"Khulna\";",
          "// Loop through object\nfor (let key in myObj) {\n  console.log(key, \"->\", myObj[key]);\n}\n// or\nObject.keys(obj); // returns array of keys",
          "// Constructor function\nfunction User(name, age) {\n  this.name = name;\n  this.age = age;\n}\nlet user1 = new User(\"Ardi\", 22);",
          "// Class syntax ⭐\nclass User {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() {\n    console.log(\"Hello!\", this.name);\n  }\n}\nlet user1 = new User(\"Ardi\", 22);"
        ],
        examples: [
          "// hasOwnProperty\nlet obj = { cow: \"moo\", bird: \"chirp\" };\nobj.hasOwnProperty(\"cow\"); // true\nobj.hasOwnProperty(\"dog\"); // false",
          "// structuredClone (deep copy)\nlet user1 = { name: \"Ardi\" };\nlet user2 = structuredClone(user1);\nuser2.name = \"Hasan\";\nuser1.name; // still \"Ardi\"",
          "// Object.freeze (prevent changes)\nlet user = { name: \"Ardi\" };\nObject.freeze(user);\nuser.name = \"Mohammad\"; // silently fails\nuser.name; // still \"Ardi\"\n\n// Freeze is shallow — nested objects can still change!"
        ],
        commonMistakes: [
          "Using dot notation for keys with spaces/hyphens — use bracket notation instead.",
          "user.key looks for property named 'key'. user[key] looks for property stored in variable key.",
          "Object.freeze() is shallow — nested objects are NOT frozen."
        ],
        recap: [
          "Objects = key:value pairs",
          "Dot notation for fixed keys, bracket for dynamic/special keys",
          "Methods are functions inside objects, use 'this' to access properties",
          "for...in loops through object keys",
          "Object.keys() returns array of keys",
          "Constructor functions + new create objects",
          "Class syntax is the modern way to create blueprints",
          "structuredClone() for deep copies",
          "Object.freeze() prevents top-level changes (shallow)"
        ],
        practiceQuestions: [
          { question: "When should you use bracket notation?", options: ["Always", "When key is stored in a variable", "Only for arrays", "Never"], answer: "When key is stored in a variable" },
          { question: "What does 'this' refer to inside an object method?", options: ["The function", "The window", "The object itself", "undefined"], answer: "The object itself" },
          { question: "Is Object.freeze() deep or shallow?", options: ["Deep", "Shallow", "Both", "Neither"], answer: "Shallow" }
        ]
      },
      {
        id: "js-conditionals",
        title: "Conditionals & Logical Operators",
        definition: "Conditionals let you run different code based on conditions. JavaScript has if/else, ternary operator, and switch statements. Logical operators (&&, ||, !, !!) combine or invert conditions.",
        whyItMatters: "Every program needs to make decisions. Conditionals control program flow and handle different scenarios.",
        syntax: [
          "// if / else if / else\nif (condition) {\n  // code\n} else if (condition2) {\n  // code\n} else {\n  // fallback\n}",
          "// Comparison operators\n==   // value only (type conversion)\n===  // value AND type (strict)\n!=   // not equal (value)\n!==  // not equal (strict)\n>  >=  <  <=",
          "// Ternary operator\ncondition ? truePart : falsePart;\nlet result = age >= 18 ? \"Adult\" : \"Minor\";",
          "// Nested ternary\nlet grade = score >= 80 ? \"A\" :\n            score >= 60 ? \"B\" :\n            score >= 40 ? \"C\" : \"F\";",
          "// Switch statement\nswitch (value) {\n  case 1:\n    console.log(\"One\");\n    break;  // VERY important!\n  case 2:\n    console.log(\"Two\");\n    break;\n  default:\n    console.log(\"Other\");\n}",
          "// Stacking cases\nswitch (val) {\n  case 1:\n  case 2:\n  case 3:\n    // same code for 1, 2, 3\n    break;\n}",
          "// Logical operators\n&&   // AND — both must be true\n||   // OR — any one must be true\n!    // NOT — reverses boolean\n!!   // double bang — converts to boolean"
        ],
        examples: [
          "// BMI Calculator\nconst bmi = weight / height ** 2;\nlet msg = bmi < 18.5 ? 'underweight' :\n  (bmi <= 24.9) ? 'normal' :\n  (bmi <= 29.9) ? 'overweight' : 'obese';",
          "// Logical NOT (!)\n!true       // false\n!0          // true (0 is falsy)\n!\"\"         // true (empty string is falsy)\n!null       // true\n!undefined  // true",
          "// Double bang (!!) — force boolean\n!!\"hello\"   // true\n!!0         // false\n!!null      // false\n\n// Use case: check if value exists\nif (!!username) { console.log(\"exists\"); }\nlet isLoggedIn = !!user;",
          "// Returning boolean directly\nfunction isLess(a, b) {\n  return a < b; // no need for if/else!\n}"
        ],
        commonMistakes: [
          "Using == instead of === — always prefer strict equality.",
          "Forgetting break in switch statements — code falls through to next case!",
          "Order matters in if/else if chains — check most specific conditions first."
        ],
        recap: [
          "== checks value only, === checks value AND type",
          "Ternary: condition ? yes : no",
          "Switch needs break after each case!",
          "&&=AND, ||=OR, !=NOT, !!=force boolean",
          "Falsy values: 0, \"\", null, undefined, false, NaN",
          "!! converts any value to boolean",
          "Return booleans directly: return a < b (no need for if/else)"
        ],
        practiceQuestions: [
          { question: "What does === check?", options: ["Value only", "Type only", "Value and type", "Reference"], answer: "Value and type" },
          { question: "What does !!0 return?", options: ["true", "false", "0", "null"], answer: "false" },
          { question: "What happens without break in a switch?", options: ["Error", "Code falls through to next case", "Nothing", "Loop"], answer: "Code falls through to next case" }
        ]
      },
      {
        id: "js-loops",
        title: "Loops",
        definition: "Loops repeat code a certain number of times or while a condition is true. JavaScript has for, for...of, while, and do...while loops.",
        whyItMatters: "Loops process lists of data, repeat tasks, and are fundamental to programming logic.",
        syntax: [
          "// for loop (index-based, more control)\nfor (let i = 0; i < 10; i++) {\n  console.log(i);\n}",
          "// for...of loop (value-based, more readable)\nlet nums = [10, 20, 30];\nfor (let num of nums) {\n  console.log(num);\n}",
          "// while loop (repeat while condition is true)\nlet n = 78;\nwhile (n <= 98) {\n  if (n % 2 === 0) console.log(n);\n  n++;\n}",
          "// do...while (runs at least once)\nlet i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);"
        ],
        examples: [
          "// Sum odd numbers from 91 to 129\nlet sum = 0;\nfor (let i = 91; i <= 129; i++) {\n  if (i % 2 === 1) sum += i;\n}\nconsole.log(sum);",
          "// for vs for...of\n| for loop       | for...of loop |\n| Index-based    | Value-based   |\n| Manual counter | No counter    |\n| More control   | More readable |",
          "// Reversing array with for loop (decremental)\nlet arr = [1, 2, 3, 4];\nlet reversed = [];\nfor (let i = arr.length - 1; i >= 0; i--) {\n  reversed.push(arr[i]);\n}"
        ],
        commonMistakes: [
          "Off-by-one errors: using < vs <= incorrectly.",
          "Infinite loops: forgetting to increment/change the loop variable.",
          "do...while runs at least once even if condition is false from the start."
        ],
        recap: [
          "for loop: index-based, full control",
          "for...of: value-based, cleaner for arrays/strings",
          "while: repeat while condition is true",
          "do...while: runs at least once, then checks condition",
          "Use for when you need index, for...of when you just need values"
        ],
        practiceQuestions: [
          { question: "Which loop always runs at least once?", options: ["for", "while", "do...while", "for...of"], answer: "do...while" },
          { question: "What does for...of give you?", options: ["Index", "Key", "Value", "Both index and value"], answer: "Value" }
        ]
      },
      {
        id: "js-functions",
        title: "Functions & Arrow Functions",
        definition: "Functions are reusable blocks of code. They take parameters, execute code, and can return values. Arrow functions are a shorter syntax. Functions have scope — variables inside are local.",
        whyItMatters: "Functions are the core of programming — they make code reusable, organized, and maintainable.",
        syntax: [
          "// Function declaration\nfunction greet(name) {\n  return \"Hello, \" + name;\n}\ngreet(\"Ardi\"); // \"Hello, Ardi\"",
          "// Parameters vs Arguments\n// Parameters = placeholders in declaration\n// Arguments = actual values when calling\nfunction add(a, b) { return a + b; } // a, b = params\nadd(5, 3); // 5, 3 = arguments",
          "// Return statement\n// Only ONE return per execution path\n// Code after return won't execute\nfunction check(x) {\n  if (x < 0) return \"negative\"; // early return\n  return \"positive\";\n}",
          "// Arrow functions (shorter syntax)\n// Normal\nfunction add(a, b) { return a + b; }\n\n// Arrow\nconst add = (a, b) => a + b;\n\n// Single value? No need for return keyword\n// Multiple lines? Need {} + return\nconst calc = (x) => {\n  const result = x * 2;\n  return result;\n};",
          "// Arrow with no params\nlet magic = () => new Date();"
        ],
        examples: [
          "// Scope: Global vs Local\nvar outer = \"T-shirt\"; // global\nfunction outFit() {\n  var outer = \"Hoodie\"; // local\n  return outer;\n}\nconsole.log(outer);     // \"T-shirt\"\nconsole.log(outFit());  // \"Hoodie\"\n// Local scope takes priority over global!",
          "// Count zeros in binary string\nfunction count_zero(binaryStr) {\n  let count = 0;\n  let arr = binaryStr.split(\"\").map(Number);\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === 0) count++;\n  }\n  return count;\n}",
          "// map(Number) — convert array of strings to numbers\nconst arr = [\"0\", \"1\", \"0\"];\nconst nums = arr.map(Number); // [0, 1, 0]"
        ],
        commonMistakes: [
          "Arrow functions do NOT have their own 'this' — they borrow from outside.",
          "const user = { greet: () => { console.log(this.name); } }; // ❌ undefined",
          "Code after return won't execute.",
          "Forgetting to store or use the return value."
        ],
        recap: [
          "function name(params) { return value; }",
          "Parameters = placeholders, Arguments = actual values",
          "Only one return per execution, code after return is ignored",
          "Arrow function: (a, b) => a + b (shorter syntax)",
          "Single expression → no {} or return needed",
          "Arrow functions DON'T have their own 'this'",
          "Local scope > global scope (same name)",
          "Use arrow for: callbacks, array methods, short utilities"
        ],
        practiceQuestions: [
          { question: "Do arrow functions have their own 'this'?", options: ["Yes", "No", "Only with const", "Only in classes"], answer: "No" },
          { question: "What happens to code after a return statement?", options: ["It runs", "It's ignored", "It causes an error", "It runs in strict mode"], answer: "It's ignored" },
          { question: "What's the short form of: function(a,b){return a+b}?", options: ["(a,b) -> a+b", "(a,b) => a+b", "a,b => a+b", "fn(a,b) = a+b"], answer: "(a,b) => a+b" }
        ]
      },
      {
        id: "js-math-date",
        title: "Math & Date Objects",
        definition: "The Math object provides mathematical functions (round, floor, ceil, abs, random). The Date object handles dates and times — creating, formatting, comparing, and calculating.",
        whyItMatters: "Math is needed for calculations, randomization, and rounding. Dates are essential for scheduling, timestamps, and age calculations.",
        syntax: [
          "// Number methods\nparseInt(\"42.9\");      // 42 (string → integer)\nparseInt(\"101\", 2);    // 5 (binary → decimal)\nparseFloat(\"3.14\");    // 3.14 (string → float)\nNumber(\"10\");          // 10\nNumber(\"abc\");         // NaN\n(100).toString();      // \"100\" (number → string)",
          "// Checking numbers\nisNaN(\"abc\");           // true\nisNaN(10);             // false\nNumber.isInteger(10);  // true\nNumber.isInteger(10.5); // false",
          "// Math methods\nMath.round(4.6);  // 5 (nearest)\nMath.floor(4.9);  // 4 (always down)\nMath.ceil(4.1);   // 5 (always up)\nMath.abs(5 - 10); // 5 (absolute value)",
          "// Random number between min & max ⭐\nfunction randomBetween(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}",
          "// Creating dates\nconst now = new Date();              // current date\nconst d1 = new Date(\"2026-02-02\");   // ISO format (safest)\nconst d2 = new Date(2026, 1, 2);     // Feb 2 (months 0-based!)",
          "// Getting values\nd.getFullYear();  // 2026\nd.getMonth();     // 0-11 (0=Jan)\nd.getDate();      // day of month\nd.getDay();       // 0-6 (0=Sun)\nd.getHours();     d.getMinutes();     d.getSeconds();",
          "// Formatting\nd.toDateString();             // \"Mon Feb 02 2026\"\nd.toLocaleDateString();      // locale format\nd.toLocaleDateString(\"en-GB\"); // \"02/02/2026\"",
          "// Comparing dates ⭐⭐⭐\nconst d1 = new Date(\"2026-02-01\");\nconst d2 = new Date(\"2026-02-02\");\nd1 < d2; // true\n// or: d1.getTime() < d2.getTime()"
        ],
        examples: [
          "// Age calculator\nconst birth = new Date(\"2005-03-22\");\nconst now = new Date();\nconst age = now.getFullYear() - birth.getFullYear();",
          "// Check expired date\nconst expiry = new Date(\"2026-02-01\");\nif (new Date() > expiry) {\n  console.log(\"Expired\");\n}",
          "// Random formula explained\nMath.random() * (range size) + starting number\nMath.floor(Math.random() * (max - min + 1) + min);"
        ],
        commonMistakes: [
          "Months are 0-based: 0=Jan, 1=Feb, ..., 11=Dec",
          "Dates are objects — compare timestamps, not directly.",
          ".toFixed() returns a STRING, not a number."
        ],
        recap: [
          "parseInt() = string→integer, parseFloat() = string→float",
          "Math.round/floor/ceil for rounding",
          "Math.abs() = absolute value, Math.random() = 0-1",
          "Random between min & max: Math.floor(Math.random() * (max-min+1)) + min",
          "Months are 0-based in Date objects!",
          "Compare dates with < > or .getTime()",
          "toLocaleDateString() for formatted output"
        ],
        practiceQuestions: [
          { question: "What month is index 0 in JavaScript Date?", options: ["February", "January", "March", "December"], answer: "January" },
          { question: "What does Math.floor(4.9) return?", options: ["5", "4", "4.9", "4.0"], answer: "4" },
          { question: "Does .toFixed() return a number or string?", options: ["Number", "String", "Boolean", "Object"], answer: "String" }
        ]
      },
      {
        id: "js-strict-freeze",
        title: "Strict Mode & Freezing",
        definition: "'use strict' makes JavaScript run in strict mode, preventing silent mistakes and forcing safer coding. Object.freeze() prevents an object from being modified. JSON.stringify() converts objects to strings.",
        whyItMatters: "Strict mode catches common coding errors early. Freezing objects prevents accidental changes to important data.",
        syntax: [
          "// Use strict\n\"use strict\";\n// Place at top of file or function\n// Prevents silent mistakes\n// Forces safer coding",
          "// Object.freeze()\nlet user = { name: \"Ardi\" };\nObject.freeze(user);\nuser.name = \"New\"; // silently fails\nconsole.log(user.name); // \"Ardi\"",
          "// Freeze prevents:\n// - Adding properties\n// - Removing properties\n// - Modifying properties\n// But freeze is SHALLOW!",
          "// JSON.stringify()\nJSON.stringify([1, 2, 3]); // \"[1,2,3]\"\n// Converts JS object/array into JSON string",
          "// Radix (number systems)\nparseInt(\"101\", 2);  // 5 (binary → decimal)\nparseInt(\"FF\", 16);  // 255 (hex → decimal)\n// Radix 2=Binary, 8=Octal, 10=Decimal, 16=Hex"
        ],
        examples: [
          "// Freeze is shallow\nlet user = { address: { city: \"Dhaka\" } };\nObject.freeze(user);\nuser.address.city = \"Khulna\"; // ✅ this WORKS!\n// Need to manually freeze nested objects"
        ],
        recap: [
          "\"use strict\" prevents silent errors",
          "Object.freeze() prevents property changes (shallow only)",
          "Nested objects need to be frozen manually",
          "JSON.stringify() = object → string",
          "parseInt(value, radix) converts between number systems"
        ],
        practiceQuestions: [
          { question: "Is Object.freeze() deep or shallow?", options: ["Deep", "Shallow", "Both", "Neither"], answer: "Shallow" },
          { question: "What does parseInt('101', 2) return?", options: ["101", "5", "3", "2"], answer: "5" }
        ]
      }
    ]
  },
  {
    id: "git",
    title: "Git & GitHub",
    icon: "🔧",
    topics: [
      {
        id: "git-basics",
        title: "Basics & Commands",
        definition: "Git is a version control system that tracks code changes locally. GitHub is an online platform to store Git projects and collaborate. Git works offline; GitHub works online.",
        whyItMatters: "Every developer uses Git daily. It lets you track history, undo mistakes, work in branches, collaborate with teams, and keep backups.",
        syntax: [
          "git init              → start a new git repo\ngit status            → see what changed\ngit add .             → stage all changes\ngit commit -m \"msg\"   → save a checkpoint\ngit log               → see commit history",
          "git branch            → see/create branches\ngit checkout branchName → switch branch\ngit merge branchName  → merge branch into current\ngit remote -v         → view remote repo links",
          "git push              → upload commits to GitHub\ngit pull              → download + merge updates\ngit clone URL         → copy a repo from GitHub\ngit fetch             → download updates (don't merge)"
        ],
        examples: [
          "// Git vs GitHub\n| Git                    | GitHub                         |\n| version control system | hosting platform for Git repos |\n| works locally/offline  | works online                   |\n| tracks code history    | share, collaborate, PRs        |\n| command line tool      | web app + extra features       |",
          "// fetch vs pull\ngit fetch → downloads but does NOT change your code (safe)\ngit pull  → downloads AND merges (fast but can conflict)"
        ],
        recap: [
          "Git = local version control, GitHub = online hosting",
          "git add → stage, git commit → save, git push → upload",
          "git pull = fetch + merge",
          "git fetch = check what's new (safe)",
          "Always commit after small changes with meaningful messages",
          "VCS: collaboration, storing versions, restoring, backup"
        ],
        practiceQuestions: [
          { question: "What's the difference between git fetch and git pull?", options: ["No difference", "fetch downloads only, pull downloads and merges", "pull downloads only", "fetch is faster"], answer: "fetch downloads only, pull downloads and merges" },
          { question: "Which command starts a new git repository?", options: ["git start", "git new", "git init", "git create"], answer: "git init" },
          { question: "Does Git work offline?", options: ["Yes", "No", "Only with GitHub", "Only for commits"], answer: "Yes" }
        ]
      },
      {
        id: "git-collaboration",
        title: "Collaboration",
        definition: "Git enables collaboration through branching and remote repositories. You can create branches for new features, push them to GitHub, and merge them back when ready.",
        whyItMatters: "Real-world projects involve multiple developers. Understanding collaboration workflows prevents code conflicts and keeps projects organized.",
        syntax: [
          "// Push a new branch\ngit push --set-upstream origin new_branch_name",
          "// Basic collaboration workflow\n1. Create a branch for your feature\n2. Make changes and commit\n3. Push the branch to GitHub\n4. Create a Pull Request\n5. Team reviews and merges"
        ],
        examples: [
          "// Workflow example\ngit checkout -b new-feature\n// ... make changes ...\ngit add .\ngit commit -m \"Add new feature\"\ngit push --set-upstream origin new-feature"
        ],
        recap: [
          "Create branches for new features",
          "Push with --set-upstream for new branches",
          "Pull Requests allow code review before merging",
          "Always pull before pushing to avoid conflicts"
        ],
        practiceQuestions: [
          { question: "What flag is used to push a new branch for the first time?", options: ["--new", "--first", "--set-upstream", "--create"], answer: "--set-upstream" }
        ]
      }
    ]
  }
];

// Flatten all topics for navigation
export function getAllTopics(): { topic: TopicSection; category: Category }[] {
  const result: { topic: TopicSection; category: Category }[] = [];
  for (const cat of categories) {
    for (const topic of cat.topics) {
      result.push({ topic, category: cat });
    }
  }
  return result;
}

// Get all quiz questions
export function getAllQuizQuestions(): (QuizQuestion & { topicTitle: string })[] {
  const questions: (QuizQuestion & { topicTitle: string })[] = [];
  for (const cat of categories) {
    for (const topic of cat.topics) {
      for (const q of topic.practiceQuestions) {
        questions.push({ ...q, topicTitle: topic.title });
      }
    }
  }
  return questions;
}

// Interview questions from notes
export const interviewQuestions: { question: string; answer: string; source: string }[] = [
  { question: "What is Git? What are the advantages of using Git?", answer: "Git is a version control system that helps track changes in code. Advantages: track history, undo mistakes, work in branches, team collaboration, backup.", source: "Bootcamp_Note.pdf" },
  { question: "What do you understand by 'Version Control System'?", answer: "VCS is a tool that saves different versions of code, keeps history of changes, and lets teams collaborate without overwriting each other's work.", source: "Bootcamp_Note.pdf" },
  { question: "What's the difference between Git and GitHub?", answer: "Git is a local version control tool. GitHub is an online platform to store Git projects and collaborate. Git works offline, GitHub works online.", source: "Bootcamp_Note.pdf" },
  { question: "Name a few Git commands with their function.", answer: "git init (start repo), git status (see changes), git add . (stage), git commit -m (save checkpoint), git log (history), git push (upload), git pull (download+merge), git clone (copy repo).", source: "Bootcamp_Note.pdf" },
  { question: "Difference between git fetch and git pull?", answer: "git fetch downloads updates but doesn't change your code (safe). git pull downloads and merges them (fast but can cause conflicts).", source: "Bootcamp_Note.pdf" },
  { question: "What is the difference between == and ===?", answer: "== compares values only (with type conversion). === compares both value AND data type (no type conversion). Always prefer ===.", source: "JavaScript.pdf" },
  { question: "What are falsy values in JavaScript?", answer: "0, \"\" (empty string), null, undefined, false, NaN — all evaluate to false in boolean context.", source: "web_day_14.pdf" },
  { question: "What is the difference between var, let, and const?", answer: "var: function scope, can be redeclared. let: block scope, can be reassigned. const: block scope, cannot be reassigned (but arrays/objects can be modified).", source: "JavaScript.pdf" },
  { question: "What is string immutability?", answer: "Strings cannot be changed after creation. You can't modify individual characters with bracket notation. You must create a new string.", source: "JavaScript.pdf" },
  { question: "What does the 'this' keyword refer to in an object method?", answer: "'this' refers to the object that is calling the method. Arrow functions do NOT have their own 'this' — they borrow from outside.", source: "web_day_16.pdf" },
  { question: "What is the difference between slice() and splice()?", answer: "slice() returns a new array without changing the original. splice() modifies the original array by removing/replacing elements.", source: "web_day_14-5.pdf" },
  { question: "What is Object.freeze()?", answer: "Object.freeze() prevents adding, removing, or modifying properties on an object. But it's shallow — nested objects can still be changed.", source: "JavaScript.pdf" },
  { question: "What is the CSS Box Model?", answer: "Every element is a box with: content → padding (inside space) → border → margin (outside space). Total width = width + padding + border.", source: "Bootcamp_Note.pdf" },
  { question: "What is the difference between display:none and visibility:hidden?", answer: "display:none removes the element completely (no space). visibility:hidden hides the content but keeps the occupied space.", source: "Bootcamp_Note.pdf" },
  { question: "What is CSS Specificity?", answer: "Specificity determines which CSS rule wins. Hierarchy: !important > #id > .class > tag > * (universal selector).", source: "Bootcamp_Note.pdf" },
  { question: "What is the difference between flexbox and grid?", answer: "Flexbox is one-dimensional (row OR column), focuses on content flow. Grid is two-dimensional (rows AND columns), focuses on content placement. Grid is better for complex layouts.", source: "Bootcamp_Note.pdf" },
  { question: "What are semantic HTML tags?", answer: "Semantic tags have meaning: <strong> means important, <em> means emphasis. Non-semantic tags like <b> and <i> only affect appearance without conveying meaning.", source: "Bootcamp_Note.pdf" },
  { question: "What is the difference between position relative and absolute?", answer: "relative stays in normal flow and offsets from its normal position. absolute is removed from flow and positioned relative to the nearest positioned parent.", source: "Bootcamp_Note.pdf" },
];

// Practice tasks from notes
export const practiceTasks: { title: string; description: string; hint: string; solution: string }[] = [
  {
    title: "BMI Calculator",
    description: "Write a program that calculates BMI (Body Mass Index) and tells if the person is underweight, normal, overweight, or obese.",
    hint: "BMI = weight / (height ** 2). Under 18.5 = underweight, 18.5-24.9 = normal, 25-29.9 = overweight, 30+ = obese.",
    solution: "const weight = 55;\nconst height = 1.7;\nconst bmi = weight / height ** 2;\n\nlet msg = bmi < 18.5 ? 'underweight' :\n  (bmi >= 18.5 && bmi <= 24.9) ? 'normal' :\n  (bmi >= 25 && bmi <= 29.9) ? 'overweight' : 'obese';\n\nconsole.log(`BMI: ${bmi.toFixed(1)}, You are ${msg}`);"
  },
  {
    title: "Vowel Checker",
    description: "Write a function that checks whether a string contains ALL vowels (a, e, i, o, u).",
    hint: "Use the 'search for failure' pattern: loop through vowels, if any is missing return false, otherwise return true at the end.",
    solution: "function checkVowel(str) {\n  const vowels = ['a', 'e', 'i', 'o', 'u'];\n  const lowerStr = str.toLowerCase();\n  for (let i = 0; i < vowels.length; i++) {\n    if (!lowerStr.includes(vowels[i])) {\n      return false; // fail immediately\n    }\n  }\n  return true;\n}"
  },
  {
    title: "String Reversal",
    description: "Reverse a string using split, reverse, and join methods.",
    hint: "split('') converts string to array of characters, reverse() reverses the array, join('') converts back to string.",
    solution: "let name = \"Ardi\";\nlet reversed = name.split('').reverse().join('');\nconsole.log(reversed); // \"idrA\""
  },
  {
    title: "Array Reversal Without .reverse()",
    description: "Reverse an array without using the built-in .reverse() method. Try two approaches: using unshift and using a decremental for loop.",
    hint: "Approach 1: Loop with for...of, use unshift() to add each item to the start. Approach 2: Loop from end to start, push each item.",
    solution: "// Approach 1: unshift\nlet arr = [1, 2, 3, 4];\nlet reversed = [];\nfor (let num of arr) {\n  reversed.unshift(num);\n}\n\n// Approach 2: decremental for loop\nlet reversed2 = [];\nfor (let i = arr.length - 1; i >= 0; i--) {\n  reversed2.push(arr[i]);\n}"
  },
  {
    title: "Count Zeros in Binary String",
    description: "Write a function that counts how many zeros are in a binary string.",
    hint: "Split the string into an array, convert to numbers with map(Number), then count zeros.",
    solution: "function count_zero(binaryStr) {\n  let count = 0;\n  let toArr = binaryStr.split(\"\").map(Number);\n  for (let i = 0; i < toArr.length; i++) {\n    if (toArr[i] === 0) count++;\n  }\n  return count;\n}\nconsole.log(count_zero(\"01000101110110\")); // 7"
  },
  {
    title: "Random Number Generator",
    description: "Write a function that generates a random number between a given min and max (inclusive).",
    hint: "Use the formula: Math.floor(Math.random() * (max - min + 1)) + min",
    solution: "function randomBetween(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log(randomBetween(5, 15));"
  },
  {
    title: "Age Calculator",
    description: "Write a program that calculates a person's age from their birth date.",
    hint: "Create a Date object from the birth date, get current date, subtract the years.",
    solution: "const birth = new Date(\"2005-03-22\");\nconst now = new Date();\nconst age = now.getFullYear() - birth.getFullYear();\nconsole.log(`Age: ${age}`);"
  },
  {
    title: "Search for Failure Pattern",
    description: "Understand this important logic pattern: When everything must be correct, search for what's wrong first.",
    hint: "If ALL must pass → return false inside loop, true at end. If ANY can pass → return true inside loop, false at end.",
    solution: "// All must pass pattern\nfunction allPositive(arr) {\n  for (let num of arr) {\n    if (num <= 0) return false; // fail immediately\n  }\n  return true; // all passed\n}\n\n// Any can pass pattern\nfunction hasPositive(arr) {\n  for (let num of arr) {\n    if (num > 0) return true; // found one!\n  }\n  return false; // none found\n}"
  }
];

// 7-day revision planner
export const revisionPlanner = [
  { day: 1, title: "HTML Fundamentals", topicIds: ["html-tags", "html-lists-structure", "html5-elements"] },
  { day: 2, title: "CSS Basics", topicIds: ["css-selectors", "css-box-model", "css-display-visibility"] },
  { day: 3, title: "CSS Layout", topicIds: ["css-flexbox", "css-grid", "css-positioning"] },
  { day: 4, title: "CSS Advanced", topicIds: ["css-responsive", "css-transform-animation", "css-overflow", "css-specificity"] },
  { day: 5, title: "JavaScript Basics", topicIds: ["js-variables", "js-operators", "js-strings", "js-conditionals"] },
  { day: 6, title: "JavaScript Intermediate", topicIds: ["js-arrays", "js-objects", "js-loops"] },
  { day: 7, title: "JS Advanced + Git + Review", topicIds: ["js-functions", "js-math-date", "js-strict-freeze", "git-basics", "git-collaboration"] },
];
