'use client'

import ProductImage from "@/components/products/ProductImage";
import { useCart } from "@/hook/useCart";
import { Rating } from "@mui/material";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {MdCheckCircle} from "react-icons/md"


interface ProductDetailsProps{
    product:any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImage: SelectedImgType
    price: number
}

export type SelectedImgType ={
    color: string
    colorCode: string
    image: string
}

const Horizontal = () =>{
    return <hr className="w-[30%] my-2"/>
}

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
    
    const {handleAddProductToCart, cartProducts} = useCart()
    const [isProductInCart, setIsProductInCart] = useState(false)
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImage: product.images,
        price: product.price
    })
    const router = useRouter()

    useEffect(() => {
      setIsProductInCart(false)

      if (cartProducts) {
        const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
      
        if (existingIndex > -1) {
            setIsProductInCart(true)
        }
    }
    }, [cartProducts, product.id])
    

    const ratingBuku = 
    product.reviews.reduce((acc: number,
         item: any) => item.rating + acc, 0) / product.reviews.length;
         return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">
                    {product.name}
                </h2>
                <div className="flex items-center gap-2">
                    <Rating value={ratingBuku} readOnly/>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">{product.description}</div>
                <Horizontal/>
                <div>
                    <span className="font-semibold">Cateogy:
                    </span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">Brand:
                    </span> {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>{product.inStock ? 'In stock' : 'Out of stock'}</div>
                <Horizontal/>
                {isProductInCart ? 
                <>
                <p className="mb-2 text-slate-500 flex items-center gap-1">
                    <MdCheckCircle className="text-teal-400" size={20}/>
                    <span>
                        Product added to cart
                    </span>
                </p>
                <div>
                    <Button radius="full" color="primary" variant="ghost" size="lg" onClick={() =>{
                        router.push("/cart")
                    }}>View cart</Button>
                </div>
                </> : <>
                <div className="mt-4">
                <Button radius="full" color="primary" variant="shadow" size="lg" className="text-white font-medium flex shadow-md" onClick={() => handleAddProductToCart(cartProduct)}>Pinjam Buku</Button>
                </div>
                </>}
                
            </div>
        </div>
    );
}
 
export default ProductDetails;