import { Cardapio } from "./Cardapio";

export class Pedido {

    public id: number;
    public cliente: any;
    public cardapio: Cardapio;
    public horarioPedido: Date;

}