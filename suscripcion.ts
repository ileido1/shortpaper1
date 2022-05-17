import { Paciente } from "./paciente";


export abstract class Suscripcion {

    paciente : Paciente;
    activa: boolean;
    creada: Date;
    expira: Date;
    empieza: Date;

    abstract crearSuscripcion(paciente : Paciente): Suscripcion;

}