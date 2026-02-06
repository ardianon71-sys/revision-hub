import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cheats = [
  {
    title: "📄 HTML Cheatsheet",
    items: [
      "Block: <div>, <h1>-<h6>, <p>, <ul>, <ol>, <li>, <section>, <article>",
      "Inline: <span>, <a>, <strong>, <em>, <img>, <br>",
      "Semantic: <header>, <nav>, <main>, <footer>, <aside>, <figure>",
      "Lists: <ol> (ordered), <ul> (unordered), <dl> (description)",
      "Media: <audio>, <video>, <canvas>, <embed>",
      "Forms: <input>, <select>, <textarea>, <button>, <datalist>",
      "Input types: text, password, email, date, range, checkbox, radio",
      "<a href='url'>Link</a> | <img src='url' alt='desc'>",
    ],
  },
  {
    title: "🎨 CSS Cheatsheet",
    items: [
      "Selectors: * | tag | .class | #id | [attr] | :pseudo | ::pseudo",
      "Specificity: !important > #id > .class > tag > *",
      "Box Model: content → padding → border → margin",
      "Units: px (fixed) | rem (root) | em (parent) | % | vh/vw | fr (grid)",
      "Flex: display:flex | justify-content | align-items | flex-direction | gap",
      "Grid: display:grid | grid-template-columns | gap | place-items",
      "Position: static | relative | absolute | fixed | sticky",
      "Responsive: @media (min-width:X) {} | max-width:100% for images",
      "Transition: transition: prop duration timing",
      "Animation: @keyframes name { from{} to{} } | animation: name duration",
      "Text overflow: white-space:nowrap + overflow:hidden + text-overflow:ellipsis",
      "16px = 1rem",
    ],
  },
  {
    title: "⚡ JavaScript Cheatsheet",
    items: [
      "Variables: var (function) | let (block) | const (no reassign)",
      "Types: undefined, null, string, number, boolean, symbol, object",
      "Operators: + - * / % ** | ++ -- | += -= *= /=",
      "String: .length | [0] | .toLowerCase() | .trim() | .split() | .replace()",
      "Array: .push() .pop() | .shift() .unshift() | .includes() .indexOf()",
      "Array: .slice() (safe) vs .splice() (mutates) | .join() | .concat()",
      "Object: dot.notation | bracket['notation'] | for...in | Object.keys()",
      "Comparison: == (value) vs === (strict) | != vs !==",
      "Logic: && (AND) | || (OR) | ! (NOT) | !! (force boolean)",
      "Ternary: condition ? yes : no",
      "Switch: case + break (important!) | default",
      "Loops: for | for...of | while | do...while",
      "Functions: function name(params) {} | const fn = () => {}",
      "Arrow: no own 'this' | single expr = no return needed",
      "Math: Math.round/floor/ceil/abs/random",
      "Random: Math.floor(Math.random() * (max-min+1)) + min",
      "Date: new Date() | .getFullYear() | months 0-based!",
      "Object.freeze() = shallow freeze | structuredClone() = deep copy",
    ],
  },
  {
    title: "🔧 Git Cheatsheet",
    items: [
      "git init → start repo",
      "git status → see changes",
      "git add . → stage all",
      "git commit -m 'msg' → save checkpoint",
      "git log → see history",
      "git branch → list/create branches",
      "git checkout name → switch branch",
      "git merge name → merge into current",
      "git push → upload to GitHub",
      "git pull → download + merge (fetch + merge)",
      "git fetch → download only (safe check)",
      "git clone URL → copy repo from GitHub",
      "git push --set-upstream origin branch → push new branch",
    ],
  },
];

const CheatsheetsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">📋 Cheatsheets</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Compact reference cards — everything at a glance
        </p>
      </div>

      <div className="grid gap-4">
        {cheats.map((sheet) => (
          <Card key={sheet.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{sheet.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {sheet.items.map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CheatsheetsPage;
