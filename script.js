const kittyProfiles = [
  {
    name: "Mochi",
    trait: "Window-watch specialist with an undefeated nap schedule.",
  },
  {
    name: "Juniper",
    trait: "Insists every sunbeam is reserved seating.",
  },
  {
    name: "Pixel",
    trait: "Tiny sprint champion, large-scale cardboard architect.",
  },
  {
    name: "Saffron",
    trait: "Greets visitors politely, then disappears for dramatic effect.",
  },
];

const nameNode = document.querySelector("#kitty-name");
const traitNode = document.querySelector("#kitty-trait");
const rotateButton = document.querySelector("#rotate-kitty");

let currentIndex = 0;

rotateButton?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % kittyProfiles.length;
  const profile = kittyProfiles[currentIndex];
  nameNode.textContent = profile.name;
  traitNode.textContent = profile.trait;
});
