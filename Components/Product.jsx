import "./product.css";
import Price from "./Price";
function Product({title,idx}){
  let oldPrices=["12495", "11900", "1599", "599"];
   let newPrices=["8999", "9199", "899", "278"];
    let description=[["8000 DPI","5 Programmable buttons"],["Intuitive surface"," designed for i pad pro"], ["Designed for ipad pro","Intuitive surface"], ["Wireless" , "Intuitive surface"]];
    return(
      
        <div className="Product">
            <h4>{title}</h4>
            <p> {description[idx][0]}</p>
             <p> {description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}
export default Product;