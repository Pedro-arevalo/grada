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

novoCardapio.removerItemCardapio(ItemCardapio.getTodasInstancias()[3].getId())
console.log(novoCardapio.getListaItensCardapio())

const item1 = ItemCardapio.getProteinas()[0]
const itemSuco1 = ItemCardapio.getSaboresSuco()[0]

// novoCardapio.alternarDisponibilidadeItemCardapio(item1)
// novoCardapio.alternarDisponibilidadeItemCardapio('Bife acebolado')

// console.log(ItemCardapio.getTodasInstancias())
// console.log({
//   proteinas: ItemCardapio.getProteinas(),
//   acompanhamentos: ItemCardapio.getAcompanhamentos(),
//   saboresSuco: ItemCardapio.getSaboresSuco(),
// })

let arrozAcomp = new Acompanhamento('arroz', false, false)
const reqPedidos: TPedido[] = [
  {
    produto: produto2,
    observacoes: '',
    tipo: 'refeicao',
    proteina: item1,
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
    sabor: itemSuco1,
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

console.log(
  novaComanda.removerPedido(novaComanda.getPedidosComanda()[1].getId())
)
console.log(Pedido.getTodasInstancias())

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`)
})
