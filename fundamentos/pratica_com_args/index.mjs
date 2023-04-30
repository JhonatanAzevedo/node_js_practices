
import minimist from "minimist";
import soma from "./soma.mjs";

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])


soma(a,b)