export const Add=(item)=>{
    return{
        type:"Add_Cart",
        payload:item
    }
}


//remove appointment

export const Dlt=(id)=>{
    return{
        type:"Rmv_Cart",
        payload:id
    }
}