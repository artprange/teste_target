const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const resto = 19849.53;

const total = sp + rj + mg + es + resto;

//definindo a funcao
function fatia(estado) {
  let percentual = (estado * 100) / total;

  return percentual;
}
//teste
console.log(fatia(sp));
console.log(fatia(rj));
console.log(fatia(mg));
console.log(fatia(es));
console.log(fatia(resto));
