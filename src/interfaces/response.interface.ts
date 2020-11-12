import { Article } from './article.interface';


export interface Response {
    status?: string;
    totalResults?: number;
    articles?: Article[];
}
