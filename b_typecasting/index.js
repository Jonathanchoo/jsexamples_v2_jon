<<<<<<< HEAD
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Numbers() method</h1>
<p>The Number() metod converts a variable (or value) into a number:</p>
<p id="demoNumber"></p>

<h1>JavaScript String() method</h1>
<p>The String() method converts a variable (or value) into a string value:</p>
<p id="demoString"></p>

<h1>JavaScript Boolean() method</h1>
<p>The Boolean() method converts a variable (or value) into a boolean value:</p>
<p id="demoBoolean"></p>

<script>

    // Demonstrate converting values using the Number() method 
    document.getElementById("demoNumber").innerHTML =
    Number("3.142") + "<br>" +  // 3.142
    Number(Math.PI) + "<br>" +  // 3.14159...
    Number("     ") + "<br>" +  // 0
    Number("")      + "<br>" +  // 0
    Number("88 88") + "<br>" +  // NaN ~ Not a Number
    Number("Steve") + "<br>";   // NaN ~ Not a Number

    // Demonstrate converting values using the String() method 
    document.getElementById("demoString").innerHTML =
    String(new Date()) + "<br>" +
    String("98765") + "<br>" +
    String(98765);

    // Demonstrate converting values using the Boolean() method
    document.getElementById("demoBoolean").innerHTML =
    Boolean("1") + "<br>" +     // true
    Boolean(1) + "<br>" +       // true
    Boolean("0") + "<br>" +     // true
    Boolean(0) + "<br>" +       // false
    Boolean(" ") + "<br>" +     // true
    Boolean("John") + "<br>";   // true

</script>

</body>
</html>
=======
// 1. Type Casting

// Converting values to numbers using the Number object
console.log(Number("3.142"));   // 3.142
console.log(Number(Math.PI));   // 3.141592653589793
console.log(Number("     "));   // 0
console.log(Number(""));        // 0
console.log(Number("88 88"));   // NaN (not a number)
console.log(Number("Steve"));   // NaN (not a number)

// Converting values to strings using the String object
console.log(new Date());            // Unformatted of today's date and time 
console.log(String(new Date()));    // Formatted (to String) of today's date and time
console.log(String("98765"));       // "98765"
console.log(String(98765));         // "98765"

// Converting values into boolean
console.log(Boolean("1"));      // true (truthy response)
console.log(Boolean(1));        // true
console.log(Boolean("0"));      // true (truthy response)
console.log(Boolean(0));        // false
console.log(Boolean(" "));      // true (truthy response)
console.log(Boolean(""));       // false (falsy response)
console.log(Boolean("John"));   // true
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
