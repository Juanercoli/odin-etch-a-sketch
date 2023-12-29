createGridSizeSlider();
eraserBtn();
clearBtn();

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
      addPixelListeners(column);
      column.className = "grid-column";
      column.style["width"] = gridContainerSize / gridSize + "px";
      column.style["height"] = gridContainerSize / gridSize + "px";
      row.append(column);
    }
    container.append(row);
  }
}

/* Grid size slider */
function createGridSizeSlider() {
  const gridSizeSlider = document.querySelector("#grid-size-slider");
  const gridSizeValue = document.querySelector("#grid-size-value");
  gridSizeValue.textContent = gridSizeSlider.value + "x" + gridSizeSlider.value;
  createGrid(gridSizeSlider.value);
  gridSizeSlider.addEventListener("input", () => {
    createGrid(gridSizeSlider.value);
    gridSizeValue.textContent =
      gridSizeSlider.value + "x" + gridSizeSlider.value;
  });
}

/* Paint events */
let isDrawing = false;
let color = document.querySelector("#color");
function addPixelListeners(pixel) {
  pixel.addEventListener("mouseenter", () => {
    pixel.style["border"] = "1px solid blue";
  });
  pixel.addEventListener("mousedown", () => {
    isDrawing = true;
    pixel.style["background-color"] = color.value;
  });
  pixel.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  pixel.addEventListener("mousemove", () => {
    if (isDrawing) pixel.style["background-color"] = color.value;
  });
  pixel.addEventListener("mouseout", () => {
    pixel.style["border"] = "1px solid black";
  });
}

function eraserBtn() {
  document.querySelector("#eraser").addEventListener("click", () => {
    color.value = "#ffffff";
  });
}

function clearBtn() {
  document.querySelector("#clear").addEventListener("click", () => {
    createGrid(document.querySelector("#grid-size-slider").value);
  });
}
