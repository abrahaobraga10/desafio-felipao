document.getElementById("classificar").addEventListener("click", function() {
  let XP = parseInt(document.getElementById("pontuacao").value);
  let nomeHeroi = document.getElementById("nome").value;

  let mensagem = "O Herói de nome ";
  let nivelMensagem = " está no nível de ";
  let classe = "_";

  if (XP <= 1000) {
    classe = "Ferro";
  } else if (XP <= 2000) {
    classe = "Bronze";
  } else if (XP <= 5000) {
    classe = "Prata";
  } else if (XP <= 7000) {
    classe = "Ouro";
  } else if (XP <= 8000) {
    classe = "Platina";
  } else if (XP <= 9000) {
    classe = "Ascendente";
  } else if (XP <= 10000) {
    classe = "Imortal";
  } else {
    classe = "Radiante";
  }

  let resultado = mensagem + nomeHeroi + nivelMensagem + classe;
  console.log(resultado);
  document.getElementById("resultado").innerText = resultado;
});
