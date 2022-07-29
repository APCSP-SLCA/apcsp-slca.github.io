# Hexadecimal

Like the binary system, the hexadecimal number system is freqently used in computer science, particularly to describe characters and colors.

## Representing Decimal Numbers in Hexadecimal

First of all, what is a hexadecimal number? "hexa-" means "6" in Greek, and "decimal" means "ten" in Latin, so hexadecimal mean "16". In our context, we mean a number system with a base of 16.

Recall that the decimal system uses 10 symbols (0-9) and the binary system uses 2 symbols (0 and 1). The hexadecimal system uses *16* symbols. We start off with our familiar digits:

| **Hexadecimal Symbol** | **Decimal Value** |
|------------------------|-------------------|
| 0                      | 0                 |
| 1                      | 1                 |
| 2                      | 2                 |
| 3                      | 3                 |
| 4                      | 4                 |
| 5                      | 5                 |
| 6                      | 6                 |
| 7                      | 7                 |
| 8                      | 8                 |
| 9                      | 9                 |

We've used 10 symbols so far... but we still have 6 symbols left! How can we symbolize `10`, `11`, ..., `15`?

The convention is to switch over to the alphabet. So...

| **Hexadecimal Symbol** | **Decimal Value** |
|------------------------|-------------------|
| A                      | 10                |
| B                      | 11                |
| C                      | 12                |
| D                      | 13                |
| E                      | 14                |
| F                      | 15                |

*Note*: to avoid confusion, if I am refering to a hexadecimal number I will write `0x11` or say "the hexadecimal number eleven". If I refer to a decimal number, I will write `11` and say "eleven".

Let's look at some examples:

* `0xA` in hexadecimal means $$ 10*16^0 = 10*1 = 10 $$ in the decimal system!
* `0x10` in hexadecimal means $$ 1*16^1 + 0*16^0 = 1*16 + 0*1 = 16 + 0 = 16 $$ in the decimal system!
* `0xFF` in hexadecimal means $$ 15*16^1 + 15*16^0 = 15*16 + 15*1 = 240 + 15 = 255 $$ in the decimal system!

Let's look at the relationship between hexadecimal and binary.

We just saw that `0xFF` is `255` in decimal. Previously, we learned that `0b11111111` was the binary representation of `255`. What's happening here?

It just so happens that $$ 16 = 2^4 $$, so *four symbols in binary represents one symbol in hexadecimal*. So once you are comfortable with binary, it's easy to convert to hexadecimal by grouping by four!
