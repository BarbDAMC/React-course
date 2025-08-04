import { memo } from "react";

interface HijoInterface {
    numero: number;
    incrementar: (numero: number) => void;
}

export const Hijo = memo(({ numero, incrementar }: HijoInterface) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
