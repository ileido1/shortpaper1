export class Usuario{};
export class Especialidad{};

class Doctor  extends Usuario{
 
    nombre_especialidad : Especialidad;
   
    constructor(nombre:Especialidad) {
      super();
      this.nombre_especialidad = nombre;
    }
  }