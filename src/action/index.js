export const addItem=(num)=>{
    return {
        type:"ADD_CART",
        payload:parseInt(num)
    }
}

export const removeItem=()=>{
    return {
        type:"DEC_CART"
    }
}