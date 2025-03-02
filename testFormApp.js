function runTests() {
  console.log("Running Tests...\n");

  // Test sumOfArray
  console.log("Testing sumOfArray...");
  console.log(sumOfArray([1, 2, 3, 4]) === 10 ? "Passed" : "Failed");
  console.log(sumOfArray([-1, 0, 1]) === 0 ? "Passed" : "Failed");
  console.log(sumOfArray([5]) === 5 ? "Passed" : "Failed");
  console.log(sumOfArray([]) === 0 ? "Passed" : "Failed");
  console.log(
    sumOfArray("Hello") === "Error: Invalid input" ? "Passed" : "Failed"
  );

  // Test reverseString
  console.log("Testing reverseString...");
  console.log(reverseString("hello") === "olleh" ? "Passed" : "Failed");
  console.log(reverseString("racecar") === "racecar" ? "Passed" : "Failed");
  console.log(reverseString("") === "" ? "Passed" : "Failed");
  console.log(
    reverseString(123) === "Error: Invalid input" ? "Passed" : "Failed"
  );

  // Test isPalindrome
  console.log("Testing isPalindrome...");
  console.log(isPalindrome("madam") === true ? "Passed" : "Failed");
  console.log(isPalindrome("hello") === false ? "Passed" : "Failed");
  console.log(
    isPalindrome("A man, a plan, a canal, Panama") === true
      ? "Passed"
      : "Failed"
  );
  console.log(
    isPalindrome(" ") === "Error: Invalid input" ? "Passed" : "Failed"
  );

  // Test findMax
  console.log("Testing findMax...");
  console.log(findMax([3, 1, 9, 2]) === 9 ? "Passed" : "Failed");
  console.log(findMax([-10, -5, -1]) === -1 ? "Passed" : "Failed");
  console.log(findMax([]) === "Error: Invalid input" ? "Passed" : "Failed");
  console.log(findMax("123") === "Error: Invalid input" ? "Passed" : "Failed");
}

runTests();
