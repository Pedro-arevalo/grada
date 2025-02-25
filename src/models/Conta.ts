import { FormaPagamento, IFormaPagamento } from './FormaPagamento'

export class Conta {
  public estaPago: boolean = false
  public formaPagamento: FormaPagamento | null = null
  constructor(public valor: number, formaPagamentoObj: IFormaPagamento | null) {
    if (formaPagamentoObj !== null) {
      this.formaPagamento = this.atualizarFormaPagameto(formaPagamentoObj)
      this.estaPago = this.avaliarSePago()
    }
  }

  atualizarFormaPagameto(atualizacao: IFormaPagamento) {
    if (this.formaPagamento !== null) {
      this.formaPagamento.atualizar(atualizacao)
      this.estaPago = this.avaliarSePago()
    } else {
      const { especie, cartaoCredito, cartaoDebito, pix } = atualizacao
      this.formaPagamento = new FormaPagamento(
        especie,
        cartaoCredito,
        cartaoDebito,
        pix
      )
      this.estaPago = this.avaliarSePago()
    }
    return this.formaPagamento
  }

  avaliarSePago() {
    if (this.formaPagamento !== null) {
      return !(this.formaPagamento.getSomatoriaPaga() < this.valor)
    }
    return false
  }
}
