import { useState } from "react"
import { books} from '../data/books'
import Book from "./Book.tsx"

const currentYear = new Date().getFullYear()

const initialFormData = {
    bookName : "",
    authorName : "",
    publishedYear : currentYear,
    description : "",
    maxReadTime : 0,
    price : 0

}

type BookProps = {
    bookName: string;
    authorName: string;
    // year : number,
    description : string;
    maxReadTime: number;
    price: number;
    passCounter : (count:number) => void;
    deleteHandle : (id:number) => void;
}

const createNewBook = async ({bookName,authorName,description,maxReadTime,price,passCounter,deleteHandle}:BookProps) => {
    const book_id = books.length + 1;

    const newBookData = {
        id: book_id, 
        name: bookName, 
        description: description,
        author: {
            name: authorName,
        },
        maxReadTime: maxReadTime, 
        price: price,
        isBorrowed: false
    };
    
    <Book key={book_id} {...newBookData} setCounter={passCounter} deleteBook={deleteHandle}></Book>

}

function newBookForm() {
    const [formData, setForrmData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousFormData) => ({
            ...previousFormData,
            [name]: value
        }));

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: ""
        }));
    };

    const validateForm = () => {
        const validationErrors = {};
    
        if (!formData.bookName.trim()) {
            validationErrors.bookName = "Book title required!!";
        }

        if (!formData.authorName.trim()) {
            validationErrors.authorName = "Author name required!!";
        }

        if ((formData.publishedYear < 1500) || (formData.publishedYear > currentYear)) {
            validationErrors.publishedYear = "Publication year must be between 1500 and present year!!";
        }

        if (!formData.price) {
            validationErrors.price = "Book price required!!";
        }
        else if (formData.price < 0) {
            validationErrors.price = "Price cannot be negative!!";
        }
        else if (formData.price == 0) {
            validationErrors.price = "Price cannot be zero!!";
        }

        if (formData.maxReadTime < 0) {
            validationErrors.maxReadTime = "Read time cannot be negative!!";
        }
        else if (formData.maxReadTime == 0) {
            validationErrors.maxReadTime = "Read time cannot be zero!!";
        }

        return validationErrors;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSaving(true);
    }

    try {

        const data = {...formData,passCounter:"",deleteHandle:""}
        await createNewBook({...data});

        setForrmData(initialFormData);
    }
    finally {
        setIsSaving(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book Name</label>

                <input
                    name="bookName"
                    value={formData.bookName}
                    onChange={handleChange}
                />

                {errors.bookName && (
                    <p>{errors.bookName}</p>
                )}
            </div>

            <div>
                <label>Author</label>

                <input
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                />

                {errors.authorName && (
                    <p>{errors.authorName}</p>
                )}
            </div>

            <div>
                <label>Price</label>

                <input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />

                {errors.price && (
                    <p>{errors.price}</p>
                )}
            </div>

            <div>
                <label>Max reading time</label>

                <input
                    name="maxReadTime"
                    value={formData.maxReadTime}
                    onChange={handleChange}
                />

                {errors.maxReadTime && (
                    <p>{errors.maxReadTime}</p>
                )}
            </div>

            {/* {serverError && (
                <p>{serverError}</p>
            )} */}

            <button
                type="submit"
                disabled={isSaving}
            >
                {isSaving ? "Saving..." : "Create Account"}
            </button>
        </form>
    );


}


