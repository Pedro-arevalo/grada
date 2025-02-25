export class Produto {
  private static instancias: Produto[] = []
  constructor(
    public id: string,
    public categoria: 'refeicao' | 'suco' | 'sobremesa' | 'outros',
    public descricao: string,
    public preco: number,
    public disponivel: boolean
  ) {
    Produto.instancias.push(this)
  }

  static getTodasInstancias() {
    return Produto.instancias
  }

  getPreco() {
    return this.preco
  }
}

const produto1 = new Produto('produto1', 'refeicao', 'PF', 20, true)
export const produto2 = new Produto('produto2', 'refeicao', 'Marmita', 20, true)
export const produto3 = new Produto('produto3', 'outros', 'Coca (1l)', 10, true)
export const produto4 = new Produto(
  'produto4',
  'outros',
  'Coca lata (350ml)',
  5,
  true
)
export const produto5 = new Produto('produto5', 'suco', 'copo (450ml)', 6, true)
