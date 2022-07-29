# Lab 1: Llama Population

Determine how long it takes for a population to reach a particular size.

## Background

Say we have a population of `n` llamas. Each year, `n / 3` new llamas are born, and `n / 4` llamas pass away.

For example, if we were to start with `n = 1200` llamas, then in the first year, `1200 / 3 = 400` new llamas would be born and `1200 / 4 = 300` llamas would pass away. At the end of that year, we would have `1200 + 400 - 300 = 1300` llamas.

To try another example, if we were to start with `n = 1000 llamas`, at the end of the year, we would have `1000 / 3 = 333.33` new llamas. We can’t have a decimal portion of a llama, though, so we’ll cut off the decimal to get `333` new llamas born. `1000 / 4 = 250` llamas will pass away, so we’ll end up with a total of `1000 + 333 - 250 = 1083` llamas at the end of the year.

## Getting Started

* Download by cliking `this is a link` and unzip the `Llamas` lab.

## Implementation Guide

Complete the implementation of `population.py` such that it calculates the number of years required for the population to grow from the start size to the end size.

* Your program should first prompt the user for a starting population size.
  * If the user enters a number less than 9 (the minimum allowed population size), the user should be re-prompted to enter a starting population size until they enter a number that is greater than or equal to 9. (If we start with fewer than 9 llamas, the population of llamas will quickly become stagnant!)
* Your program should then prompt the user for an ending population size.
  * If the user enters a number less than the starting population size, the user should be re-prompted to enter an ending population size until they enter a number that is greater than or equal to the starting population size. (After all, we want the population of llamas to grow!)
* Your program should then calculate the (integer) number of years required for the population to reach at least the size of the end value.
* Finally, your program should print the number of years required for the llama population to reach that end size, as by printing to the terminal `Years: n`, where `n` is the number of years.

## Hints

* If you want to repeatedly re-prompt the user for the value of a variable until some condition is met, you might want to use a `while` loop. For example, review this code block, which prompts the user repeatedly until they enter a positive integer.

  ```python
  n = 0
  while (n < 1):
    n = int(input("Positive integer: "))
  ```

  How might you adapt this code to ensure a start size of at least 9, and an end size of at least the start size?
  
  * To calculate how many years it will take for the population to reach the end size, another loop might be helpful! Inside the loop, you’ll likely want to update the population size according to the formula in the **Background**, and update the number of years that have passed.
  
    * _If you're adventurous_, how might you solve this problem without using a loop? Maybe it will help to do this problem backwards: how might you find the end size if you know the start size and the number of years?

  * To print an integer `n`, use a line of code like:

  ```python
  print(f"The number is {n}")
  ```
