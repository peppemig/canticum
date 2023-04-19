import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    error: null,
    isOpen: false
}

export const mobilePlayerOpenSlice = createSlice({
    name: 'mobilePlayerOpen',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setIsOpen: (state, {payload}) => {
            state.loading = false;
            state.error = false;
            state.isOpen = payload;
        },
        setError: (state, {payload}) => {
            state.error = payload;
            state.loading = false
        }
    }
})

export const {setError, setIsOpen, setLoading} = mobilePlayerOpenSlice.actions;
export default mobilePlayerOpenSlice.reducer;

export const mobilePlayerOpenSelector = (state) => state.isOpen