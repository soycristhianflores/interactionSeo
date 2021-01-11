
export interface RootObject {
    status: string;
    carreras: Carrera[];
  }
  
  export interface Carrera {
    adjunto: any[];
    nombre: string;
    email: string;
    comentario: string;
  }
