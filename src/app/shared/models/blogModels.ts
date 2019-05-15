export interface Deserializable {
    // idea from https://nehalist.io/angular-7-models/
    deserialize(input: any): this;
}

export class Article implements Deserializable{
    /**
     The Base Article object
     */
    public title: string;
    public body: string;
    public publishDate: Date;
    public author: string;
    public comments: Comment[]

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}

export class Comment{
    public user: string;
    public comment: string;
    public rating: number;
    public score: number;
    public subComments: Comment[];

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}