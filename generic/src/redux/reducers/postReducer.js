import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { getAllFeed} from '../../api/routes';
const postAdapter = createEntityAdapter();

const initialState=postAdapter.getInitialState({
    addPost:null,
    getFeed:[],
    })

export const getAllFeedThunk = createAsyncThunk(
    'get/feed',
    async (id) => {
        try {
            const response = await getAllFeed(id)
            if (response) {
                return response
            }
        } catch (err) {
            return err
        }
    }
)

const addPostSlice = createSlice({
    name: 'postslice',
    initialState,
    reducers: {
        toggleHomeCard(state, action) {
            state.showCard = action.payload
        },
        EditMsgToggle(state,action){
            state.edittoggle=action.payload

        },
        toggleSideBar(state, action){
            state.toggleBar=action.payload
        },
        loadPageApi(state,action){
            state.load=action.payload
        }

    },
    extraReducers: {
        [getAllFeedThunk.fulfilled]: (state, action) => {
            state.getFeed = action.payload;
        }
      },

});

export const {
    toggleHomeCard: toggleHomeCard,
    EditMsgToggle:EditMsgToggle,
    toggleSideBar:toggleSideBar,
    loadPageApi:loadPageApi
} = addPostSlice.actions


















export default addPostSlice.reducer;
