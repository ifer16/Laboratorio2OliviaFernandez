// Crear Funcion para llamar
// Funciones y calcular areas.

let calcSurface = (figure) => {
    const surfaces = require('./surfaces.js')


    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    //  Validar el figura a calcular.

    switch (figure) {
        case 'square':
            process.stdout.write('por favor ingrese el lado de un cuadrado');
            process.stdin.on('data', (chunk) => {
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);

                process.stdout.write(`La superficie del cuadrado es ${ surface } metros cuadrados\n `);
                process.stdin.destroy();

            });
            break;


        case 'triangule':
            process.stdout.write('Por favor ingrese la base y la altura del triangulo, separado por un espacio:');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangule(base, height);

                process.stdout.write(`La superficie del Triangulo es ${ surface } metros cuadrados\n`);
                process.stdin.destroy();

            });
            break;


        case 'rectangle':
            process.stdout.write('Por favor ingrese la base y altura del rectanculo, separados por un espacio: ')
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);

                process.stdout.write(`la superficie del rectangulo es ${ surface } metros cuadrados \n `);
                process.stdin.destroy();

            });
            break;

        case 'circle':
            process.stdout.write('ingrese el radio del circulo:');
            process.stdin.on('data', (chunk) => {
                let surface = surfaces.circle(parseFloat(chunk));
                process.stdout.write(`la superficie del circulo es ${surface} metros cuadrado`);
                process.stdin.destroy();

            });

            break;

        case 'ellipse':
            process.stdout.write('ingrese la longitud del elipse, separados por un espacio:');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.ellipse(base, height);

                process.stdout.write(`la superficie del elipse es ${ surface } metros cuadrados \n `);
                process.stdin.destroy();
            });

            break;

        default:
            process.stdout.write('opcion no valida. por favor intente de nuevo');
            process.exit();
            break;
    }
}

calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write('\n hasta la proxima\n');
});