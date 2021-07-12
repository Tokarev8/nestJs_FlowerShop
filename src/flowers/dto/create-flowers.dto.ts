import {TagArray} from "../../interface/tags-interface";

// вариант вне класса

export interface CreateFlowersDto {
    name: string;
    image: string[];
    price: number;
    structure: string;
    description: string;
    categories: string;
    flowers: string[];
    reason: string[];
    popularity: number;
    favorite: boolean;
    discount: number;
}



/*

export interface CreateBouquetDto {
    name: string;
    image: string[];
    price: number;
    structure: string;
    description: string;
    id: string;

    tag: {
        categories: string;
        flowers: string[];
        reason: string[];
    };
    flowers: string[];
    reason: string[];
    popularity: number;
    favorite: boolean;
}


*/



/*
export class CreateBouquetDto {
    name: string;
    image: string[];
    price: number;
    structure: string;
    description: string;
    id: string;
    tag: {
        categories?: "string";
        flowers?: [""];
        reason?: [""];
    };
    popularity: number;
    favorite: boolean;
}

*/

/*
{
    "name": "Букет №1",
  "image": [],
  "price": 100500,
  "structure": "",
  "description": "",
  "id": "",
  "tag": {},
  "popularity": 0,
  "favorite": false
}
 */