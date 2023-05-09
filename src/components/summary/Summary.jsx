
const Summary = (props) => {
    
    return (
        <div className="summary">
            <img src={props.img} alt="headline" className="article-image" />
            <h4 className='article-title'>{props.headline}</h4>
            <p className="article-body">{props.bodyText}</p>        
        </div>
    );
}

export default Summary;