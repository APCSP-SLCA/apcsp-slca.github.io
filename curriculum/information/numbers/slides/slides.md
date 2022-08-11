---
marp: true
theme: uncover
author: Joshua Bas
math: katex
---

# Binary Numbers

Learning to count!

---

<style scoped>
    p {
        font-size: 300px;
        font-weight: bold;
        font-family: monospace;
    }
</style>

## **What is...**

1

---

## **Decimal System**

* has 10 digits/symbols (0-9)
* has a *base* of 10

What does each digit in `123` represent?

---

We could rewrite `123` as
$$ 1*10^2 + 2*10^1 + 3*10^0 $$

---

## **Binary System**

* has 2 digits/symbols (`0` and `1`)
    * "off" and "on"
    * called **bits** (*binary digit*)
    * a **byte** is 8 bits
* has a *base* of 2

---

## **Binary to Decimal Conversion Example**

Convert `111` (binary) to a decimal number

---

Convert `111` (binary) to a decimal number:

$$ 1*2^2 + 1*2^1 + 1*2^0 = $$

$$ 1*4 + 1*2 + 1*1 = $$
$$ 4 + 2 + 1 = $$
$$ 7 $$

---

## **Binary Flipper Tool**

Make one 😀

---

## **Try it out!**

* `0b1100`
* `0b1011`
* `0b10010`
* `0b10101`

---

---

## **Decimal to Binary Conversion Example**

Convert `255` to binary

Hint: **Be greedy! 😈**

---

```math

2^8    2^7    2^6    2^5    2^4    2^3    2^2    2^1    2^0


 ?      ?      ?      ?      ?      ?      ?      ?      ?

```

---

```math

2^8   2^7    2^6    2^5    2^4    2^3    2^2    2^1    2^0






```

---

## **Try it out!**

* 9
* 17
* 109
* 200

---

## **Binary Addition**

```text
  1             1
  09            01
+ 03          + 01
------        ------
  12            10
```

---

## **Binary Subtraction**

is really addition of the negative!

$$ 2 - 3 = 2 + (-3) $$

*How might we represent negative numbers?*

---

---

## **Binary Widths**

*What happens if our computer only has the hardware to deal with 2-bit numbers?*

---

## **Overflow/Underflow Errors**

* **overflow**: occurs when the number is *too big* to be represented (wraps to smallest number)
* **underflow**: occurs when the number is *too small* to be represented (wraps to the largest number)

*What will happen if we add `1` and `255` on an 8-bit machine?*
*How about `1` and `256`?*

---

```text

  0b11111111
+ 0b00000001
--------------
 0b100000000

```

We started off with 2 8-bit numbers, and our result is `256`, a 9-bit number!

Since the computer cannot manage 9-bit numbers, the extra bit gets chopped off.

So `255 + 1 = 0`!

---

## **Rounding Errors**

* machines do not have the hardware to represent an infinite number of digits
    * some fractions (e.g. $\pi$, $e$, $\cfrac{1}{3}$) cannot be represented accurately
    * must approximate (round)

---

## **Why Learn Binary?**
