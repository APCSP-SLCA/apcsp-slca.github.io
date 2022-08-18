let grid;
const MAXVAL = 10;
const MAXWIDTH = 500;

let n = 8;
let width = MAXWIDTH/n;
let duck;
let isDuckVisible = false;

let DEFAULT_COLOR;
let WHITE_COLOR;
let BLACK_COLOR;

let tasks = [];

let slider, sliderLabel, inp;

function updateSlider() {
    let old = n;
    n = slider.value();
    sliderLabel.html(`Image Size: ${n}`);

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

    updateGrid(inp.value());
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
    if (isDuckVisible) {
        tint(255, 128);
        image(duck, 0, 0);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            fill(grid[i][j]);
            rect(j*width, i*width, width, width);
        }
    }
}

function updateGrid(value) {
    let rows = value.split('\n').join("").replace(/\s/g,"");

    for (let k = 0; k < n*n; k++) {
        let i = int(k / n);
        let j = k % n;


        if (k < rows.length) {
            if (rows[k] == '1') { grid[i][j] = WHITE_COLOR; }
            else if (rows[k] == '0') { grid[i][j] = BLACK_COLOR; }
            else { grid[i][j] = DEFAULT_COLOR; }
        }
        else { grid[i][j] = DEFAULT_COLOR; }
    }
    
    drawGrid();
}

function preload() {
    duck = loadImage("../../../../assets/images/duck.png");
}

function setup() {
    // define colors (supposed to be constants)
    DEFAULT_COLOR = color("#e6a5a5");
    DEFAULT_COLOR.setAlpha(128);
    WHITE_COLOR = color("#ffffff");
    BLACK_COLOR = color("#000000");

    // create DOM elements
    let canvas = createCanvas(MAXWIDTH, MAXWIDTH);
    canvas.parent("canvas-container");

    let saveButton = createButton("Save Image");
    saveButton.parent("canvas-container");

    sliderLabel = createSpan(`Image Size: ${n}`);
    sliderLabel.parent("gui-container");

    slider = createSlider(1, 50, n);
    slider.parent("gui-container");

    inp = createElement("textarea");
    inp.parent("gui-container");

    let dots = createDiv();
    dots.parent("gui-container");
    dots.style("text-align:center; position: inherit; top: 0px;");

    tasks.push((modal) => {
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 0";
        modal_content.elt.innerHTML = "Duplicate the \"C\" using your knowledge of binary!";
        modal_content.elt.innerHTML += "<img alt=\"Pixel C\" src=\"tasks/pixel_C.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        isDuckVisible = false;
        drawGrid();
    });

    tasks.push((modal) => {
        slider.value(11);
        inp.value("1 0 0 0 0 0 0 0 0 0 1\n\
0 0 0 0 0 0 0 0 0 0 0\n\
0 0 0 0 1 1 1 0 0 0 0\n\
0 0 0 1 0 0 0 1 0 0 0\n\
0 0 0 1 0 1 0 0 1 0 0\n\
0 0 0 0 1 1 1 1 1 0 0\n\
0 0 0 0 1 0 0 0 1 0 0\n\
0 0 0 0 1 0 0 0 1 0 0\n\
0 0 0 0 0 0 0 0 0 0 0\n\
0 0 0 0 0 0 0 0 0 0 0\n\
0 1 0 0 0 0 0 0 0 0 0\n\
1");
        updateSlider();
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 1";
        modal_content.elt.innerHTML = "Oh no! You receive a corrupted image; an extra bit has been inserted. Find and remove the bit to fix the image of the \"A\"";
        modal_content.elt.innerHTML += "<img alt=\"Duck\" src=\"tasks/broken_a.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        isDuckVisible = false;
        drawGrid();
    });

    tasks.push((modal) => {
        slider.value(5);
        inp.value("");
        updateSlider();
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 2";
        modal_content.elt.innerHTML = "Create a digital 5x5 image of the duck; you must decide whether each pixel is black or white!";
        modal_content.elt.innerHTML += "<img alt=\"Duck\" src=\"tasks/duck.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        isDuckVisible = true;
        drawGrid();
    });

    tasks.push((modal) => {
        slider.value(20);
        inp.value("");
        updateSlider();
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 3";
        modal_content.elt.innerHTML = "Create a digital 20x20 image of the duck; you must decide whether each pixel is black or white!";
        modal_content.elt.innerHTML += "<img alt=\"Duck\" src=\"tasks/duck.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        isDuckVisible = true;
        drawGrid();
    });

    tasks.push((modal) => {
        slider.value(25);
        inp.value("");
        updateSlider();
        let modal_title = select(".modal-title", modal);
        let modal_content = select(".modal-body", modal);

        modal_title.elt.innerHTML = "Task 4";
        modal_content.elt.innerHTML = "Replicate your favorite logo in black and white!";
        // modal_content.elt.innerHTML += "<img alt=\"Duck\" src=\"tasks/duck.png\" class=\"rounded mx-auto d-block\" style=\"width: 350px; height: 350px;\">";
        isDuckVisible = false;
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
    slider.position(sliderLabel.width + 20, 0/*sliderLabel.height*/);
    slider.style("width", "250px");
    inp.style("resize: none; width: 100%; height: 300px;");

    // events for DOM elements
    saveButton.mousePressed(() => {
        saveCanvas('bw_image', 'png');
    });
    
    slider.input(() => updateSlider());

    inp.input(() => {
        updateGrid(inp.value());
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