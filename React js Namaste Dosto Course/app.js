const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React Js"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "chaild" }, [
    React.createElement("h1", { id: "heading2" }, "I am Heading tag"),
    React.createElement("h2", { id: "h2" }, "I am Heading 2 tag"),
  ])
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
