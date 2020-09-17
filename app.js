//
const { argv } = require('./config/yargs')
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log('Archivo creado con exito:' + colors.green(`${archivo}`)))
            .catch(err => console.log(err));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('NA');
        break;
}

// let base = '2';

// let argv = process.argv;

// let parameter = argv[2];
// let base = argv[2].split('=')[1];

// console.log(argv.limite);