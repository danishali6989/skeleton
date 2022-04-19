import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { login, } from '../../api/routes';
const authAdapter = createEntityAdapter();

const initialState = authAdapter.getInitialState({
    status: 'idle',
    token: '',
    username: null,
    pasw: '',
    chngpass: null,
    connectedId: null,
    deviceId: null,
    isAuthenticate: false,
    commenData: null,
    signupMergData: {}
});

export const doLogin = createAsyncThunk(
    'auth/Login',
    async (data) => {
        try {
            const response = await login(data);
            if (response) {

                return response;
            }
        } catch (err) {
            return err;
        }
    },
);

export const commentSignUpThunk = createAsyncThunk(
    'commen/SignUp',
    async (data) => {
        try {
            return data;
        } catch (err) {
            return err;
        }
    },
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken(state, action) {
            state.signupMergData = action.payload.token;
        },
        clearToken(state, action) {
            state.token = null;
        },

        getData(state, action) {
            state.data = action.payload.response

        },

    },
    extraReducers: {
        [doLogin.fulfilled]: (state, action) => {
            state.token = action.payload;
            state.isAuthenticate = true
        },
    },
});

export const {
    selectAll: selectAllProfiles,
    selectById: selectProfilesById,
} = authAdapter.getSelectors((state) => {
    return state.authReducer;
});


export const {
    getToken,
    clearToken,
    clearAuthReducer,
    getSignUpData
} = authSlice.actions;

export default authSlice.reducer;
