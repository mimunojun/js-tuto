# Summarization
    
## 1. Variables

* Three ways of declaration of variables
    * const
    * let
    * var
* `const` is used for a variable not being changed.
* `let` and `var` is used for a variable being changed.
* `var` declaration is **legacy**, so consider using `const` or `let` instead of `var`.

## 2-1. Data Types

* There's NO data type for variable, but value itself has data type.
    * primitive
        * you can't change it after making
        * 7 types: Boolean, Number, Bigint, String, undefined, null, Symbol
        * result of `typeof` operator is `<data type>`
    * object
        * you can change it after making
        * e.g. Object, Array, Function, Class, Regular Expression, Date
        * result of `typeof` operator is `"object"`
            * Function is an exception, result is `"function"`

## 2-2. Literal

* You can define primitive value and some of object easily by using **Literal**.
* which is a syntax for directly discribing values of commonly used data types.

### String

* These three types of literal results the same.
```
console.log("string");
console.log('string');
console.log(`string`);
```       

## 2-3. Operator

### Unary Plus Operator `+`
* convert operand into number value but ***not recommended***.
```
console.log(+1);        // 1
console.log(+"1");      // 1
console.log(+"string"); // NaN (stands for "Not-a-Number")
```

### Strict Equivalence Operator `===`
* returns `true` only if operands have the same value and data type. (when operands are primitives)
```
console.log(1 === 1);    // true
console.log(1 === "1");  // false
```
* returns `true` only if operands reference the same objects (when operands are objects)
```
const objA = {};
const objB = {};

console.log(objA === objB); // false
console.log(objA === objA); // true
```
* compared to Equivalence Operator `==`, `==` does *implicit type conversion* which may cause bugs, so using `===` is recommended instead of `==`.

### Nullish Coalescing Operator `??`

* `??` returns right-side evaluation if value of left-side is **nullish**.
    * **nullish** is a value whose evaluation result is `null` or `undefined`.
```
// returns right-side evaluation
console.log(null ?? "right-side");       // "right-side"
console.log(undefined ?? "right-side");  // "right-side"

// returns left-side evaluation
console.log(true ?? "right-side");       // true
console.log(false ?? "right-side");      // false
console.log(0 ?? "right-side");          // 0
console.log("string" ?? "right-side");   // "string"
```

* `??` often used to set default value.
    * `||` also can be used, but not recommended because of *implicit type conversion*.
```
const inputValue = any value or undefined
const value = inputValue ?? 42;     // 42 is assigned if only `value` is nullish
console.log(value);
```

### Condition Operator `?`, `:`

* if a `<conditional expression>` results `true`, returns `<true-value>`, else, returns `<false-value>`.
```
<conditional expression> ? <true-value> : <false-value>;

const valueA = true ? "A" : "B";
console.log(valueA);        // "A"
const valueB = false ? "A" : "B";
console.log(valueB);        // "B"
```

