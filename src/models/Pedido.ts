import { Produto, produto2, produto3 } from './Produto'
import { IItemPorCategoria } from './ItemCardapio'
import { Acompanhamento } from './Acompanhamento'

import { formataTempo } from '../utils/formataTempo'

interface IPedidoBase {
  produto: Produto
  observacoes: string
}

interface IPedidoGeral extends IPedidoBase {
  tipo: 'geral'
}

interface IPedidoRefeicao extends IPedidoBase {
  tipo: 'refeicao'
  proteina: IItemPorCategoria
  acompanhamentos: Acompanhamento[]
  paraLevar: boolean
}

interface IPedidoSuco extends IPedidoBase {
  tipo: 'suco'
  sabor: IItemPorCategoria
  qtdadeAcucar: 'regular' | 'mais' | 'menos'
  qtdadeGelo: 'regular' | 'mais' | 'menos'
  paraLevar: boolean
}

export type TPedido = IPedidoGeral | IPedidoRefeicao | IPedidoSuco

export class Pedido {
  private static instancias: Pedido[] = []

  public id: string
  public data: string
  public hora: string

  constructor(
    public index: string,
    public mesa: number,
    public produto: Produto,
    public observacoes: string
  ) {
    const { data, hora } = formataTempo(new Date())

    Pedido.instancias.push(this)

    this.id = 'PedidoQualquerCoisa' + Math.random().toString()
    this.data = data
    this.hora = hora
  }

  static getTodasInstancias() {
    return Pedido.instancias
  }
  static removerPedido(id: string) {
    Pedido.instancias = Pedido.instancias.filter((pedido) => pedido.id !== id)
  }

  getId() {
    return this.id
  }
}

export class PedidoRefeicao extends Pedido {
  public proteina: IItemPorCategoria
  public acompanhamentos: Acompanhamento[]
  public paraLevar: boolean
  constructor(
    index: string,
    mesa: number,
    produto: Produto,
    proteina: IItemPorCategoria,
    acompanhamentos: Acompanhamento[],
    paraLevar: boolean,
    observacoes: string
  ) {
    super(index, mesa, produto, observacoes)
    this.proteina = proteina
    this.paraLevar = paraLevar
    this.acompanhamentos = acompanhamentos
  }

  getAcompanhamentos() {
    return this.acompanhamentos
  }
}

export class PedidoSuco extends Pedido {
  sabor: IItemPorCategoria
  qtdadeAcucar: 'regular' | 'mais' | 'menos' | 'sem'
  qtdadeGelo: 'regular' | 'mais' | 'menos' | 'sem'
  paraLevar: boolean
  constructor(
    index: string,
    mesa: number,
    produto: Produto,
    sabor: IItemPorCategoria,
    qtdadeAcucar: 'regular' | 'mais' | 'menos' | 'sem',
    qtdadeGelo: 'regular' | 'mais' | 'menos' | 'sem',
    paraLevar: boolean,
    observacoes: string
  ) {
    super(index, mesa, produto, observacoes)
    this.sabor = sabor
    this.qtdadeAcucar = qtdadeAcucar
    this.qtdadeGelo = qtdadeGelo
    this.paraLevar = paraLevar
  }
}
