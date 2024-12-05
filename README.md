# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript related to its loose typing system. The + operator is overloaded to handle both numerical addition and string concatenation. If either operand of the + operator is a string, JavaScript will perform string concatenation instead of numerical addition. This behavior can lead to unexpected results if not carefully considered.

## Bug
The `foo` function is intended to add two numbers, however, when strings are passed in, it concatenates them instead of performing numerical addition.

## Solution
To solve this, you should explicitly convert the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition. This ensures the + operator performs numerical addition as intended.