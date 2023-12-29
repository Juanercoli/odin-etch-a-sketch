// Handling grid size slider
const gridSizeSlider = document.querySelector("#grid-size-slider");
const gridSizeValue = document.querySelector("#grid-size-value");
gridSizeValue.textContent = gridSizeSlider.value + "x" + gridSizeSlider.value;
createGrid(gridSizeSlider.value);
gridSizeSlider.addEventListener("input", (e) => {
  createGrid(gridSizeSlider.value);
  gridSizeValue.textContent = gridSizeSlider.value + "x" + gridSizeSlider.value;
});

/* Create grid container */
function createGrid(gridSize) {
  const container = document.querySelector("#grid-container");
  // Clean container
  container.innerHTML = "";
  // Get container size
  const gridContainerSize = parseInt(
    window.getComputedStyle(container).getPropertyValue("max-width")
  );

  // Create rows
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.className = "grid-row";
    // Create columns
    for (let i = 0; i < gridSize; i++) {
      let column = document.createElement("div");
      column.className = "grid-column";
      column.style["width"] = gridContainerSize / gridSize + "px";
      column.style["height"] = gridContainerSize / gridSize + "px";
      row.append(column);
    }
    container.append(row);
  }
}
