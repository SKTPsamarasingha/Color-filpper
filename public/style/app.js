const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "gray",
  "brown",
  "pink",
];

const btn = $(".btn");
const body = $("body");
const color = $(".color");

btn.on("click", () => {
  const random = Math.floor(Math.random() * colors.length);
  const clr = colors[random];
  body.css("background-color", clr);
  color.text(clr);
});
