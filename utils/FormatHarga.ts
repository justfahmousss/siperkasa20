export const FormatHarga = (amount: number) =>{
    return Intl.NumberFormat(
        'id-ID',{
            style:'currency',
            currency:'IDR'
        }
    ).format(amount)

}