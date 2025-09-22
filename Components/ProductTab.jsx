import Product from "./Product.jsx";
import Price from "./Price.jsx";
import "./ProductTab.css";
function ProductTab(){
    return (
         <>
     <Product title="Logitech MX Master 3S" idx={0} />
     <Product title="Apple Pencil(2nd Gen)"  idx={1} />
     <Product title="Zebronics Keyboard"  idx={2} />
     <Product title="Portronics Toad 23" idx={3} />
    </>
    );
}

export default ProductTab;