

//
// export interface CreateUserDto {
//     login: string;
//     email: string;
//     password: string;
//     id: string;
//     status: string;
//
//     basketId: string[];
//     basketCategories: string[];
//
//     favoriteId: string[];
//     favoriteCategories: string[];
// }


export interface CreateUserDto {
    login: string;
    email: string;
    password: string;
    _id: string;
    status: boolean;
    basked: Basket[];
    favorite: Favorite[];


}

export interface Basket {
    basketId: string
    quantity: number
    basketCategories: string
}

// @Prop({
//     type:[{ basketId:{type:string}, basketCategories:{type:string}}]
// })
// basked: {basketId: string, basketCategories: string}[];


export interface Favorite {
    favoriteId: string;
    favoriteCategories: string;
}


//
// products: [
//     {
//         product: string;
//         quantity: number;
//     }
// ]
//
//
// @Prop({
//     type:[{quantity:{type:Number}, product:{type:Schema.Types.ObjectId}}]
// })
// products: { quantity: number; product: Product }[];
//
//
















