let grid;
let depth = 8;
let bits = "";
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

function gobble(bitstring) {
    let gobbled = [];
    for (let start = 0; start < bitstring.length; start += depth) {
        let sub = bitstring.substr(start, depth);

        if (sub.length == depth) {
            gobbled.push(parseInt(sub, 2))
        }
    }
    return gobbled;
}

function updateGrid(hex_colors) {
    // print(hex_colors)
    for (let k = 0; (k < hex_colors.length) && (k < n*n); k++) {
        let i = int(k / n);
        let j = k % n;
        grid[i][j] = hex_colors[k];
        // if (bits[k] == '1') { grid[i][j] = '#ffffff'; }
        // else if (bits[k] == '0') { grid[i][j] = '#000000'; }
        // else { grid[i][j] = '#e6a5a5'; }
    }
    // print(grid)
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

    let sizeLabel = createSpan(`Image Size: ${n}`);
    sizeLabel.parent("gui-container");
    sizeLabel.position(0, 0);
    
    let sizeSlider = createSlider(1, 50, 8);
    sizeSlider.parent("gui-container");
    sizeSlider.position(0, sizeLabel.height);
    // // console.log(sliderLabel.height - slider.height);
    sizeSlider.style("width", "250px");
    sizeSlider.input(() => {
        let old = n;
        n = sizeSlider.value();
        sizeLabel.html(`Image Size: ${n}`);
    
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
    });

    let bitLabel = createSpan(`Bits per pixel: ${depth}`);
    bitLabel.parent("gui-container");
    bitLabel.position(0, sizeSlider.y + sizeSlider.height);
    
    let bitSlider = createSlider(1, 24, depth);
    bitSlider.parent("gui-container");
    bitSlider.position(0, bitLabel.y + bitLabel.height);
    bitSlider.style("width", "250px");
    bitSlider.input(() => {

        depth = bitSlider.value();
        bitLabel.html(`Bits per pixel: ${depth}`)

        let int_colors = gobble(bits);
        int_colors = int_colors.map(x => map(x, 0, 2**depth - 1, 0, 2**24 - 1));
        // print(floor(Math.log2(depth)+1));

        let hex_colors = [];

        for (let i = 0; i < int_colors.length; i++) {
            let hex_color = parseInt(`${int_colors[i]}`, 10).toString(16).padStart(6, 0).slice(-6);
            hex_colors.push("#" + hex_color);
        }
        print(`hex colors: ${hex_colors}`)
        updateGrid(hex_colors);
    });

    let inp = createElement("textarea");
    inp.parent("gui-container");
    inp.style("resize: none; width: 100%; height: 300px;");
    inp.position(0, 100);
    inp.input(() => {
        bits = inp.value().split(/\s+/).join("");
        let int_colors = gobble(bits);
        // print(`int colors: ${int_colors}`)

        int_colors = int_colors.map(x => map(x, 0, 2**depth - 1, 0, 2**24 - 1));
        // print(floor(Math.log2(depth)+1));

        let hex_colors = [];

        for (let i = 0; i < int_colors.length; i++) {
            let hex_color = parseInt(`${int_colors[i]}`, 10).toString(16).padStart(6, 0).slice(-6);
            hex_colors.push("#" + hex_color);
        }
        // print(`hex colors: ${hex_colors}`)
        updateGrid(hex_colors);
    });
}