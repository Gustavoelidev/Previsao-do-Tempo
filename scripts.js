const key = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".tempo").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
  document.querySelector(
    ".icone-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

  console.log(dados);
}

async function buscarCidade(cidade) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    );

    if (response.ok) {
      const dados = await response.json();
      colocarDadosNaTela(dados);
    } else {
      console.error("Erro ao buscar dados da cidade.");
    }
  } catch (erro) {
    console.error("Ocorreu um erro na solicitação:", erro);
  }
}

function cliqueNoBotao() {
  const cidade = document.querySelector(".input-pesquisa").value;
  buscarCidade(cidade); // Chame a função buscarCidade com o nome da cidade
}

// Certifique-se de que o evento de clique no botão esteja configurado corretamente
const botao = document.querySelector(".seu-botao");
botao.addEventListener("click", cliqueNoBotao);
