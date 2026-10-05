// import EmptyList from "./EmptyList.tsx";

type BookDetailsProps = {
    description: string;
    author? : {
        name: string;
    };
    maxReadTime: number;
    price: number;
}



const BookDetails = ({
    description,author,maxReadTime,price
}: BookDetailsProps) => {

    // if (allBooks.length === 0) {
    //     return <EmptyList message="No details found."></EmptyList>
    // }

    return (
        <div>
            <div>{description}</div>
            <h3>Author : {author?.name ?? "Unknown author"}</h3>
            <h4>Max reading time(hours) : {maxReadTime ?? 0}</h4>
            <h4>Price : {price < 0 ? Math.abs(price) : price}</h4>
        </div>
    );
};

export default BookDetails;