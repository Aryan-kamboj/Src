import Card from "./Card";

function Tours({tours,removeTour}){
    return(
    <div className="container">
        <div>
            <h2 className="title"> Plan with Aryan</h2>
        </div>
        <div className="tours">
            {
                tours.map( (tours) => {
                    return <Card key={tours.id} {...tours} removeTour={removeTour}></Card>
                } )
                /* this tours.map fn will return <Card> </Card> as many tymes as there are elements in the array*/
            }
        </div>
    </div>);
}

export default Tours;