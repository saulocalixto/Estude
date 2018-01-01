
export const Guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export function getBaralho (baralhoKey) {
  const baralho = {
    key: '',
    nome: '',
    qtdPerguntas: 0,
    descricao: ''
  }
  return typeof metric === 'undefined'
  ? info
  : info[metric]
}