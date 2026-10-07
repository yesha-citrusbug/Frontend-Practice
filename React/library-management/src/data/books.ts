import type { Book } from "../types/book";

export const books : Book[] = [
    {
        id : 1,
        name : "The Alchemist",
        description : "A young shepherd boy travels far from home to find a hidden treasure and his true destiny.",
        maxReadTime : 50,
        author : {
            name : "Paulo Coelho"
        },
        year : 1998,
        price : 500,
        isBorrowed : true,
    },
    {
        id : 2,
        name : "1984",
        description : "A grim look at a future world where a total government watches every move and controls truth.",
        maxReadTime : 100,
        author : {
            name : "George Orwell"
        },
        year : 1995,
        price : 400,
        isBorrowed : true,
    },
    {
        id : 3,
        name : "To Kill a Mockingbird",
        description : " A young girl learns about deep racial injustice in a small Southern town.",
        maxReadTime : 200,
        author : {
            name : "Harper Lee"
        },
        year : 2004,
        price : 1500,
        isBorrowed : false,
    },
    {
        id : 4,
        name : "Educated",
        description : "A powerful true story of a young woman who leaves her strict survivalist family to earn a PhD.",
        maxReadTime : 150,
        author : {
            name : "Tara Westover"
        },
        year : 2001,
        price : 200,
        isBorrowed : false,
    },
    {
        id : 5,
        name : "Circe",
        description : "A fresh look at the Greek myth of a banished witch who discovers her own immense power.",
        maxReadTime : 85,
        author : {
            name : "Madeline Miller"
        },
        year : 2003,
        price : 500,
        isBorrowed : false,
    },
    {
        id : 6,
        name : "The Book Thief",
        description : "A young foster girl in Nazi Germany finds comfort by sharing stolen books with others",
        maxReadTime : 100,
        author : {
            name : "Markus Zusak"
        },
        year : 1996,
        price : 2000,
        isBorrowed : false,
    }
]