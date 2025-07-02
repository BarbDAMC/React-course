interface heroeProps {
    clave: string,
    nombre?: string,
    edad: number
    rango?: string
}

const usContext = ({ clave , nombre, edad, rango = 'Capitán' } : heroeProps) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
