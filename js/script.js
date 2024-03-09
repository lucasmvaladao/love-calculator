// Adiciona um ouvinte de evento ao botão com o id 'calcularBtn',
// que chama a função 'amor' quando clicado.
document.getElementById('calcularBtn').addEventListener('click', amor);

// Função assíncrona 'amor' que realiza o cálculo da porcentagem de amor.
async function amor() {
  // Obtém os valores dos campos de input com os ids 'sname' e 'fname'.
  const sname = document.getElementById('sname').value;
  const fname = document.getElementById('fname').value;

  // Constrói a URL da API com os nomes fornecidos.
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'afcb0de792msh63c60831c1744c4p106eb3jsndbfc6a226f24',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };

  try {
    // Realiza a requisição à API.
    const response = await fetch(url, options);
    const result = await response.text();

    // Exibe o resultado na página.
    document.getElementById('resultado').innerHTML = result;
  } catch (error) {
    // Trata erros e exibe uma mensagem apropriada.
    console.error(error);
    document.getElementById('resultado').innerHTML = 'Erro ao calcular a porcentagem de amor.';
  }
}