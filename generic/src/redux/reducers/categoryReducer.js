import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { getallCategory } from '../../api/category';
const categoryAdapter = createEntityAdapter();

const initialState = categoryAdapter.getInitialState({
    stepper: null
})

export const getAllCategoryThunk = createAsyncThunk(
    'get/category',
    async () => {
        try {
            const response = await getallCategory()
            if (response) {
                return response
            }

        } catch (err) {
            return err
        }
    }
)
export const ListCategoryThunk = createAsyncThunk(
    'list/radio',
    async () => {
        try {
            const response = await listingCatrgory()

            if (response) {
                return response
            }

        } catch (err) {
            return err
        }
    }
)

export const get_all_By_categoryId_Thunk = createAsyncThunk(
    'getBy/categoryId',
    async (id) => {
        try {
            const response = await getallPostbyCategoryId(id)
            if (response) {
                return response
            }

        } catch (err) {
            return err
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        selectStepThunk(state, action) {
            state.stepper = action.payload
        },
        prepare: event => ({ payload: event || '' })
    },
    extraReducers: {
        [getAllCategoryThunk.fulfilled]: (state, action) => {
            state.category = action.payload;
        }
    },
});
export const {
    selectStepThunk: selectStepThunk
} = categorySlice.actions
export default categorySlice.reducer;