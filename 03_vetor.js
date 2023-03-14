function calcFat(v) {
  let sum = 0;
  let lowest = v[0];
  let highest = v[0];

  // separando o maior e menor numero
  for (let j = 0; j < v.length; j++) {
    sum += v[j];
    if (v[j] < lowest) {
      lowest = v[j];
    }
    if (v[j] > highest) {
      highest = v[j];
    }
  }

  // calculando a média
  const media = sum / v.length;
  let acimaMedia = 0;

  for (let i = 0; i < v.length; i++) {
    if (v[i] > media) {
      acimaMedia++;
    }
  }

  return {
    menorFat: lowest,
    maiorFat: highest,
    dAcimaMed: acimaMedia,
  };
}

// dados para teste
const dummyData = [
  750, 200, 30, 467, 1000, 360, 900, 479, 1000, 600, 600, 5600,
];
const final = calcFat(dummyData);
console.log(final);
