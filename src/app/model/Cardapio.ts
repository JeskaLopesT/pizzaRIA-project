import { Pedido } from "./Pedido";

export class Cardapio{

    public id: number;
    public sabor: string;
    public preco: number
    public tamanho: string;
    public pedido: Pedido;
    public bordaRecheada: boolean;

}