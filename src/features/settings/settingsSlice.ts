import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
    theme: string;
}

const initialSettings: SettingsState = {
    theme: 'dark',

}

export const settingsSlice = createSlice({
    name: "settings",
    initialState: initialSettings,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})
