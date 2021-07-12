import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type UserDocument = User & Document;



@Schema()
export class User {


    @Prop()
    login: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop()
    id: string;
    @Prop()
    status: boolean;
    @Prop({
        type:[{ basketId:{type: String}, quantity:{type:Number}, basketCategories:{type: String}, }]
    })
    basked: {basketId: string, quantity: number, basketCategories: string}[];
    @Prop({
        type:[{ favoriteId:{type: String}, favoriteCategories:{type: String}}]
    })
    favorite: {favoriteId: string, favoriteCategories: string}[];

}



export const UserSchema = SchemaFactory.createForClass(User);

