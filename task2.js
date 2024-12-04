//Reham Wahbi , Francis muzalbat
//Task 2

const num = 237;
let bol = true;
for (let n = 2; n <= num; n++) {
  bol = true;
  for (let d = 2; d * d <= n; d++) {
    if (n != 2 && n % d == 0) {
      bol = false;
      break;
    }

  }
  if (bol == true)
    console.log(n);
}