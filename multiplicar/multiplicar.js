// Required
const fs = require('fs');
var colors = require('colors');
// const fs = require('express');
// const fs = require('./path');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No se recibió un numero');
            return;
        }

        let data = '';
        for (let multi = 1; multi <= limite; multi++) {
            data += (`${ base } x ${ multi } = ${ (base*multi) }\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else {
                resolve(`tabla-${base}.txt`)
                console.log(`Tabla del ${base} con limite de ${limite}`);
            }
        });
    });
}

let listarTabla = (base, limite) => {
    let data = '';
    for (let multi = 1; multi <= limite; multi++) {
        data += (`${ base } x ${ multi } = ${ (base*multi) }\n`);
    }
    console.log(`Tabla del ${base} con limite de ${limite}`.magenta);
    console.log(colors.red(data));

}

module.exports = {
    crearArchivo,
    listarTabla
}