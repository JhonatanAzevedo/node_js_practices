import chalk from "chalk";

const nota = 4

if (nota >= 7) {
    console.log(chalk.green.bold("Parabens aprovado"))
} else if (nota < 7 && nota >= 5) {
    console.log(chalk.bgYellow("Recuperacao"))
} else {
    console.log(chalk.bgRed("Reprovado"))
}


