export interface Root {
  perfil: Perfil;
  articulosEnCarrito: ArticulosEnCarrito[];
}

export interface Perfil {
  id: number;
  nombre: string;
  nick_name: string;
  contraseña: string;
  email: string;
  edad: number;
}

export interface ArticulosEnCarrito {
  id: number;
  nombre: string;
  categoria: string;
  edad_min: number;
  consejos_utilizacion: string;
  consejos_retirada: string;
  origen: string;
  proceso_produccion: string;
  impacto_ambiental_social: string;
  contribucion_ods: string;
  id_usuario: number;
}
