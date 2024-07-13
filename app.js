// const heading = [
//     React.createElement("h1", { id: "heading" }, "Welcome React..!"),
//     React.createElement("marquee", { id: "heading" }, "Welcome React..!")

// ]


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       style: {
//         background:"red",
//       },
//       className:"title"
//     },
//     "heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title",
//     },
//     "heading1"
//   );
  
//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
//   );
  
//   // create root using createRoot
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   // passing react element inside root
//   root.render(container);
  
const heading = React.createElement("h1", {
    id: "title",
    style: {
        color : "red"
    },
    className : "title"
},
    "Hello heading number 1");

const heading2 = React.createElement("h2", {
    id: "title2"
},
    "Hello from heading 2");


const container = React.createElement("div", {id : "container"}, [
    heading,
    heading2
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)

