import { Pedido, PedidoRefeicao, PedidoSuco, TPedido } from './Pedido'
import { Conta } from './Conta'

import { formataTempo } from '../utils/formataTempo'

export class Comanda {
  private static contadorInstancias = 0
  private static instancias: Comanda[] = []

  public id: string
  public data: string
  public hora: string
  public usuarioId: string
  public index: string
  public mesa: number
  public pedidos: Pedido[]
  public conta: Conta
  public observacoes: string

  constructor(
    usuarioId: string,
    mesa: number,
    pedidos: TPedido[],
    observacoes: string
  ) {
    const { data, hora } = formataTempo(new Date())

    Comanda.instancias.push(this)
    Comanda.contadorInstancias++

    this.id = 'comandaQualquerCoisa'
    this.data = data
    this.hora = hora
    this.usuarioId = usuarioId
    this.index = Comanda.contadorInstancias.toString()
    this.mesa = mesa
    this.pedidos = pedidos.map((pedido: TPedido) =>
      this.adicionarPedido(pedido)
    )
    this.conta = new Conta(
      this.pedidos.reduce(this.calcularValorConta, 0),
      null
    )
    this.observacoes = observacoes
  }

  static getTodasInstancias() {
    return Comanda.instancias
  }

  getPedidosComanda() {
    return this.pedidos
  }

  adicionarPedido(pedido: TPedido) {
    const { tipo } = pedido
    switch (tipo) {
      case 'refeicao':
        return new PedidoRefeicao(
          this.index,
          this.mesa,
          pedido.produto,
          pedido.proteina,
          pedido.acompanhamentos,
          pedido.paraLevar,
          pedido.observacoes
        )
      case 'suco':
        return new PedidoSuco(
          this.index,
          this.mesa,
          pedido.produto,
          pedido.sabor,
          pedido.qtdadeAcucar,
          pedido.qtdadeGelo,
          pedido.paraLevar,
          pedido.observacoes
        )
      default:
        return new Pedido(
          this.index,
          this.mesa,
          pedido.produto,
          pedido.observacoes
        )
    }
  }

  removerPedido(id: string) {
    Pedido.removerPedido(id)
    this.pedidos = this.pedidos.filter((pedido) => pedido.id !== id)

    return this.pedidos
  }

  getContaComanda() {
    return this.conta
  }

  calcularValorConta(total: number, pedido: Pedido) {
    return total + pedido.produto.getPreco()
  }
}
