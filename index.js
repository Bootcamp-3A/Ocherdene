let x = 1213;

function findpalindrom(x) {
  let arr = Array.from(String(x));
  let sum = [];
  for (i = arr.length; i >= 0; i--) {
    sum += arr[i];
  }

  return sum;
}

console.log(findpalindrom(x));
<span class="material-symbols-outlined">key</span>;
<span class="material-symbols-outlined">key</span>;
