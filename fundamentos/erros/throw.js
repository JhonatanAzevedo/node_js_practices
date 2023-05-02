const x = "10"

// Checar se x é  um numero
if (!Number.isInteger(x)) {
    throw new Error('O valor de x nao e um numero')
}

console.log('continua o codigo......')