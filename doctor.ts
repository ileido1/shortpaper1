export class Usuario{};

class Doctor  extends Usuario{
 
    nombre_especialidad : Especialidad;
   
    constructor(nombre:Especialidad) {
      super();
      this.nombre_especialidad = nombre;
    }
  }