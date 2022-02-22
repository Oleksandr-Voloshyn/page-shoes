import { createSlice } from "@reduxjs/toolkit";




const womenShoesSlice = createSlice({
    name: 'shoes',
    initialState: {
        shoes: null,
        basket: []
    },
    reducers: {
        addShoes(state, action) {
            state.shoes = action.payload
        },
        addInBasket(state, action) {
            state.basket.push(action.payload)
        },

        deleteWithBasket(state, action) {
            state.basket.splice(action.payload, 1)
        }
    }
})

export const { addShoes, addInBasket, deleteWithBasket } = womenShoesSlice.actions

export default womenShoesSlice.reducer;