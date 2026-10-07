import { books} from './data/books'
import Header from './components/Header'
import BookList from './components/BookList'
import NewBookForm from './components/NewBookForm'
import './App.css'
import { useState } from 'react'
// import type { Book } from './types/book'

let initialBorrowCount = 0

function countInitialBorrow(){
  books.forEach((book) => {
  if (book.isBorrowed){
    initialBorrowCount++;
  }
  })
}
countInitialBorrow();

type newBookProps = {
  id:number,
  name: string;
  author:{
    name : string;
  };
  year : number,
  description : string;
  maxReadTime: number;
  price: number;
  isBorrowed: boolean
}

function App() {
  const [count,setCounter] = useState<number>(initialBorrowCount);
  const [currentBookList,updateBookList] = useState(books);
  const [isBookFormOpen, showBookForm] = useState(false);

  // const updateBorrowCount = (bookList:Book[]) => {
  //   let initialCount = 0;

  //   bookList.forEach((book) => {
  //     console.log(book.name);
  //     if (book.isBorrowed){
  //       initialCount++;
  //     }
  //   })
  //   setCounter(initialCount);
  // }


  const deleteBook = (id:number) => {
    const newBookList = currentBookList.filter((book)=>{
      return book.id !== id
    })
    console.log(newBookList);
    updateBookList(newBookList);
    // updateBorrowCount(newBookList);
  }

  const addNewBook = async (book:newBookProps) =>  {
    // const book_id = 
    // const isBookBorrowed = false;
    // Add new book object to the existing list
    await new Promise<void>((resolve) => {
      setTimeout(() => {
          console.log("Timeout finished!!");
          resolve();
      }, 5000);
  });
    updateBookList((previousList) => {
      return [...previousList,book]
    })
    showBookForm(false);
  }

  return (

    
    <>
      <Header></Header>
      <br></br>
      <div>
      <button onClick={()=>showBookForm(true)}>Add new book</button>
      </div>
      
      <br></br>
      {isBookFormOpen ? 
      <>
        <NewBookForm addBookHandle={addNewBook} cancelHandle={() => {showBookForm(false)}}></NewBookForm>
      </> : 
      <>
        <div>No. of books borrowed : {count}</div>
        <br></br>
        <BookList allBooks={currentBookList} passCounter={setCounter} deleteHandle={deleteBook}></BookList>
      </>
      }
    </>
  )
}

export default App;
