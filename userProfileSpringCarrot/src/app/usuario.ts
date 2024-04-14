export class Usuario {
  id: number
  nombre: string
  nick_name: string
  email: string
  edad: number
  pedidos: Pedido[]
  carrito_compra: Producto[]

  constructor(
    id: number,
    nombre: string,
    nick_name: string,
    email: string,
    edad: number,
    pedidos: Pedido[],
    carrito_compra: Producto[],
  ) {
    ;(this.id = id),
      (this.nombre = nombre),
      (this.nick_name = nick_name),
      (this.email = email),
      (this.edad = edad),
      (this.pedidos = pedidos)
    this.carrito_compra = carrito_compra
  }
}

class Pedido {
  id: number
  direccion: Direccion
  productos: Producto[]

  constructor(id: number, direccion: Direccion, productos: Producto[]) {
    this.id = id
    this.direccion = direccion
    this.productos = productos
  }
}

class Direccion {
  pais: string
  provincia: string
  ciudad: string
  cod_postal: string
  calle: string
  numero: number
  piso: number
  puerta: string

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
    this.pais = pais
    this.provincia = provincia
    this.ciudad = ciudad
    this.cod_postal = cod_postal
    this.calle = calle
    this.numero = numero
    this.piso = piso
    this.puerta = puerta
  }
}

class Producto {
  nombre: string
  descripcion: string
  precio_cents: number

  constructor(nombre: string, descripcion: string, prcio_cents: number) {
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio_cents = prcio_cents
  }
}
