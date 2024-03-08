document.getElementById('calcularBtn').addEventListener('click', amor);

async function amor() {
    const sname = document.getElementById('sname').value;
    const fname = document.getElementById('fname').value;
    
    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'afcb0de792msh63c60831c1744c4p106eb3jsndbfc6a226f24',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      document.getElementById('resultado').innerHTML = result;
    } 
    

    catch (error) {
      console.error(error);
      document.getElementById('resultado').innerHTML = 'Erro ao calcular a porcentagem de amor.';
    }
} 


// // Adicionando um ouvinte de evento ao botão com o id 'calcularBtn', que chama a função 'amor' quando clicado
// document.getElementById('calcularBtn').addEventListener('click', amor);

// // Função assíncrona 'amor' que realiza o cálculo da porcentagem de amor
// async function amor() {
//     // Obtendo os valores dos campos de input com os ids 'sname' e 'fname'
//     const sname = document.getElementById('sname').value;
//     const fname = document.getElementById('fname').value;
    
//     // Construindo a URL da API com os nomes fornecidos
//     const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
    
//     // Configurando as opções para a requisição da API
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'afcb0de792msh63c60831c1744c4p106eb3jsndbfc6a226f24',
//         'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
//       }
//     };

//     try {
//       // Realizando a requisição assíncrona à API usando 'fetch'
//       const response = await fetch(url, options);
      
//       // Convertendo a resposta da API para um objeto JSON
//       const result = await response.json();
      
//       // Verificando se a resposta foi bem-sucedida (status code 2xx)
//       if (response.ok) {
//           // Atualizando o conteúdo do elemento com id 'resultado' com a porcentagem de amor e resultado da API
//           document.getElementById('resultado').innerHTML = `Porcentagem de amor entre ${sname} e ${fname}: ${result.percentage}% e ${result}` ;
//       } else {
//           // Se a resposta não foi bem-sucedida, exibe uma mensagem de erro na página
//           document.getElementById('resultado').innerHTML = 'Erro ao calcular a porcentagem de amor. Por favor, verifique os nomes e tente novamente.';
//       }
//     } catch (error) {
//       // Se ocorrer um erro durante a requisição, exibe uma mensagem de erro na página e imprime o erro no console
//       console.error(error);
//       document.getElementById('resultado').innerHTML = 'Erro ao calcular a porcentagem de amor.';
//     }
// }