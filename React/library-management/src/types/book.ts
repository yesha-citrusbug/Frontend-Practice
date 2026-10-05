export type Author = {
    name : string;
}

export type Book = {
    id : number;
    name : string;
    description : string;
    maxReadTime : number;
    author? : Author;
    price : number;
    isBorrowed : boolean
}