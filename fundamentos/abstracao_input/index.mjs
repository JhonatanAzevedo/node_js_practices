import inquirer from "inquirer";

inquirer.prompt([
    {
        name: 'p1', message: 'Qual a primeira nota?'
    },
    {
        name: 'p2', message: 'Qual a segunda nota?'
    }
]).then(
    (answers) => {
        const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)
        
        console.log(`A media e: ${media}`)
    }
).catch(error => console.log(error))