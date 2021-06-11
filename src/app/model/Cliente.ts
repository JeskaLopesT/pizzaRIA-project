import { Pedido } from "./Pedido";

export class Cliente {

    public id: number;
    public nome: string;
    public idade: number;
    public endereco: string;
    public pedidos: Pedido[]

}