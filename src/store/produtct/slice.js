import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [] };

const product_ = createSlice({
    name: 'product_',
    initialState,
    reducers: {
        setProductsRequest: (state) => {
            return{
                ...state
            };
        },
        setProducts(prevState, action) {
            const state = prevState;
            state.products = action.payload;
            return state;
        },
        cleanProducts(prevState, action) {
            let state = prevState;
            state = "";
            console.log("zerei");
            return state;
        }
    }
})


export const { setProducts, cleanProducts, setProductsRequest } = product_.actions;

export default product_.reducer;