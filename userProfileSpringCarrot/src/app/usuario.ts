export class UsuarioRegistrarse {
  nombre: string;
  nick: string;
  password: string;
  email: string;
  edad: number;
  limiteGasto: number;

  constructor(
    nombre: string,
    nick: string,
    password: string,

    email: string,
    edad: number,
    limiteGasto: number,
  ) {
    (this.nombre = nombre),
      (this.nick = nick),
      (this.email = email),
      (this.edad = edad),
      (this.password = password),
      (this.limiteGasto = limiteGasto);
  }
}

export class Usuario {
  id: number;
  nombre: string;
  nick_name: string;
  email: string;
  edad: number;
  pedidos: Pedido[];
  carrito_compra: Producto[];

  constructor(
    id: number,
    nombre: string,
    nick_name: string,
    email: string,
    edad: number,
    pedidos: Pedido[],
    carrito_compra: Producto[],
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.nick_name = nick_name),
      (this.email = email),
      (this.edad = edad),
      (this.pedidos = pedidos),
      (this.carrito_compra = carrito_compra);
  }
}

class Pedido {
  id: number;
  direccion: Direccion;
  productos: Producto[];

  constructor(id: number, direccion: Direccion, productos: Producto[]) {
    this.id = id;
    this.direccion = direccion;
    this.productos = productos;
  }
}

class Direccion {
  pais: string;
  provincia: string;
  ciudad: string;
  cod_postal: string;
  calle: string;
  numero: number;
  piso: number;
  puerta: string;

  constructor(
    pais: string,
    provincia: string,
    ciudad: string,
    cod_postal: string,
    calle: string,
    numero: number,
    piso: number,
    puerta: string,
  ) {
    this.pais = pais;
    this.provincia = provincia;
    this.ciudad = ciudad;
    this.cod_postal = cod_postal;
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.puerta = puerta;
  }
}

class Producto {
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

  constructor(
    id: number,
    nombre: string,
    categoria: string,
    edad_min: number,
    consejos_utilizacion: string,
    consejos_retirada: string,
    origen: string,
    proceso_produccion: string,
    impacto_ambiental_social: string,
    contribucion_ods: string,
    id_usuario: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.edad_min = edad_min;
    this.consejos_utilizacion = consejos_utilizacion;
    this.consejos_retirada = consejos_retirada;
    this.origen = origen;
    this.proceso_produccion = proceso_produccion;
    this.impacto_ambiental_social = impacto_ambiental_social;
    this.contribucion_ods = contribucion_ods;
    this.id_usuario = id_usuario;
  }
}
