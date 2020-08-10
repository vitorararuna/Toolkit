import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const product_ = createSlice({
    name: 'product_',
    initialState,
    reducers: {
        setProducts(prevState, action) {
            const state = prevState;
            state = action.payload;
            return state;
        },
        cleanProducts(prevState, action) {
            const state = prevState;
            state = initialState;
            return state;
        }
    }
})

export const { setProducts, cleanProducts } = product_.actions;

export default product_.reducer;