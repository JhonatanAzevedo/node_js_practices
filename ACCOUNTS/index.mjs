import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

operation()

function operation() {

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'oque voce deseja fazer?',
        choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
    }
    ]).then((answer) => {
        const action = answer['action']
        switch (action) {
            case 'Criar conta':
                return createAccount()
            case 'Consultar saldo':

                break;
            case 'Depositar':
                return deposit()
            case 'Sacar':

                break;
            case 'Sair':
                console.log(chalk.bgBlue.black('obrigado por usar a Accounts!'))
                process.exit()
                break;

            default:
                break;
        }
    }).catch((error) => (console.log(error)))
}


//created account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabens por escolhar nosso banco!'))
    console.log(chalk.green('Defina as opcoes da sua conta a seguir'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'digite seu nome para a sua conta:'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName
        )

        // verifica se existe o diretorio accounts, se nao existe ele cria.
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta ja existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}',
            function (error) {
                console.log(error)
            },
        )
        console.log(chalk.green('Parabens a sua conta foi criada!'))
        operation()

    }).catch((error) => {
        console.log(error)
    })
}


// add an amount to user account
function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']
        //verify account exist
        if (!checkAccount(accountName)) {
            return deposit()

        }

    }).catch((error) => {
        console.log(error)
    })
}


function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta nao existe, escolhe outra conta!'))
        return false
    }
    return true

}