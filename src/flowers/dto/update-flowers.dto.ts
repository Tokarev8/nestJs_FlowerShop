import {TagArray} from "../../interface/tags-interface";


export interface UpdateFlowersDto {
    readonly name: string;
    readonly image: string[];
    readonly price: number;
    readonly structure: string;
    readonly description: string;
    readonly categories: string;
    readonly flowers: string[];
    readonly reason: string[];
    readonly popularity: number;
    readonly favorite: boolean;
    readonly discount: number;
}




