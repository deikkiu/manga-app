import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light'
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			state.theme = action.payload === 'light' ? 'dark' : 'light';
		}
	}
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
