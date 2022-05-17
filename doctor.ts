<<<<<<< HEAD
import { Agenda_consulta } from "./agenda_consulta";
import { gestion_paciente } from "./gestion_paciente";
import { Especialidad } from "./especialidad";
import { ubicacion_geografica } from "./ubicacion_geografica";
import { Historia_Medica } from "./historia_medica";
import { Usuario } from "./usuario";
=======
export class Usuario{};
export class Especialidad{};
>>>>>>> 594f517be6829da3b27c52f0b7aab6811b8f843f

export class Doctor  extends Usuario implements gestion_paciente, Agenda_consulta{
 
    nombre_especialidad : [Especialidad];
    ubicacion_geografica: ubicacion_geografica;
    historia_med : [Historia_Medica];
   
    constructor(nombre:string, apellido:string,nombre_especialidad:[Especialidad],ubicacion: ubicacion_geografica, historia:[Historia_Medica]) {
      super(nombre,apellido);
      this.nombre_especialidad = nombre_especialidad;
      this.ubicacion_geografica = ubicacion;
      this.historia_med = historia;
    }
    mostarconsultas(): void {
      
    }
    agregarpaciente(): void {
      
    }
    mostrarpaciente(): void {
      
    }
  }