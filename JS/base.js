const nome = "elvilys bolivar";
let nome2 = "";
let pessoadefault = {
    nome: "elvilys",
    idade: "24",
    trabalho:"programadora"
}

let nomes = ["elvilys" ,"elvis" , "wesley"];
let pessoaslistavazia = [];
let pessoas = [
    {nome: "elvilys",
    idade: "24",
    trabalho:"programadora"},

    {nome: "elvis",
    idade: "22",
    trabalho:"mecanico"},

    { nome: "wesley",
    idade: "26",
    trabalho:"tecnico"}
    
];

function alterarnome() {
    nome2 = "susana valles";
    console.log("valor alterado:");
    console.log(nome2);

}
function recebeEalteraNome(novonome){
nome2 = novonome; 
console.log("valor alterado recebendo um nome:");
console.log(nome2);
}
function imprimirPessoa(pessoa){
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);}


    function adicionarpessoa(pessoa){
        pessoas.push (pessoa)
    }

    function imprimirPessoas(){
        pessoas.forEach((item) =>{
            console.log("nome:");
            console.log (item.nome);

            console.log("idade:");
            console.log(item.idade);
            

            console.log("trabalho");
            console.log(item.trabalho); 

        })
    }

    adicionarpessoa({
     nome:   "jose bolivar",
     idade: "54",
     trabalho: "diretor"
    });
    console.log(pessoas);
//imprimirPessoa(pessoadefault);




























//recebeEalteraNome("elvis josue");
//recebeEalteraNome("lys");


//alterarnome();