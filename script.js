const pessoas = [{
    nome: "Mateus",
    sobrenome: "Freitas",
    idade: 27,
    mostarIdade() {
        alert(this.nome + " " + this.sobrenome)
    },
},
{
    nome: "Joao",
    sobrenome: "Carlos",
    idade: 27,
    mostarIdade() {
        alert(this.nome + " " + this.sobrenome)
    },
}];

const mateus = {
    nome: "Mateus",
    sobrenome: "Freitas",
    idade: 27,
}

// acesso ao objeto
// alert(pessoas[0].nome)

// desestruturação  
const { nome, sobrenome } = mateus;
// O codigo acima é a mesma coisa que
// const nome = mateus.nome
// const nome = mateus.sobrenome

function mostraNomeCompleto(nome, sobrenome) {
    alert(nome + " " + sobrenome)
};

mostraNomeCompleto(nome, sobrenome);


/// operador de resto ... -> pega aquilo que sobrou

cores = ["vermelho", "azul", "verde", "preto", "laranja"];
const [primeiraCor, segundaCor, ...coresRestantes] = cores;

alert(primeiraCor)
alert(coresRestantes)

const pessoaSecreta = {
    nome: 'Joao',
    sobrenome: 'Pedro',
    idade: 20,
    profissao: 'Desenvolvedor',
    genero: 'Masculino',
    bandaFavorita: 'Slipknot',
    filmeFavorito: 'Ilha do Medo'
}

const { artistaFavorito, filmeFavorito, ...infosRestantes } = pessoaSecreta;

console.log(infosRestantes)

const numerosA = [6, 7, 8]
const numerosB = [4, 2, 1] 

const todosOsNumeros = [...numerosA, ...numerosB]; //todos os numeros

alert(todosOsNumeros)

const pessoaBase = {
    nome: 'Goku',
    sobrenome: 'Vegeta'
}

const pessoaExtra = {
    signo: 'Dragao',
    idade: null
}

const pessoaCompleta = {...pessoaBase, ...pessoaExtra};


// criar vetor de objetos ( prop )

// usar desestruturacao de 
//     - vetor
//      - objeto

// usar operador de resto
    // - pegar info restante (obj, vetor)
    // - construir algo novo (obj, vetor)