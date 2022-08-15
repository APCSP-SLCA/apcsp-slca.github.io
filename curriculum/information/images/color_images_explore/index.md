---
p5js: true
---


# Explore Color Images

<style>
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        border: none;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active, .dot:hover {
        background-color: #717171;
    }
</style>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title fs-1" id="myModalLabel">Task X</span>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>



<div id="p5js-container" style="position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px;">
    <div id="canvas-container" style="position: inherit;"></div>
    <div id="gui-container" style="position: inherit;"></div>
</div>

<script src="color_explore.js"></script>
