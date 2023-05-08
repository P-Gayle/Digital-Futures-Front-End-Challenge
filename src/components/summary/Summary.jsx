import { useParams } from "react-router-dom";

const Summary = () => {
    const { id } = useParams();

    //to enable the use of special characters in the url so that the route can be accessed
    const decodedId = decodeURIComponent(id);

    return (
        <div className="summary">
            <h1>Summary - {decodedId} </h1>
            
            
        </div>

    );
}

export default Summary;