# Problem Set 2: Caesar Cipher

Implement a program that encrypts messages using Caesar's cipher.

## Background

Supposedly, Caesar (yes, that Caesar) used to "encrypt" (i.e., conceal in a reversible way) confidential messages by shifting each letter therein by some number of places. For instance, he might write A as B, B as C, C as D, …, and, wrapping around alphabetically, Z as A. And so, to say HELLO to someone, Caesar might write IFMMP. Upon receiving such messages from Caesar, recipients would have to "decrypt" them by shifting letters in the opposite direction by the same number of places.

The secrecy of this "cryptosystem" relied on only Caesar and the recipients knowing a secret, the number of places by which Caesar had shifted his letters (e.g., 1). Not particularly secure by modern standards, but, hey, if you're perhaps the first in the world to do it, pretty secure!

Unencrypted text is generally called *plaintext*. Encrypted text is generally called *ciphertext*. And the secret used is called a *key*.

To be clear, then, here’s how encrypting `HELLO` with a key of 1 yields `IFMMP`:

| **plaintext** | **H** | **E** | **L** | **L** | **O** |
|---------------|-------|-------|-------|-------|-------|
| + key         | 1     | 1     | 1     | 1     | 1     |
| = ciphertext  | I     | F     | M     | M     | P     |

More formally, Caesar's algorithm (i.e., cipher) encrypts messages by "rotating" each letter by $$k$$ positions. More formally, if $$p$$ is some plaintext (i.e., an unencrypted message), $$p_i$$ is the $$i^{th}$$ character in $$p$$, and $$k$$ is a secret key (i.e., a non-negative integer), then each letter, $$c_i$$, in the ciphertext, $$c$$, is computed as

$$c_i = (p_i + k) \text{ mod } 26$$

where `mod 26` here means "remainder when dividing by 26." (Remember, we can programmatically write the modulo symbol as `%`!) This formula perhaps makes the cipher seem more complicated than it is, but it’s really just a concise way of expressing the algorithm precisely. Indeed, for the sake of discussion, think of A (or a) as 0, B (or b) as 1, …, H (or h) as 7, I (or i) as 8, …, and Z (or z) as 25. Suppose that Caesar just wants to say Hi to someone confidentially using, this time, a key, $$k$$, of 3. And so his plaintext, $$p$$, is Hi, in which case his plaintext’s first character, $$p_0$$, is H (aka 7), and his plaintext’s second character, $$p_1$$, is i (aka 8). His ciphertext’s first character, $$c_0$$, is thus K, and his ciphertext’s second character, $$c_1$$, is thus L. Can you see why?

Let's write a program called `caesar` that enables you to encrypt messages using Caesar's cipher. At the time the user executes the program, they should decide on what the key should be in the secret message they'll provide at runtime. You may assume that the key will be a positive integer.

```
key: 13
plaintext: hello, world
ciphertext: uryyb, jbeyq
```

Notice that neither the comma nor the space were "shifted" by the cipher. Only rotate alphabetical characters!

```
key: 13
plaintext:  be sure to drink your Ovaltine
ciphertext: or fher gb qevax lbhe Binygvar
```

Notice that the case of the original message has been preserved. Lowercase letters remain lowercase, and uppercase letters remain uppercase.

## Implementation Guide

Design and implement a program, caesar, that encrypts messages using Caesar's cipher.

* Your program must asks the user for the key, a non-negative integer. Let's call it $$k$$ for the sake of discussion.
* If the user inputs a key that is not a positive integer, your program should print an error message of your choice and return from main a value of 1 (which tends to signify an error) immediately.
* Do not assume that $$k$$ will be less than or equal to 26. Your program should work for all non-negative integers of $$k$$ less than $$2^{31} - 26$$. In other words, even if $$k$$ is greater than 26, alphabetical characters in your program's input should remain alphabetical characters in your program's output. For instance, if $$k$$ is 27, `A` should not become `[` even though `[` is 27 positions away from `A` in [ASCII](http://www.asciichart.com/[asciichart.com]); `A` should become `B`, since `B` is 27 positions away from `A`, provided you wrap around from `Z` to `A`.
* Your program must output `plaintext: ` (without a newline) and then prompt the user for a string of plaintext.
* Your program must output `ciphertext: ` (without a newline) followed by the plaintext's corresponding ciphertext, with each alphabetical character in the plaintext "rotated" by $$k$$ positions; non-alphabetical characters should be outputted unchanged.
* Your program must preserve case: capitalized letters, though rotated, must remain capitalized letters; lowercase letters, though rotated, must remain lowercase letters.
* After outputting ciphertext, you should print a newline. Your program should then exit by returning `0` from `main`.

### Pseudocode

First, write some pseudocode that implements this program, even if not (yet!) sure how to write it in code. There's no one right way to write pseudocode, but short English sentences suffice. Odds are your pseudocode will use (or imply using!) one or more functions, conditions, Boolean expressions, loops, and/or variables.



