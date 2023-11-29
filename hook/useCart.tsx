import { CartProductType } from "@/app/product/[productid]/productdetails";
import { products } from "@/utils/products";
// import { product } from "@/utils/bukudetail";
import { Modal } from "@nextui-org/modal";
import { createContext,useState, useContext, useCallback, useEffect } from "react";
import {toast} from 'react-hot-toast'

type CartContextType = {
    cartTotalQty: number
    cartProducts: CartProductType[] | null
    handleAddProductToCart: (product: CartProductType) => void
    handleRemoveProductFromCart: (product: CartProductType) => void
    handleClearCart : () => void
}

export const CartContext  = createContext <CartContextType | null>(null)

interface Props{
    [propName: string]: any
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    
    useEffect(() => {
      const cartItems: any = localStorage.getItem('siperkasaCartItems')
      const cProducts: CartProductType[] | null = JSON.parse(cartItems)
      
      setCartProducts(cProducts)
    }, [])
    

    const handleAddProductToCart = useCallback((product: CartProductType) =>{
        setCartProducts((prev) =>{
            let updatedCart;

            if (prev) {
                updatedCart = [...prev, product]
            }else{
                updatedCart = [product]
            }
            toast.success("Buku ditambahkan ke keranjang")
            localStorage.setItem('siperkasaCartItems', JSON.stringify(updatedCart))
            return updatedCart
        })
    },
    [])

    const handleClearCart = useCallback(()=>{
        setCartProducts(null)
        toast.success("Keranjang dikosongkan")
        localStorage.setItem('siperkasaCartItems', JSON.stringify(null))
    }, [cartProducts])

    const handleRemoveProductFromCart = useCallback(( product: CartProductType) =>{
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)
            toast.success("Buku dihapus")
            localStorage.setItem('siperkasaCartItems', JSON.stringify(filteredProducts))
            
        }
       
    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleClearCart
    }

    return <CartContext.Provider value={value} {...props}/>

}

export const useCart =() =>{
    const context = useContext(CartContext)

    if(context == null){
    throw new Error("useCart must be used within a CartContextProvider")
    }

    return context
}