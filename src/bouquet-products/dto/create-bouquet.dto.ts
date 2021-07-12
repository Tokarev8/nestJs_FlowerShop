import {TagArray} from "../../interface/tags-interface";

// вариант вне класса

export interface CreateBouquetDto {
    name: string;
    image: string[];
    price: number;
    structure: string;
    description: string;
    id: string;
    categories: string;
    flowers: string[];
    reason: string[];
    popularity: number;
    favorite: boolean;
    discount: number;
}

