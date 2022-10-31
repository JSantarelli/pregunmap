export class Pregunta {
    id: string;
    titulo: string;
    respuestas: [
        {
            texto: string;
            respuestaCorrecta: boolean;
            valor: any;
            color: string;
            icono: string;
            foto: string;
            estado: boolean;
        },
        {
            texto: string;
            respuestaCorrecta: boolean;
            valor: any;
            color: string;
            icono: string;
            foto: string;
            estado: boolean;
        },
        {
            texto: string;
            respuestaCorrecta: boolean;
            valor: any;
            color: string;
            icono: string;
            foto: string;
            estado: boolean;
        }
    ]
    provincia: string;
    ciudad: string;
    lat: number;
    lng: number;
    categoria: string;
    color: string;
    icono: string;
    foto: string;
    estado: boolean;
    puntaje: number;
    nivel: number;
    ayuda: string;
    detalle: boolean
}
