
export function getSaludo(nombre : string) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( 'DefaultName' ) }  ` );