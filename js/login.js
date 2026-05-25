const form = document.getElementById("formLogin");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const rm = document.getElementById("rm").value;
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if(rm === "12345" && senha === "12345"){

        mensagem.innerHTML = "Login realizado com sucesso!";
        mensagem.style.color = "green";

    } else {

        mensagem.innerHTML = "RM ou senha incorretos!";
        mensagem.style.color = "red";

    }

});