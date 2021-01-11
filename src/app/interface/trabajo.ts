// export interface Trabajo {
    
// }


export interface RootObject {
  status: string;
  trabajos: Trabajo[];
}

export interface Trabajo {
  metas: any[];
  _id: string;
  idTrabajo: number;
  nombre: string;
  fecha: string;
  parrafo1: string;
  parrafo2: string;
  empresa: string;
  imgEncabezado: string;
  premios: Premio[];
  video: string;
  img: string;
  imgEmpresa: string;
}

export interface Premio {
  _id: string;
  categorias: Categoria[];
}
export interface Categoria {
  _id: string;
  tipo: string;
  img: string;
  titulo: string;
}
export interface Contacto {
  nombre: string;
  empresa: string;
  correo: string;
  asunto: string;
  consulta: string;
}