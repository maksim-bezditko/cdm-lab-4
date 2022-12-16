const result = document.querySelector(".result");

function recursively() {
  function fibonacci(n) {
    if (n === 1) return 0;
    if (n === 2 || n === 3) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  let number = prompt("Number for recursive fibonacci?");
  let startTime = +new Date();

  result.innerHTML += `
		${fibonacci(number)}<br />
		Recursive fibonacci algorithm took ${+new Date() - startTime} milliseconds<br />
    Complexity type is quadratic<br />
    Big O notation - O(2**n)
		<br /><br />
	`;
}

function iterate() {
  function fibonacci(n) {
    let i;
    let fib = [0, 1];

    for (i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib[n - 1]
  }

  let number = prompt("Number for iterative fibonacci?");
  let startTime = +new Date();

  result.innerHTML += `
		${fibonacci(number)}<br />
		Iterative fibonacci algorithm took ${+new Date() - startTime} milliseconds<br />
    Complexity type is linear<br />
    Big O notation - O(n)
		<br /><br />
	`;
}

function formula() {
  function fibonacci(n) {
    return (1 / 5 ** (0.5)) * (((1 + 5 ** (0.5)) / 2) ** n - ((1 - 5 ** (0.5)) / 2) ** n)
  }

  let number = prompt("Number for closed form formula fibonacci?");
  let startTime = +new Date();

  result.innerHTML += `
		${Math.floor(fibonacci(number - 1))}<br />
		Closed form formula fibonacci algorithm took ${+new Date() - startTime} milliseconds<br />
    Constant time complexity (I am really doubtful)<br />
    Big O notation - O(1)
		<br /><br />
	`;
}

function hanoi() {
  result.innerHTML += `
		Hanoi algorithm starts <br />
	`;

  function hanoi(n, x, z) {
    if (n) {
      let y = 6 - x - z;
      hanoi(n - 1, x, y);
      console.log(x + "->" + z)
      result.innerHTML += `
          ${x} -> ${z}
          <br />
        `;
      hanoi(n - 1, y, z)
    }
  }

  let number = prompt("How many disks?");
  let from = prompt("From?");
  let to = prompt("To?");
  let startTime = +new Date();

  hanoi(number, from, to)

  result.innerHTML += `
		Hanoi took ${+new Date() - startTime} milliseconds<br />
    Complexity type is quadratic<br />
    Big O notation - O(2**n)
		<br /><br />
	`;
}

document.querySelector(".recursively").addEventListener("click", recursively);
document.querySelector(".iteratively").addEventListener("click", iterate);
document.querySelector(".formula").addEventListener("click", formula)
document.querySelector(".hanoi").addEventListener("click", hanoi)
document.querySelector(".clear").addEventListener("click", () => result.textContent = "")
