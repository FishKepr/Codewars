# Codewars
index.html is simply a template for calling solution.js and displaying the results in the console log.

Solution.js:
<ul>
<li>Accept string in function</li>
<li>Split string into an array using ‘ ‘ as the delimiter</li>
<li>Spin through the array </li>
<li>For each word, examine each letter using substring and generate that letter’s numerical value.  Then push that value into an array.</li>
<li>Spin through the value array and save the index of the highest one as we go.</li>
<li>Use that index value to select the word with the highest value.</li>

<li>Separate function to determine letter value:</li>
<li>We may be able to leverage charCodeAt() to get the numeric value:</li>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt</li>
</ul>