import { Usuario } from "./usuario";
import { Historia_Medica } from "./historia_medica";
import { contacto } from "./contacto";
export class Paciente extends Usuario {
    
    fecha_nacimiento : Date;
    profesion : string;
    peso : number;
    contacto : contacto;
  }