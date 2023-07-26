const initialState={
    quantity:0,
    price:parseFloat(0.00)
};

const changeNumber=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CART":return{
            ...state,
            quantity:state.quantity+action.payload,
            price:state.price+(199.00*action.payload)
        };
        case "DEC_CART":return {
            ...state,
            quantity:0,
            price:parseFloat(0.00)
        };
        default:return state;
    }
}

export default changeNumber;