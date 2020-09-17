const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un archivo (.txt) con la tabla', options).
command('listar', 'Imprimer en consola la tabla', options)
    .help()
    .argv;


module.exports = {
    argv
}