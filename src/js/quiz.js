alert("Seja bem vindo ao Quiz"
)
// Criando as perguntas
const perguntas= [
    {
        pergunta: "Pergunta numero1 ?\n a)Opção A \n b) Opção B \n c) Opção C",
        resposta: "A"

    },
    {
        pergunta: "Pergunta numero1 ?\n a)Opção A \n b) Opção B \n c) Opção C",
        resposta: "A"
    
    },
    {
        pergunta: "Pergunta numero1 ?\n a)Opção A \n b) Opção B \n c) Opção C",
        resposta: "B"
    }
]

// Declarando acertos
let acertos =0


//percorrer perguntass
for( let i=0; i<perguntas.length;i++){
    const respostaUsuario =prompt(perguntas[i].pergunta)

if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase())
    acertos++;
//mostrand o resultado na pagina
document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas`)
}