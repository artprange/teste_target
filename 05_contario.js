function contraria(txt) {
  let aux = "";
  // "desmontando" a string e
  for (let i = txt.length - 1; i > 0; i--) {
    aux += txt[i];
  }
  return aux;
}

//teste com frases ;)

console.log(contraria("A base do teto desaba"));
console.log(contraria("A grama é amarga"));
console.log(contraria("luz azul"));
