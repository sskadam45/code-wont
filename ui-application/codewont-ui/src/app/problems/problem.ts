import { TopicDTO } from './../category/topic';
export class ProblemDTO{
    id!: number;
    title!: string;
    descriptions?: string;
    constraints?: string;
    dificulty?: DificultyLevel;
    status?: StatusLevel;
    category?: string;
}

export enum DificultyLevel{
    EASY='Easy',
    MEDIEUM='MEDIEUM',
    HARD='MEDIEUM'
}

export enum StatusLevel{
    SOLVED='SOLVED',
    ATTEMPTED='ATTEMPTED',
    TODO='TODO'
}