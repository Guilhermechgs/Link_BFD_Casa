import { Produto } from "./Produto";

export class ItemEstoque {
    constructor(
        public produto: Produto,
        public quantidade: number
    ) {}
}