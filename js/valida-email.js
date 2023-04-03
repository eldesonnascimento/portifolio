export function validaEmail() {
  const quantidadeDigitadaEmail = document.getElementById("email");
  const vazio = document.querySelector(".mensagem__erro__vazio__email");
  const formatoInvalido = document.querySelector(".mensagem__erro__formato__invalido");

  quantidadeDigitadaEmail.addEventListener("blur", function () {
    if (quantidadeDigitadaEmail.value === "") {
      vazio.textContent = "O campo Email não deve estar vazio";
    } else {
      vazio.textContent = "";
    }
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(quantidadeDigitadaEmail.value)) {
      formatoInvalido.textContent = "O email não está no formato aceitável (ex: teste@teste.com)";
    } else {
      formatoInvalido.textContent = "";
    }
  });
}
