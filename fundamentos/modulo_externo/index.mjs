// EX: no terminal passar isto => node .\index.mjs --nome=jhon 

import minimist from "minimist";

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']

console.log(nome)