let grid;
const MAXVAL = 10;
const MAXWIDTH = 500;

let n = 8;
let width = MAXWIDTH/n;

function createGrid() {
    let temp = [];
    for (let i = 0; i < n; i++) {
        temp[i] = Array(n).fill('#e6a5a5');
    }
    return temp;
}

function drawGrid() {
    clear();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            fill(grid[i][j]);
            rect(j*width, i*width, width, width);
        }
    }
}

function updateGrid() {
    let rows = this.value().split('\n').join("");

    for (let k = 0; (k < rows.length) && (k < n*n); k++) {
        let i = int(k / n);
        let j = k % n;

        if (rows[k] == '1') { grid[i][j] = '#ffffff'; }
        else if (rows[k] == '0') { grid[i][j] = '#000000'; }
        else { grid[i][j] = '#e6a5a5'; }
    }
    
    drawGrid();
}

function updateSize() {
    let old = n;
    n = this.value();

    width = MAXWIDTH/n;
    
    let temp = createGrid();
    for (let i = 0; i < n; i++) {
        if (i >= old) { break; }

        for (let j = 0; j < n; j++) {
            if (j >= old) { break; }

            temp[i][j] = grid[i][j];
        }
    }

    grid = temp;

    drawGrid();
}

function saveImage() {
    saveCanvas('BW Images', 'png');
}

function setup() {

    let canvas = createCanvas(MAXWIDTH, MAXWIDTH);
    canvas.parent("canvas-container");

    let saveButton = createButton("Save Image");
    saveButton.parent("canvas-container");

    saveButton.style("width: 50%; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); border-radius: 12px; border: none;");
    saveButton.center("horizontal");
    saveButton.mousePressed(saveImage);
    
    background(200);

    grid = createGrid();
    drawGrid();

    let sliderLabel = createSpan("Image Size:");
    sliderLabel.parent("gui-container");
    sliderLabel.position(0, 0);
    
    let slider = createSlider(1, 50, 8);
    slider.parent("gui-container");
    slider.position(0, sliderLabel.height);
    // // console.log(sliderLabel.height - slider.height);
    slider.style("width", "250px");
    slider.input(updateSize);

    let inp = createElement("textarea");
    inp.parent("gui-container");
    inp.style("resize: none; width: 100%; height: 300px;");
    inp.position(0, 50);
    inp.input(updateGrid);
}