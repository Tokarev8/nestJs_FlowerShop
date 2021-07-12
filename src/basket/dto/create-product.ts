


export interface CreateProductDto {
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
    quantity: number;
}