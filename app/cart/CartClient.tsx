'use client'

import { useCart } from "@/hook/useCart";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";

const CartClient = () => {
    const {cartProducts, handleClearCart} = useCart()

    if(!cartProducts || cartProducts.length === 0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl font-medium mt-10">
                    Keranjang anda kosong!
                </div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                    <span>
                        Ayo cari buku
                    </span>
                    </Link>
                </div>
            </div>
        )
    }
    return ( <div>
        <div className="font-medium m-10 items-center flex flex-col text-2xl">
        <h1>Keranjang Pinjam</h1>
        </div>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">BUKU</div>
        <div className="justify-self-center">KATEGORI</div>
        <div className="justify-self-center">DESKRIPSI</div>
        <div className="justify-self-end"></div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item)=>{
                return <ItemContent key={item.id} item={item}/>
            })}
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
            <div>
                <Button radius="full" color="danger" variant="shadow" onClick={() =>{
                    {handleClearCart()}

                }}>Kosongkan</Button>
            </div>
            <div className="flex flex-col gap-1 items-start">
                <div >
                    <Button radius="full" color="primary" variant="shadow" className="">Cetak Bukti Pinjam</Button>
                </div>
            </div>
        </div>
    </div> );
}
 
export default CartClient;