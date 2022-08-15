---
marp: true
theme: uncover
author: Joshua Bas
math: katex
---

# **Information Layer**

AP CSP @ SouthLake Christian Academy

---

## **Black & White Images**

*Remember*, `1` means "on", while `0` means "off"

---

`1` means "white"
`0` means "black"

<div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: white; border: 2px solid black;"></div>
<div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: black; border: 2px solid black;"></div>

The white and black squares above are both **pixels** (picture elements)

---

If height and width are both 2 pixels, `0b0110` is

<div style="position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0px;">
    <div style="width: 150px; height: 150px; background: black; border: 2px solid black; margin-left:auto;"></div>
    <div style="width: 150px; height: 150px; background: white; border: 2px solid black;"></div>
    <div style="width: 150px; height: 150px; background: white; border: 2px solid black; margin-left:auto;"></div>
    <div style="width: 150px; height: 150px; background: black; border: 2px solid black;"></div>
</div>

---

## Black and White Images Activity

<https://apcsp-slca.github.io/curriculum/information/images/bw_images_explore/>

---

## **Color**

* can be represented by its red, green, and blue parts
    * RGB format
    * RGBA includes alpha value, or transparency
* can be represented by hue, saturation, and brightness value
    * HSV format

---

## **RGB**

<div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #FF0000; border: 2px solid black; text-align: center; line-height: 150px; color: white;">0-255</div>
<div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #00FF00; border: 2px solid black; text-align: center; line-height: 150px; color: white;">0-255</div>
<div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #0000FF; border: 2px solid black; text-align: center; line-height: 150px; color: white;">0-255</div>

---
<div style="position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0px;">
<div>
    <div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #FF0000; border: 2px solid black; text-align: center; line-height: 150px; color: white;">200</div>
    <div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #00FF00; border: 2px solid black; text-align: center; line-height: 150px; color: white;">30</div>
    <div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #0000FF; border: 2px solid black; text-align: center; line-height: 150px; color: white;">101</div>
</div>

<div>
    <div style="width: 150px; height: 150px;"></div>
    <div style="width: 150px; height: 150px; margin-right: auto; margin-left: auto; background: #c81e65; border: 2px solid black; font-size: 15px; text-align: center; line-height: 150px; color: white;">(200, 30, 101)</div>
</div>

</div>

---

## **Color Images**

If height and width are both 2 pixels,

<div style="position: relative; display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0px;">

<div style="width: 150px; height: 150px; margin-left: auto; background: #ACF39D; border: 2px solid black; text-align: center; font-size: 15px; line-height: 150px; color: black;">(172, 243, 157)</div>
<div style="width: 150px; height: 150px; margin-right: auto; background: #9cfffa; border: 2px solid black; text-align: center; font-size: 14px; line-height: 150px; color: black;">(156, 255, 250)</div>
<div style="width: 150px; height: 150px; margin-left: auto; background: #773344; border: 2px solid black; text-align: center; font-size: 15px; line-height: 150px; color: black;">(119, 51, 63)</div>

<div style="width: 150px; height: 150px; margin-right: auto; background: #E3B5A4; border: 2px solid black; text-align: center; font-size: 15px; line-height: 150px; color: black;">(227, 181, 164)</div>

</div>

---

## **Key Take Away**

Data can be interpreted ***by humans*** as numbers or as black and white images, colors, or color images.
