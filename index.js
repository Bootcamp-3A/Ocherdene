let s = "A man, a plan, a canal: Panama";
function findPalindrome(s) {
  let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(findPalindrome(s));
