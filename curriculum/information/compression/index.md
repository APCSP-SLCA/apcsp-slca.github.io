# Files Too Big?

We have a 1200x1200 pixel image, using 24-bit bit color. The minimum number of bits required to store this image is $$1200 \cdot 1200 \cdot 24 = 34,560,000 \text{ bits}$$! Equivalently, the image is of size 4,320,000 bytes -- or 4,320 KiloBytes (KB) or 4.32 MegaBytes (MB).

However, my computer says that it only takes up 54,630 bytes -- significantly smaller than expected. It turns out that different file formats can *compress* data into smaller sizes to save bits. Compression lets us store more photos, type longer and longer essays, or deal with larger numbers without running out of memory.

## Types of Compression

**Lossy compression** throws out unnecessary bits in order to squeeze our data into a smaller space. Think of a suitcase -- you may want to remove your XBox in order to be able to close your suitcase! Necessarily, lossy compression *loses* information. It is impossible to recover the original data.

You might have received images via email that look blurry or distorted. This is due to lossy compression.

![compressed width:200px;](compression_sequence.jpg)

Lossy compression is beneficial when transmitting data. Emailing a compressed image is a lot faster than emailing a non-compressed image.

**Lossless compression**, on the other hand, doesn't lose information. Typically, data is restructured or represented in a different way that allows for a smaller file size. A computer would be able to "undo" a lossless compression and get the original data.

## Run Length Encoding

Run length encoding is a lossless compression technique where we store the number of repetitions of `1`s and `0`s. We always start by asking ourselves "How many ones are repeating?" Then we alternate back and forth between `0` and `1`.

For example, suppose our data is the binary number `0b110001111111`. Starting from the left, we have 2 `1`s, 3 `0`s, and 7 `1`s. So instead of saving `0b110001111111`, we store `2 3 7`. Of course, machines only understand binary, so we convert `2`, `3`, and `7` to binary and smush their bits together:

<div style="margin: auto; width: 50%; text-align: center"><span markdown="1">`2 3 7`</span> &rarr; <span markdown="1">`0b010 011 111`</span></div><br>

I've inserted spaces in the binary sequence to illustrate the conversion. Originally, we started off with 12 bits, but after compression, our data is now only 9 bits! And because this is lossless, we can reconstruct the original bit sequence at any time.

Notice how I've dedicated 3 bits each to represent `2`, `3`, and `7`. This number of bits assigned is determined by the format of the compressed file, or by the programmer of the compression tool or algorithm you are using. In this case, I'm using a compression algorithm that uses 3 bits.

***What if instead our original data is `0b110001111111`?***

Using run length encoding, the compressed data is `2 3 8` in decimal. Using the same 3-bit algorithm as before, I can still represent `2` as `0b010` and `3` as `0b011`, but `8` cannot be represented in just 3 bits!

One way of solving this problem is by inserting 0 `0`s into the sequence of 8 `1`s. Let's walk through this from the beginning. We see 2 `1`s, 3 `0`s, *7* `1`s, *0* `0`s, and 1 `1`. Therefore, the compressed data in decimal is `2 3 7 0 1`, or `0b010011111000001`. Notice how because we added those "fake" `0`s, our compression didn't really compress -- in fact we have more bits than what we started with. Compression works well when we have a large number of bits, and doesn't work so well with smaller data. In particular, run length encoding works best if there are long sequences of `1`s or `0`s with few alternations.

<div style="position: relative; display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 0px;">
    <div><img src="brick.avif"></div>
    <div style="font-size: 108px; padding-left: 35%; display: flex; align-items: center;">&rarr;</div>
    <div><img src="brick_compressed.avif"></div>
</div>

## Quantifying Compression

There are many ways to measure the effectiveness of our compressions. For this class,

$$\text{compression rate} = 1 - \cfrac{\text{compressed data size}}{\text{original data size}}$$

This formula is also called *space savings* because it tells you how much space you saved. Therefore, you want compression rate to be a large percentage.

For example:

| original size | compressed size | compression rate|
|---------------|-----------------|-----------------|
| 12KB          | 4KB             | $$1 -\cfrac{4}{12} \approx 67\%$$

| original bin     | compressed dec | compressed bin  | compression rate           |
|------------------|----------------|-----------------|----------------------------|
| `0b000001111111` | `0 5 7`        | `0b000101111`   | $$1 -\frac{9}{12} = 25\%$$ |

## Extra Resources

* <a href="https://docs.google.com/viewer?url=https://github.com/APCSP-SLCA/slides/raw/main/compression/slides.pdf" target="_blank">Slides</a>
