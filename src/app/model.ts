export interface Model{
    name: string;
    imgUrl: string;
    price :number;
    id: number;
}


export interface ResponseModel{
    data:Array<Model>;
}