import { useState } from "react";
import BookDetails from "./BookDetails";

type BookProps = {
    id: number,
    name: string;
    description : string;
    author? : {
        name: string;
    };
    maxReadTime: number;
    year: number;
    price: number;
    isBorrowed : boolean;
    setCounter : (count:number) => void;
    deleteBook : (id:number) => void;
}

const Book = ({id,name,description,author,maxReadTime,year,price,isBorrowed, setCounter,deleteBook}:BookProps) => {
    
    console.log("Book no :",id);
    console.log("Current state : ",isBorrowed);
    
    const [hasBorrowed,setBorrowState] = useState(isBorrowed);
    const [hasViewedDetails, expandViewDetails] = useState(false);

    const updateBorrowState = () => {
        setBorrowState((prevState) => !prevState);
        // console.log('State updated to :',hasBorrowed);
        if(hasBorrowed) {
            setCounter((count) => count - 1);
        }
        else {
            setCounter((count) => count + 1);
        }
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => {expandViewDetails((prev)=>!prev);}}>{hasViewedDetails ? "Hide Details":"View Details"}</button>
            {hasViewedDetails ? <BookDetails description={description} author={author} maxReadTime={maxReadTime} year={year} price={price} /> : <div></div>}
            <button onClick={updateBorrowState}>{hasBorrowed ? "Return" : "Borrow"} </button>
            <div></div>
            {/* <div>Book: {name} | state status: {hasBorrowed ? "True":"False"} | actual value: {isBorrowed ? "True":"False"}</div> */}
            <button disabled={hasBorrowed} onClick={() => {deleteBook(id)}}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default Book;