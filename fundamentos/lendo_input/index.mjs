import readline from 'readline';

const rdL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rdL.question('Qual e sua linguagem de programacao preferida? ', (language) => {
    console.log(language)
    rdL.close()
})