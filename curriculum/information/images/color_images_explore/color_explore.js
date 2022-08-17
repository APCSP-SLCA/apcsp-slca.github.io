let grid;
const MAXVAL = 50;
const MAXDEPTH = 24;
const MAXWIDTH = 500;

let n = 5;
let width = MAXWIDTH/n;
let depth = 1;
let bits = "";

let DEFAULT_COLOR;

let tasks = [];

let sizeSlider, sizeLabel, inp;

function gobble(bitstring) {
    let gobbled = [];
    for (let start = 0; start < bitstring.length; start += depth) {
        let sub = bitstring.substr(start, depth);
        sub = sub.replace(/[^0-1]+/g, '');

        if (sub.length == depth) {
            gobbled.push(parseInt(sub, 2))
        }
    }
    return gobbled;
}

function computeColors() {
    let int_colors = gobble(bits);
    int_colors = int_colors.map(x => map(x, 0, 2**depth - 1, 0, 2**24 - 1));
    // print(floor(Math.log2(depth)+1));

    let hex_colors = [];

    for (let i = 0; i < int_colors.length; i++) {
        let int_color = int_colors[i];
        // let hex_color = parseInt(`${int_colors[i]}`, 10).toString(16).padStart(6, 0).slice(-6);
        let hex_color = int_color.toString(16)
        // print(hex_color);
        hex_color = hex_color.padStart(6, 0).slice(-6);
        hex_colors.push("#" + hex_color);
    }

    return hex_colors;
}

function updateSlider() {
    let old = n;
    n = sizeSlider.value();
    sizeLabel.html(`Image Size: ${n}`);

    width = int(MAXWIDTH/n);
    
    let temp = createGrid();
    for (let i = 0; i < n; i++) {
        if (i >= old) { break; }

        for (let j = 0; j < n; j++) {
            if (j >= old) { break; }

            temp[i][j] = grid[i][j];
        }
    }

    grid = temp;

    hex_colors = computeColors();
    updateGrid(hex_colors);
}

function createGrid() {
    let temp = [];
    for (let i = 0; i < n; i++) {
        temp[i] = Array(n).fill(DEFAULT_COLOR);
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

function updateGrid(hex_colors) {
    // print(hex_colors)
    for (let k = 0; k < n*n; k++) {
        let i = int(k / n);
        let j = k % n;

        if (k < hex_colors.length) {
            grid[i][j] = hex_colors[k];
        }
        else { grid[i][j] = DEFAULT_COLOR; }
    }
    drawGrid();
}

function setup() {
    // define colors (supposed to be constants)
    DEFAULT_COLOR = color("#e6a5a5");
    DEFAULT_COLOR.setAlpha(128);

    // create DOM elements
    let canvas = createCanvas(MAXWIDTH, MAXWIDTH);
    canvas.parent("canvas-container");

    let saveButton = createButton("Save Image");
    saveButton.parent("canvas-container");

    sizeLabel = createSpan(`Image Size: ${n}`);
    sizeLabel.parent("gui-container");

    sizeSlider = createSlider(1, MAXVAL, n);
    sizeSlider.parent("gui-container");

    depthLabel = createSpan(`Bits per pixel: ${depth}`);
    depthLabel.parent("gui-container");

    depthSlider = createSlider(1, MAXDEPTH, depth);
    depthSlider.parent("gui-container");

    inp = createElement("textarea");
    inp.parent("gui-container");

    let dots = createDiv();
    dots.parent("gui-container");
    dots.style("text-align:center; position: inherit; top: 0px;");

    let colorpicker = createColorPicker('#ed225d');
    colorpicker.parent("gui-container");
    colorpicker.style("width: 100%; margin-top: 10px;");

    tasks.push((modal) => {
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 0";
        modal_content.elt.innerHTML = "Duplicate the 2-bit color image using your knowledge of binary!";
        modal_content.elt.innerHTML += "<img alt=\"2-bit Color\" src=\"tasks/replicate_0.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        drawGrid();
    });

    tasks.push((modal) => {
        sizeSlider.value(5);
        inp.value("");
        updateSlider();
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 1";
        modal_content.elt.innerHTML = "Duplicate the 24-bit color image using your knowledge of binary!";
        modal_content.elt.innerHTML += "<img alt=\"2-bit Color\" src=\"tasks/smiles.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        drawGrid();
    });

    tasks.push((modal) => {
        sizeSlider.value(20);
        inp.value("");
        updateSlider();
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 2";
        modal_content.elt.innerHTML = "Create a 24-bit 10x10 image!";
        drawGrid();
    });

    for (let i = 0; i < tasks.length; i++) {
        let _dot = createButton("");
        _dot.parent(dots);
        _dot.class("dot");
        _dot.attribute("data-bs-toggle", "modal");
        _dot.attribute("data-bs-target", "#myModal");
        _dot.attribute("data-bs-whatever", `${i}`);
    }

    // create grid
    grid = createGrid();
    drawGrid();
    
    // style for DOM elements
    canvas.style("background: 200;");

    saveButton.style("width: 50%; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); border-radius: 12px; border: none;");
    saveButton.center("horizontal");
    sizeSlider.position(max(sizeLabel.width, depthLabel.width) + 30, 0/*sliderLabel.height*/);
    sizeSlider.style("width", "250px");

    depthLabel.position(0, sizeLabel.height);
    depthSlider.position(max(sizeLabel.width, depthLabel.width) + 30, sizeSlider.height);
    depthSlider.style("width", "250px");
    inp.style("resize: none; width: 100%; height: 300px; margin-top: 45px;");

    // events for DOM elements
    saveButton.mousePressed(() => {
        saveCanvas('color_image', 'png');
    });
    
    sizeSlider.input(() => updateSlider());

    depthSlider.input(() => {

        depth = depthSlider.value();
        depthLabel.html(`Bits per pixel: ${depth}`)

        hex_colors = computeColors();
        updateGrid(hex_colors);
    });

    inp.input(() => {
        bits = inp.value().split('\n').join("").replace(/\s/g,"");

        hex_colors = computeColors();
        updateGrid(hex_colors);
    });

    let modal = select(".modal");
    modal.elt.addEventListener("show.bs.modal", (event) => {
        const button = event.relatedTarget;
        const func_id = parseInt(button.getAttribute("data-bs-whatever"));

        if (!isNaN(func_id) && func_id < tasks.length ) {
            let task = tasks[func_id];
            task(modal);
        }
    });
}