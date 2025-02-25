export class ItemCardapio {
  static instancias: ItemCardapio[] = []
  static proteinas: string[] = []
  static saboresSuco: string[] = []
  static acompanhamentos: string[] = []

  public id: string
  public estaDisponivel: boolean = true

  constructor(
    public nome: string,
    public categoria: 'proteina' | 'acompanhamento' | 'saborSuco'
  ) {
    ItemCardapio.instancias.push(this)

    this.id = this.nome + Math.random().toString()
    this.atualizarListaDisponiveis()
    // switch (this.categoria) {
    //   case:
    // }
    // if (this.categoria === 'proteina' && this.estaDisponivel)
    //   ItemCardapio.proteinas.push(this.nome)
    // if (this.categoria === 'acompanhamento' && this.estaDisponivel)
    //   ItemCardapio.acompanhamentos.push(this.nome)
    // if (this.categoria === 'saborSuco' && this.estaDisponivel)
    //   ItemCardapio.saboresSuco.push(this.nome)
  }
  static getTodasInstancias() {
    return ItemCardapio.instancias
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

  atualizarListaDisponiveis() {
    const { nome, categoria, estaDisponivel } = this
    switch (categoria) {
      case 'proteina':
        estaDisponivel
          ? ItemCardapio.proteinas.push(nome)
          : (ItemCardapio.proteinas = ItemCardapio.proteinas.filter(
              (proteina) => proteina !== nome
            ))
        break
      case 'acompanhamento':
        estaDisponivel
          ? ItemCardapio.acompanhamentos.push(nome)
          : (ItemCardapio.acompanhamentos = ItemCardapio.acompanhamentos.filter(
              (acomp) => acomp !== nome
            ))
        break
      case 'saborSuco':
        estaDisponivel
          ? ItemCardapio.saboresSuco.push(nome)
          : (ItemCardapio.saboresSuco = ItemCardapio.saboresSuco.filter(
              (sabor) => sabor !== nome
            ))
        break
    }
  }

  alternarDisponibilidade() {
    this.estaDisponivel = !this.estaDisponivel
    this.atualizarListaDisponiveis()
  }

  // static adaptarLista(itemCardapio: ItemCardapio) {
  //   if (itemCardapio.estaDisponivel) {
  //     ItemCardapio.proteinas.push(itemCardapio.nome)
  //   } else {
  //     ItemCardapio.proteinas.remove(itemCardapio.nome)
  //   }
  // }
  // static adaptar() {
  //   const proteinasFiltradas = ItemCardapio.instancias.filter((itemCardapio) => {
  //     return itemCardapio.estaDisponivel && itemCardapio.categoria === 'proteina'
  //   })
  //   const saboresSucoFiltrados = ItemCardapio.instancias.filter((itemCardapio) => {
  //     return itemCardapio.estaDisponivel && itemCardapio.categoria === 'saborSuco'
  //   })
  //   const acompFiltrados = ItemCardapio.instancias.filter((itemCardapio) => {
  //     return itemCardapio.estaDisponivel && itemCardapio.categoria === 'acompanhamento'
  //   })
  //   ItemCardapio.proteinas = proteinasFiltradas.map((itemCardapio) => {
  //     return itemCardapio.nome
  //   })
  //   ItemCardapio.acompanhamentos = acompFiltrados.map((itemCardapio) => {
  //     return itemCardapio.nome
  //   })
  //   ItemCardapio.saboresSuco = saboresSucoFiltrados.map((itemCardapio) => {
  //     return itemCardapio.nome
  //   })
  // }

  getCategoria() {
    return this.categoria
  }
}
