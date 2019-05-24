const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pergunta1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Quantas lajotas o gato Obinho precisa pular? (Ex:14) ', (res) => {
            resolve(res)
        })
    })
}
const pergunta2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Qual é o vetor de lajotas ? sendo 1 para preta e 0 para falsa. (Ex: 1 1 0 1 1 1 0 1 1 0 1 0 1 1) ', (res) => {
            resolve(res)
        })
    })
}

const problema = async (lajotas, numLajotas) => {
    lajotas = lajotas.split(" ")
    var pulos = 0
    var lajota = 0

    while (lajota < numLajotas) {
        if (lajota + 2 < numLajotas && lajotas[lajota + 2] == 1) {
            pulos += 1
            lajota += 2
        }
        else {
            if (lajota + 1 < numLajotas && lajotas[lajota + 1] == 1) {
                pulos += 1
                lajota += 1
            } else {
                break;
            }
        }
    }
    if (lajota == numLajotas - 1) {
        console.log(pulos)
    } else {
        console.log(-1)
    }
}

const main = async () => {
    const numLajotas = await pergunta1()
    var lajotas = await pergunta2()
    rl.close()
    await problema(lajotas, numLajotas)
}

main()








