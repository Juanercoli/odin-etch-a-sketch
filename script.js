let container = document.querySelector("#grid-container");
createGrid(16);

/* Create grid container */
function createGrid(gridSize) {
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
