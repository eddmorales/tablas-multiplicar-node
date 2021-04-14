const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

        try {
            let salida = '';
            let consola = '';
            if (listar) {
                console.log('=============='.green);
                console.log(' Tabla del:'.green, colors.red(base));
                console.log('=============='.green);

                for (let i = 1; i <= hasta; i++) {

                    salida += `${ base } x ${ i } = ${ base * i}\n`;
                    consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;
                }

                console.log(consola);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        } catch (err) {
            throw err;
        }

        return (`tabla-${base}.txt`);

    }
    // const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log('==============');
//         console.log(' Tabla del:', base);
//         console.log('==============');

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {

//             salida += `${ base } x ${ i } = ${ base * i}\n`;
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//         resolve(`tabla-${base}.txt`);

//     })

// }

module.exports = {
    crearArchivo
}