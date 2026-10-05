import { books} from './data/books'
import Header from './components/Header'
import BookList from './components/BookList'

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

function App() {
  const [count,setCounter] = useState<number>(initialBorrowCount);
  const [currentBookList,updateBookList] = useState(books);

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


  return (
    <>
      <Header></Header>
      <br></br>
      <div>No. of books borrowed : {count}</div>
      <br></br>
      <BookList allBooks={currentBookList} passCounter={setCounter} deleteHandle={deleteBook}></BookList>
    </>
  )
}

export default App;
