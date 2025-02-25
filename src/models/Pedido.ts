import { Produto } from './Produto'
import { Acompanhamento } from './Acompanhamento'

import { formataTempo } from '../utils/formataTempo'

interface IAcompanhamento {
  nome: string
  maiorPorcao: boolean
  menorPorcao: boolean
}

interface IPedidoBase {
  produto: Produto
  observacoes: string
}

interface IPedidoRefeicao extends IPedidoBase {
  proteina: string
  acompanhamentos: Acompanhamento[]
  paraLevar: boolean
}

interface IPedidoSuco extends IPedidoBase {
  sabor: string
  qtdadeAcucar: 'regular' | 'mais' | 'menos'
  qtdadeGelo: 'regular' | 'mais' | 'menos'
  paraLevar: boolean
}

export type TPedido = IPedidoBase | IPedidoRefeicao | IPedidoSuco

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
}

export class PedidoRefeicao extends Pedido {
  public proteina: string
  public acompanhamentos: Acompanhamento[]
  public paraLevar: boolean
  constructor(
    index: string,
    mesa: number,
    produto: Produto,
    proteina: string,
    acompanhamentos: IAcompanhamento[],
    paraLevar: boolean,
    observacoes: string
  ) {
    super(index, mesa, produto, observacoes)
    this.proteina = proteina
    this.paraLevar = paraLevar

    let classAcompArray: Acompanhamento[] = []
    acompanhamentos.forEach((acomp) => {
      const { nome, maiorPorcao, menorPorcao } = acomp
      const acompPorAdicionar = new Acompanhamento(
        nome,
        maiorPorcao,
        menorPorcao
      )
      classAcompArray.push(acompPorAdicionar)
    })
    this.acompanhamentos = classAcompArray
  }

  verRefeicao() {
    return this
  }
  getAcompanhamentos() {
    return this.acompanhamentos
  }
}

export class PedidoSuco extends Pedido {
  sabor: string
  qtdadeAcucar: 'regular' | 'mais' | 'menos' | 'sem'
  qtdadeGelo: 'regular' | 'mais' | 'menos' | 'sem'
  paraLevar: boolean
  constructor(
    index: string,
    mesa: number,
    produto: Produto,
    sabor: string,
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
