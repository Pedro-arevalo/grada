import { ItemCardapio } from './ItemCardapio'

export class Acompanhamento {
  constructor(
    public opcaoAcomp: string,
    public maiorPorcao: boolean,
    public menorPorcao: boolean
  ) {}
}
