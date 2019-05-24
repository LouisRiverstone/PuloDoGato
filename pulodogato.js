//Instancia Modulo de Leitura de Tela
const readline = require('readline');
//Cria interface de entrada e saida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Cria uma Função chamada Pergunta 1
const pergunta1 = () => {
    //Cria uma Promisse pois o modulo ReadLine Trabalha de forma Assincrona
    return new Promise((resolve, reject) => {
        //Mostra a Questão no Terminal e pega o input do teclado
        rl.question('Quantas lajotas o gato Obinho precisa pular? (Ex:14) ', (res) => {
            //Retorna o resultado assincrono usando a promisse
            resolve(res)
        })
    })
}
//Cria uma Função chamada Pergunta 2
const pergunta2 = () => {
    //Cria uma Promisse pois o modulo ReadLine Trabalha de forma Assincrona
    return new Promise((resolve, reject) => {
        //Mostra a Questão no Terminal e pega o input do teclado
        rl.question('Qual é o vetor de lajotas ? sendo 1 para preta e 0 para falsa. (Ex: 1 1 0 1 1 1 0 1 1 0 1 0 1 1) ', (res) => {
            //Retorna o resultado assincrono usando a promisse
            resolve(res)
        })
    })
}

//Função de Solução do Problema
const problema = async (lajotas, numLajotas) => {
    //Quebra a entrada que é uma string em um Array
    lajotas = lajotas.split(" ")
    //Variaveis de Contagem
    var pulos = 0
    var lajota = 0
    
    //Executa enquanto não chegar ao final das lajotas
    while (lajota < numLajotas) {
        //Tenta Sempre dar o maior pulo que é de duas casas
        if (lajota + 2 < numLajotas && lajotas[lajota + 2] == 1) {
            pulos += 1
            lajota += 2
        }
        //Caso não consiga pular duas casas
        else {
            //Tenta pular uma casa
            if (lajota + 1 < numLajotas && lajotas[lajota + 1] == 1) {
                pulos += 1
                lajota += 1
            }
            //Quebra o Loop pois não consegiu pular
            else {
                break;
            }
        }
    }
    //Verifica se Chegou ao Final
    if (lajota == numLajotas - 1) {
        //Mostra a quantidade de pulos
        console.log(pulos)
    } 
    //Caso não chegou ao final mostra -1
    else {
        console.log(-1)
    }
}

//Função de execução principal, neste caso como o programa roda de forma assincrona é necessario criar uma função principal
//que tenha controle das execuções assincronas para que nenhuma atropele a outra
const main = async () => {
    //Executa a pergunta 1 e espera a resposta
    const numLajotas = await pergunta1()
    //Executa a pergunta 2 e espera a resposta
    var lajotas = await pergunta2()
    //Fecha a entrada e saida do Terminal
    rl.close()
    //Espera a resolução do problema
    await problema(lajotas, numLajotas)
}

//Executa a função principal
main()








