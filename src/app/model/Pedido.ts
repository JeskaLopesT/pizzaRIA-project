import { Cardapio } from "./Cardapio";

export class Pedido {

    public id: number;
    public cliente: any;
    public cardapios: Cardapio[];
    public horarioPedido: Date;

}