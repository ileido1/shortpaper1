
import { Doctor } from "./doctor";
import { Paciente } from "./paciente";
import { Especialidad } from "./especialidad";
export class Historia_Medica {
    
    doctor: Doctor;
    paciente: Paciente;
    colesterol: string;
    antecedentes: string;
    presion_arterial :string;
    frecuencia_cardica :string;
    peso:  number;
    altura : number;
    especialidad : Especialidad;


    crearHistoriaMedica (especialidad: Especialidad):void{

    }

  }