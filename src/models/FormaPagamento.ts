export interface IFormaPagamento {
  especie: number | null
  cartaoCredito: number | null
  cartaoDebito: number | null
  pix: number | null
}

export class FormaPagamento {
  constructor(
    public especie: number | null = null,
    public cartaoCredito: number | null = null,
    public cartaoDebito: number | null = null,
    public pix: number | null = null
  ) {}

  getSomatoriaPaga() {
    let soma = 0
    this.especie && (soma += this.especie)
    this.cartaoCredito && (soma += this.cartaoCredito)
    this.cartaoDebito && (soma += this.cartaoDebito)
    this.pix && (soma += this.pix)

    return soma
  }
}
