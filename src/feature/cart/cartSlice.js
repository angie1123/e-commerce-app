import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //check if item already in the cart
      const itemIndex = state.findIndex(
      //action.payload.id access the item.id
        (item)=>item.id === action.payload.id
      )

      if (itemIndex >= 0){
        //if item exist in the cart,increment the amount
        state[itemIndex].amount += 1
      } else {
        
        const newProduct = { ...action.payload, amount: 1 }
        console.log(newProduct)
        state.push(newProduct)
      }
    },

    deleteItem: (state, action) => {
      //action.payload directly pass the item.id into payload
      return state.filter((item)=>item.id !== action.payload)
    },

    incrementItem: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state[itemIndex].amount += 1;
      }
    },

    decrementItem: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0 && state[itemIndex].amount > 1) {
        state[itemIndex].amount -= 1;
      }
    }



  

  }
})

/*
Delete, Increment, Decrement Actions: Use the id as the payload because these actions only need to identify the item in the state.
Add Action: Use the entire item object as the payload because you need all the item details to add it to the cart.

*/

//actions add action creator to action object
export const { addToCart,deleteItem ,incrementItem,decrementItem} = cartSlice.actions
export default cartSlice.reducer
//createSlice come with a property called reducer
//reducer is pure function handle the state based on user dispatch action
//reducer(state,action) accepts two parameter