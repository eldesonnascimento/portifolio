
export function  validaMensagem(){
  const quantidadeDigitadaMensagem = document.getElementById("mensagem");
  const vazio = document.querySelector(".mensagem__erro__vazio__mensagem");
  const caracteres = document.querySelector(".mensagem__erro__caracteres__mensagem");
  
  quantidadeDigitadaMensagem.addEventListener("blur", function() {
    if (quantidadeDigitadaMensagem.value === "") {
      vazio.textContent = "O campo mensagem não deve estar vazio.";
    } else {
      vazio.textContent = "";
    }
  
    if (quantidadeDigitadaMensagem.value.length > 300) {
      caracteres.textContent = "Excedeu o máximo de 300 caracteres.";
    } else {
      caracteres.textContent = "";
    }
  })

}
