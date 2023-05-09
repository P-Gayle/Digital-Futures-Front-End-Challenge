import '../summary/summary.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Summary = (props) => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
    return (
        <div className="summary">
            <img src={props.img} alt="headline" className="article-image" />          
            <Link to={props.link} className="article-link">
                <h2 className='article-title'>{props.headline}</h2>
            </Link>
            <p className="article-body">{props.bodyText}</p>        
        </div>
    );
}

export default Summary;