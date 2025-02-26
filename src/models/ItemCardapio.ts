export interface IItemPorCategoria {
  id: string
  nome: string
}

export class ItemCardapio {
  static instancias: ItemCardapio[] = []
  static proteinas: IItemPorCategoria[] = []
  static saboresSuco: IItemPorCategoria[] = []
  static acompanhamentos: IItemPorCategoria[] = []

  public id: string
  public estaDisponivel: boolean = true

  constructor(
    public nome: string,
    public categoria: 'proteina' | 'acompanhamento' | 'saborSuco'
  ) {
    ItemCardapio.instancias.push(this)

    this.id = this.nome + Math.random().toString()

    this.atualizarListaDisponiveis()
  }
  static getTodasInstancias() {
    return ItemCardapio.instancias
  }
  static removerItem(id: string) {
    ItemCardapio.instancias = ItemCardapio.instancias.filter(
      (item) => item.id !== id
    )
  }
  static getProteinas() {
    return ItemCardapio.proteinas
  }
  static getAcompanhamentos() {
    return ItemCardapio.acompanhamentos
  }
  static getSaboresSuco() {
    return ItemCardapio.saboresSuco
  }

  getId() {
    return this.id
  }
  getItemParaPedido() {
    return { id: this.id, nome: this.nome }
  }

  getCategoria() {
    return this.categoria
  }

  atualizarListaDisponiveis() {
    const { id, nome, categoria, estaDisponivel } = this
    switch (categoria) {
      case 'proteina':
        estaDisponivel
          ? ItemCardapio.proteinas.push({ id, nome })
          : (ItemCardapio.proteinas = ItemCardapio.proteinas.filter(
              (proteina) => proteina.id !== id
            ))
        break
      case 'acompanhamento':
        estaDisponivel
          ? ItemCardapio.acompanhamentos.push({ id, nome })
          : (ItemCardapio.acompanhamentos = ItemCardapio.acompanhamentos.filter(
              (acomp) => acomp.id !== id
            ))
        break
      case 'saborSuco':
        estaDisponivel
          ? ItemCardapio.saboresSuco.push({ id, nome })
          : (ItemCardapio.saboresSuco = ItemCardapio.saboresSuco.filter(
              (sabor) => sabor.id !== id
            ))
        break
    }
  }

  alternarDisponibilidade() {
    this.estaDisponivel = !this.estaDisponivel
    this.atualizarListaDisponiveis()
  }
}
