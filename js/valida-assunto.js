
export function  validaAssunto(){
  const quantidadeDigitadaAssunto = document.getElementById("assunto");
  const vazio = document.querySelector(".mensagem__erro__vazio__assunto");
  const caracteres = document.querySelector(".mensagem__erro__caracteres__assunto");
  
  quantidadeDigitadaAssunto.addEventListener("blur", function() {
    if (quantidadeDigitadaAssunto.value === "") {
      vazio.textContent = "O campo assunto não deve estar vazio";
    } else {
      vazio.textContent = "";
    }
  
    if (quantidadeDigitadaAssunto.value.length > 50) {
      caracteres.textContent = "Excedeu o máximo de 50 caracteres";
    } else {
      caracteres.textContent = "";
    }
  })

}
