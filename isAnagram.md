// Create a function called isAnagram, which given two strings, returns true if they are anagrams of one another.
// For example: `Listen` is an anagram of `Silent`

function isAnagram(first, second) {
  //code goes here
}

// isAnagram(..., ...); should return true

 function isAnagram(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    return sortString(stringA) === sortString(stringB);
  }

   function sortString(string) {
    return string.split("").sort().join("");
  }