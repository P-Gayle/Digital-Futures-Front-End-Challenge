import '../Headline/Headline.css';

const Headline = (props) => {

    return (
        
        <div className="newsCard">
           
            <img src={props.img} alt="headline" data-testid="headline-image" className="headline-image" />
            
            <h4 data-testid="headline-title" className='headline-title'> 
            {props.headline} </h4>
     

        </div>
    )
}

export default Headline;

