import { useState } from "react"
import type { Book } from "../types/book.ts"

const currentYear = new Date().getFullYear();
const minYear = 1500;

const initialFormData = {
    bookName : "",
    authorName : "",
    publishedYear : currentYear,
    description : "",
    maxReadTime : 0,
    price : 0

}

type bookFormProps = {
    addBookHandle : (book:Book)=> void;
    cancelHandle : ()=>void;
}

function NewBookForm({addBookHandle,cancelHandle}:bookFormProps) {
    const [formData, setFormData] = useState(initialFormData);
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
        console.log("Validation started!!");
        if (!formData.bookName.trim()) {
            validationErrors.bookName = "Book title required!!";
        }

        if (!formData.authorName.trim()) {
            validationErrors.authorName = "Author name required!!";
        }

        if ((formData.publishedYear < minYear) || (formData.publishedYear > currentYear)) {
            validationErrors.publishedYear = `Publication year must be between 1500 and ${currentYear}!!`;
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
        console.log("Errors :",validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setErrors({});
        setIsSaving(true);

        try {
            const newBook:Book = {
                id: Date.now(),
                name: formData.bookName,
                author : {
                    name: formData.authorName,
                },
                description : formData.description,
                year : formData.publishedYear,
                maxReadTime : formData.maxReadTime,
                price : formData.price,
                isBorrowed : false
            };
            
            await addBookHandle(newBook);
            setFormData(initialFormData);
        }
        catch (error) {
            console.log("Error :",error);
            setIsSaving(false);
        }
        finally {
            setIsSaving(false);
        }
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book Name : </label>

                <input
                    name="bookName"
                    value={formData.bookName}
                    onChange={handleChange}
                    
                />

                {errors.bookName && (
                    <span>  {errors.bookName}</span>
                )}
            </div>

            <div>
                <label>Author : </label>

                <input
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    
                />

                {errors.authorName && (
                    <span>  {errors.authorName}</span>
                )}
            </div>

            <div>
                <label>Description : </label>

                <input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    
                />

                {errors.description && (
                    <span>  {errors.description}</span>
                )}
            </div>

            <div>
                <label>Price : </label>

                <input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    
                />

                {errors.price && (
                    <span>  {errors.price}</span>
                )}
            </div>

            <div>
                <label>Max reading time (in hours) : </label>

                <input
                    name="maxReadTime"
                    type="number"
                    value={formData.maxReadTime}
                    onChange={handleChange}
                />

                {errors.maxReadTime && (
                    <span>  {errors.maxReadTime}</span>
                )}
            </div>

            <div>
                <label>Publication Year : </label>

                <input
                    name="publishedYear"
                    type="number"
                    value={formData.publishedYear}
                    onChange={handleChange}
                    // min={minYear}
                    // max={currentYear}
                    
                />

                {errors.publishedYear && (
                    <span>  {errors.publishedYear}</span>
                )}
            </div>

            {/* {serverError && (
                <p>{serverError}</p>
            )} */}

            <button
                type="submit"
                disabled={isSaving}
            >
                {isSaving ? "Saving..." : "Add Book"}
            </button>
            <span>              </span>
            <button onClick={cancelHandle} disabled={isSaving}>
                Cancel
            </button>
        </form>
    );

}

export default NewBookForm;