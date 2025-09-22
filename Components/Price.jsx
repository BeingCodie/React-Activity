import './price.css';
export default function Price({oldPrice, newPrice}){
    let option2 = {fontWeight: "bold"};
    let option1= {textDecoration: "line-through" }
    return (
    <div className="price">
    <span style={option1}>{oldPrice}</span>
    &nbsp; &nbsp; &nbsp;
    <span style={option2}>{newPrice}</span>
    </div>
    
    )
}