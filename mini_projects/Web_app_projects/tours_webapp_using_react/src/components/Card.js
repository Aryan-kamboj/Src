import {useState} from "react"

function Card({id,image,info,price,name,removeTour}){
    const [readmore,setRedmore] = useState (false);
    const description = readmore ? info : `${info.substring(0,200)}....`
    function readmoreHandler(){
        setRedmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h3 className="tour-price">{price}</h3>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span classname="read-more" onClick={readmoreHandler}>
                        {readmore? ` show less`:`read more`}

                    </span>
                </div>
            </div>
            <button onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        </div>
    )
}
export default Card;