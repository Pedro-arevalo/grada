import { formataTempo } from '../utils/formataTempo'
import { ItemCardapio } from './ItemCardapio'

interface IItemCardapio {
  nome: string
  categoria: 'proteina' | 'acompanhamento' | 'saborSuco'
}

export class Cardapio {
  public id: string
  public data: string
  public hora: string
  public listaItensCardapio: ItemCardapio[]
  constructor(listaItensCardapio: IItemCardapio[]) {
    const { data, hora } = formataTempo(new Date())

    this.id = 'Cardapio' + Math.random().toString()
    this.data = data
    this.hora = hora
    this.listaItensCardapio = listaItensCardapio.map(
      (itemCardapio) =>
        new ItemCardapio(itemCardapio.nome, itemCardapio.categoria)
    )
  }

  getListaItensCardapio() {
    return this.listaItensCardapio
  }

  criarNovoItemCardapio(itemCardapio: IItemCardapio) {
    const { nome, categoria } = itemCardapio
    this.listaItensCardapio.push(new ItemCardapio(nome, categoria))
  }

  removerItemCardapio(id: string) {
    ItemCardapio.removerItem(id)
    this.listaItensCardapio = this.listaItensCardapio.filter(
      (item) => item.id !== id
    )
    return this.listaItensCardapio
  }

  alternarDisponibilidadeItemCardapio(id: string) {
    const item = this.listaItensCardapio.find((item) => item.id === id)
    item?.alternarDisponibilidade()
  }
}
