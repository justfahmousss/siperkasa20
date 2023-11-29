'use client'

import Link from "next/link";
import { CartProductType } from "../product/[productid]/productdetails";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { useCart } from "@/hook/useCart";

interface ItemContentProps{
    item:CartProductType
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
    const {handleRemoveProductFromCart} = useCart()
    return ( <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
        <div className="
        col-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-[70px] aspect-square">
                    <Image src={item.selectedImage.image} alt={item.name} fill className="object-contain"/>
                </div>
            </Link>
            <div className="flex flex-col justify-center">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}
                </Link>
            </div>
        </div>
        <div className="justify-self-center">{item.category}</div>
        <div className="justify-self-center text-center">{truncateText(item.description)}</div>
        <div className="justify-self-end">
        <Button size="sm" color="danger" variant="light" startContent={<FaTrash/>} onClick={() =>
            handleRemoveProductFromCart(item)
        }>
        Delete
      </Button>
       </div>
    </div> );
}
 
export default ItemContent;