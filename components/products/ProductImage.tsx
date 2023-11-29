'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productid]/productdetails";
import Image from "next/image";

interface ProductImageProps{
    cartProduct : CartProductType,
    product: any,
}

const ProductImage:React.FC<ProductImageProps> = (
    {cartProduct,product}
) => {
    return ( 
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[500px] sm:min-h-[400px]">
        {/* <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]" >
            {product.images.map((image: SelectedImgType)=>{
                return <div key={image.color}>
                    <Image src={image.image} alt={image.color} fill className="object-contain"/>
                </div>
            })}
        </div> */}
        <div className="col-span-5 relative aspect-square">
            <Image fill src={cartProduct.selectedImage.image} alt={cartProduct.name} className="w-full h-full object-contain max-h-[500px] min-h-[500px] sm:min-h-[400px]"/>
        </div>
    </div> );
}
 
export default ProductImage;