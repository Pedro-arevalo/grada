import { Cardapio } from './models/Cardapio'
import { Comanda } from './models/Comanda'
import { Pedido, PedidoRefeicao, TPedido } from './models/Pedido'
import { ItemCardapio } from './models/ItemCardapio'

import express from 'express'
import {
  Produto,
  produto4,
  produto3,
  produto2,
  produto5,
} from './models/Produto'
import { Acompanhamento } from './models/Acompanhamento'

const app = express()
const port = 3000

// let novoCardapio = new Cardapio('cardapio', new Date(), [])
// novoCardapio.criarNovoItemCardapio('Bife acebolado', 'proteina', true)
// console.log(novoCardapio.getListaItensCardapio())
// let novoProduto = new Produto('prod2', 'sobremesa', 'picolé', 4, true)
// console.log(Produto.getTodasInstancias())

// const newComanda = new Comanda('usuario', 3, [
//   { produto: produto3, observacoes: 'bem gelada' },
//   { produto: produto2, observacoes: 'gelo e limão' },
// ])

const requisicaoNovaComanda = {
  usuarioId: 'Pedro2202',
  mesa: 8,
  pedidos: [
    {
      produto: produto3,
      observacoes: 'gelo e limão',
    },
    {
      produto: produto4,
      observaocoes: '',
    },
  ],
  observacoes: 'cliente com pressa',
}
const arrozAcomp = new Acompanhamento('arroz', false, false)
const reqPedidos: TPedido[] = [
  {
    produto: produto2,
    observacoes: '',
    tipo: 'refeicao',
    proteina: 'Bife',
    acompanhamentos: [arrozAcomp],
    paraLevar: false,
  },
  {
    produto: produto3,
    observacoes: '',
    tipo: 'geral',
  },
  {
    produto: produto5,
    tipo: 'suco',
    observacoes: '',
    sabor: 'laranja',
    qtdadeAcucar: 'menos',
    qtdadeGelo: 'regular',
    paraLevar: false,
  },
]
const reqNovaComanda = {
  usuarioId: 'Pedro2202',
  mesa: 3,
  pedidos: reqPedidos,
}
const novaComanda = new Comanda(
  reqNovaComanda.usuarioId,
  reqNovaComanda.mesa,
  reqNovaComanda.pedidos,
  ''
)

// console.log(novaComanda)

// console.log(
//   novaComanda.conta.atualizarFormaPagameto({
//     especie: 12,
//     cartaoCredito: 10,
//     cartaoDebito: 6,
//     pix: 8,
//   })
// )
// console.log(novaComanda)
const novoCardapio = new Cardapio([
  {
    nome: 'Bife acebolado',
    categoria: 'proteina',
  },
  {
    nome: 'Laranja',
    categoria: 'saborSuco',
  },
  {
    nome: 'Arroz',
    categoria: 'acompanhamento',
  },
  {
    nome: 'Assado de panela',
    categoria: 'proteina',
  },
])
// console.log(novoCardapio.getListaItensCardapio())
console.log(ItemCardapio.getTodasInstancias())
console.log({
  proteinas: ItemCardapio.getProteinas(),
  acompanhamentos: ItemCardapio.getAcompanhamentos(),
  saboresSuco: ItemCardapio.getSaboresSuco(),
})

novoCardapio.alternarDisponibilidadeItemCardapio('Laranja')
novoCardapio.alternarDisponibilidadeItemCardapio('Bife acebolado')

console.log(ItemCardapio.getTodasInstancias())
console.log({
  proteinas: ItemCardapio.getProteinas(),
  acompanhamentos: ItemCardapio.getAcompanhamentos(),
  saboresSuco: ItemCardapio.getSaboresSuco(),
})

// const novaComanda = new Comanda(
//   requisicaoNovaComanda.usuarioId,
//   requisicaoNovaComanda.mesa,
//   requisicaoNovaComanda.pedidos,
//   requisicaoNovaComanda.observacoes
// )

// console.log(novaComanda.getComanda())
// console.log(novaComanda.)

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`)
})
