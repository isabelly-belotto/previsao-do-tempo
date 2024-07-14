const key = "1f84ece57574c55b9c33fc4698f9b395"

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + " °C";
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    if (!resposta.ok) {
      throw new Error('Não foi possível obter os dados.')
    }
    const dados = await resposta.json()
    colocarDadosNaTela(dados)
  } catch (erro) {
    console.error('Erro ao buscar cidade:', erro)
  }
}

function cliqueiNobotao() {
  const cidade = document.querySelector(".input-cidade").value
  buscarCidade(cidade)
}
