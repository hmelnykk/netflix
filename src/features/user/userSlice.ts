import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    surname: string;
    email: string;
}

const initialUser: UserState = {
    name: '',
    surname: '',
    email: '',
}

export const settingsSlice = createSlice({
    name: "user",
    initialState: initialUser,
    reducers: {
        
    }
})
