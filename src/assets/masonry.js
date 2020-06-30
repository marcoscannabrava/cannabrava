const grid = document.querySelector(".grid");
const rowSize = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"), 10);
const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("grid-gap"), 10);
const gridItems = [];

const positionGridItems = () => {
  gridItems.forEach(({ item, content }) => {
    content.classList.remove("cover");
    const rowSpan = Math.ceil(
      (content.offsetHeight + rowGap) / (rowSize + rowGap)
    );
    item.style.setProperty("--row-span", rowSpan);
    content.classList.add("cover");
  });
};

window.addEventListener("load", positionGridItems);
window.addEventListener("resize", _.debounce(positionGridItems, 100));