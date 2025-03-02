// formApp.js

(function () {
  // Helper function to parse input array safely
  function parseArray(input) {
    try {
      if (input.startsWith("[") && input.endsWith("]")) {
        return JSON.parse(input); // Parse JSON format like [1,2,3]
      }
      return input.split(",").map((num) => {
        let parsedNum = Number(num.trim());
        if (isNaN(parsedNum))
          throw new Error("Array must contain only numbers.");
        return parsedNum;
      });
    } catch (error) {
      throw new Error(
        "Invalid input: Enter numbers separated by commas or a valid JSON array."
      );
    }
  }

  // Function to calculate the sum of an array
  function sumOfArray() {
    let input = document.getElementById("sumArrayInput").value.trim();
    try {
      let arr = parseArray(input);
      let sum = arr.reduce((acc, num) => acc + num, 0);
      document.getElementById("arrayResult").textContent = `Result: ${sum}`;
    } catch (error) {
      document.getElementById(
        "arrayResult"
      ).textContent = `Error: ${error.message}`;
    }
  }

  // Function to reverse a string
  function reverseString() {
    let str = document.getElementById("reverseStringInput").value.trim();
    if (!str) {
      document.getElementById("reverseStringResult").textContent =
        "Error: Invalid input";
      return;
    }

    let reversed = str.split("").reverse().join("");
    document.getElementById(
      "reverseStringResult"
    ).textContent = `Result: ${reversed}`;
  }

  // Function to check if a string is a palindrome
  function isPalindrome() {
    let str = document.getElementById("isPalindromeInput").value.trim();
    if (!str) {
      document.getElementById("isPalindromeResult").textContent =
        "Error: Input cannot be empty.";
      return;
    }

    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    let result =
      cleanedStr === reversedStr
        ? "Yes, it's a palindrome!"
        : "No, not a palindrome.";

    document.getElementById(
      "isPalindromeResult"
    ).textContent = `Result: ${result}`;
  }

  // Function to find the maximum number in an array
  function findMax() {
    let input = document.getElementById("findMaxInput").value.trim();
    try {
      let arr = parseArray(input);
      let maxNum = Math.max(...arr);
      document.getElementById(
        "findMaxResult"
      ).textContent = `Result: ${maxNum}`;
    } catch (error) {
      document.getElementById(
        "findMaxResult"
      ).textContent = `Error: ${error.message}`;
    }
  }

  // accessing by button clicks
  window.sumOfArray = sumOfArray;
  window.reverseString = reverseString;
  window.isPalindrome = isPalindrome;
  window.findMax = findMax;
})();
