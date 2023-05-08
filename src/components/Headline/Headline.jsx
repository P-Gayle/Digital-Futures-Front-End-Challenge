import { Link } from 'react-router-dom';
import '../Headline/Headline.css';

const Headline = (props) => {

    return (
        
        <div className="newsCard">
            {/* <Link to={`/summary/${props.id}`}> */}
            <Link to={`/summary/${encodeURIComponent(props.id)}`}>
                <img src={props.img} alt="headline" data-testid="headline-image" className="headline-image" />
                
                <h4 data-testid="headline-title" className='headline-title'> 
                {props.headline} </h4>
            </Link>

        </div>
    )
}

export default Headline;

