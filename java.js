let usuarios = [];
let mensagensErros = [];

function Usuario(nome,email,mensagem){ 
    this.nome = nome;
    this.email = email
    this.mensagem = mensagem
}

let nome = document.querySelector("#input_nome")
let email = document.querySelector("#input_email")
let mensagem = document.querySelector("#input_mensagem")
let Erros = document.querySelector("#Erros")

function AdicRegistroNovo(){ 
    if(validacaoCampo() != 0){
        let nomeUsuario = nome.value;
    let emailUsuario = email.value;
    let mensagemUsuario = mensagem.value;
    let usuario = new Usuario(nomeUsuario,emailUsuario,mensagemUsuario)
    usuarios.push(usuario);

   

    } else {
        Erros.textcontent = mensagensErros.join('- ')
        Erros.classList.add('Erros')

    }

}


function validacaoCampo(){
    if(nome.value == ""){
        mensagensErros.push("Campo nome é obrigatorio")
        nome.focus()
        return 0
    }

    if (nome.value.length < 2){
            mensagensErros.push("Deve ter pelo menos 3 letras")
        

    } else if (email.value == ""){
        mensagensErros.push("Campo email obrigatorio")
        email.focus
        return 0
    }

      else if (email.value.indexOf("@")==-1 ||
        email.value.indexOf(".")==-1) {
        mensagensErros.push ("email invalido")
    }
}



document.querySelector('#btn-enviar').addEventListener('click', AdicRegistroNovo)
document.querySelector('#btn-enviar').addEventListener('click' , validacaoCampo )

