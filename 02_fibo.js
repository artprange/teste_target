function fibo(n) {
  let n1 = 0;
  let n2 = 1;
  // testando se há um numero menor do que o inserido caso haja, retornará verdadeiro
  while (n2 <= n) {
    if (n2 === n) {
      return true;
    }

    // caso não, será falso e portanto, não faz parte da sequenmcia
    let aux = n2;
    n2 = n1 + n2;
    n1 = aux;
  }

  return false;
}

console.log(fibo(17));
console.log(fibo(5));
console.log(fibo(90));
console.log(fibo(4));
