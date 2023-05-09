import '../summary/summary.css'
import { useEffect } from 'react';

const Summary = (props) => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
    return (
        <div className="summary">
            <img src={props.img} alt="headline" className="article-image" />
            <h2 className='article-title'>{props.headline}</h2>
            <p className="article-body">{props.bodyText}</p>        
        </div>
    );
}

export default Summary;