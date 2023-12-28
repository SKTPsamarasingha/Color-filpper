const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = $(".btn");
const body = $("body");
const color = $(".color");

btn.on("click", () => {
  const hexColor = getColor();
  body.css("background-color", hexColor);
  color.text(hexColor);
});

function getColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
  }
  return hexColor;
}
