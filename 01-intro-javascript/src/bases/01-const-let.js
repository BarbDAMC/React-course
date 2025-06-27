
//Variables que no pueden ser reasignadas
const nombre = "Barb";
const apellido = "McDonald";

//Variables que pueden ser reasignadas
let valorDato = 5;
valorDato = 4;

console.log( nombre, apellido, valorDato );

if( true ) {
  let valorDato = 10; // Esta variable se puede reasignar porque existe dentro de un scope
  console.log( valorDato ); // Imprime 10

  //lo mismo con const
  const nombre = 'Alan'; 
  console.log( nombre ); // Imprime Alan
}

console.log( valorDato );
