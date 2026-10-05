import type { Book as BookType} from "../types/book"
import Book from "./Book.tsx"
import EmptyList from "./EmptyList.tsx";

type BookListProps = {
    allBooks : BookType[],
    passCounter : (count:number)=> void;
    deleteHandle : (id:number)=>void;
}



const BookList = ({
    allBooks,passCounter,deleteHandle
}: BookListProps) => {

    if (allBooks.length === 0) {
        return (<EmptyList message="No books found"></EmptyList>);
    }

    return (
        <main>
            {allBooks.map((book) => (
                    <Book key={book.id} {...book} setCounter={passCounter} deleteBook={deleteHandle}></Book>
            ))}
        </main>
    );
};

export default BookList;