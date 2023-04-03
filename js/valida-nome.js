export function validaNome(){
  const quantidadeDigitada = document.getElementById("nome");
  const vazio = document.querySelector(".mensagem__erro__vazio");
  const caracteres = document.querySelector(".mensagem__erro__caracteres");
  
  quantidadeDigitada.addEventListener("blur", function() {
    if (quantidadeDigitada.value === "") {
      vazio.textContent = "O campo Nome não deve estar vazio";
    } else {
      vazio.textContent = "";
    }
  
    if (quantidadeDigitada.value.length > 50) {
      caracteres.textContent = "Excedeu o máximo de 50 caracteres";
    } else {
      caracteres.textContent = "";
    }
  })

}
