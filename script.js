
const senha = document.getElementById("senha");

const botao = document.getElementById("mostrarSenha");

botao.addEventListener("click", function() {

    if (senha.type === "password") {

        senha.type = "text";

    } else {

        senha.type = "password";

    }

});
