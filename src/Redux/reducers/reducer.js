const init_State={
    carts:[]
};

console.log(init_State.carts)


export const cartReducer=(state=init_State,action)=>{
    switch(action.type){
        case "Add_Cart":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
           case "Rmv_Cart":
            const data=state.carts.filter((el)=>el._id !== action.payload)
         return{
                  ...state,
                  carts:data
            }

            default :
            return state
    }
}