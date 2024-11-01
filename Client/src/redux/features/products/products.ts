import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

export interface Product {
    code: string,
    productName: string,
    qty: string,
    price: string,
    cost: string | undefined,
}

export interface ProductList {
    products: Product[]
}

const initialState: ProductList = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        updateProduct: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    }
});

export const {
    addProduct,
    updateProduct
} = productsSlice.actions;

export default productsSlice.reducer;