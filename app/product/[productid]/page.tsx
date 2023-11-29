import Container from "@/app/Container";
import ProductDetails from "./productdetails";
import { products } from "@/utils/products";

interface IParams{
    productId?: string
}

const Product = ({params} : {params: IParams}) => {
    console.log('params', params);

    const product = products.find((item)=> item.id === params.productId)
    
    return ( 
    <div className="p-8">
        <Container>
            <ProductDetails product = {product}/>
        </Container>
    </div> 
    );
}
 
export default Product