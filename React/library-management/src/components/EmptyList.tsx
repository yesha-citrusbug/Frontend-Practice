type EmptyStateProp = {
    message:string;
}

const EmptyList = ({message}:EmptyStateProp) => {
    return (
        <>
            <h3>{message}</h3>
        </>
    )
}

export default EmptyList;