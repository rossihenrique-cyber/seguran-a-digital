function criarSenha() { // Cria a função responsável por gerar a senha
    let senha = document.getElementById("senha"); // Pega a caixa onde a senha será exibida
    let quantidade = document.getElementById("quantidade").value; // Pega a quantidade de caracteres informada
    let minusculasMarcado = document.getElementById("minusculas").checked; // Verifica se minúsculas foi marcado
    let maiusculasMarcado = document.getElementById("maiusculas").checked; // Verifica se maiúsculas foi marcado
    let numerosMarcado = document.getElementById("numeros").checked; // Verifica se números foi marcado
    let especiaisMarcado = document.getElementById("especiais").checked; // Verifica se caracteres especiais foi marcado
    let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"; // Caracteres de letras minúsculas
    let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Caracteres de letras maiúsculas
    let numeros = "0123456789"; // Caracteres numéricos
    let especiais = "!@#$%&*?"; // Caracteres especiais
    let caracteresPermitidos = ""; // Variável que vai guardar os caracteres escolhidos
    if (minusculasMarcado) { // Se a opção minúsculas estiver marcada
        caracteresPermitidos += letrasMinusculas; // Adiciona letras minúsculas
    }
    if (maiusculasMarcado) { // Se a opção maiúsculas estiver marcada
        caracteresPermitidos += letrasMaiusculas; // Adiciona letras maiúsculas
    }
    if (numerosMarcado) { // Se a opção números estiver marcada
        caracteresPermitidos += numeros; // Adiciona números
    }
    if (especiaisMarcado) { // Se a opção especiais estiver marcada
        caracteresPermitidos += especiais; // Adiciona caracteres especiais
    }
    if (caracteresPermitidos == "") { // Verifica se nenhuma opção foi marcada
        alert("Marque pelo menos uma opção!"); // Mostra aviso ao usuário
        return; // Para a função
    }
    let senhaCriada = ""; // Variável que vai montar a senha final
    for (let i = 0; i < quantidade; i++) { // Repete até atingir a quantidade informada


        let sorteio = Math.floor(Math.random() * caracteresPermitidos.length); // Sorteia uma posição


        senhaCriada += caracteresPermitidos[sorteio]; // Adiciona o caractere sorteado na senha
    }
    senha.value = senhaCriada; // Mostra a senha criada na caixa
}
function limparSenha() { // Cria a função para limpar a senha
    document.getElementById("senha").value = ""; // Apaga o conteúdo da caixa da senha
    document.getElementById("quantidade").value = 8; // Volta a quantidade para 8 caracteres
}
