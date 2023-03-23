import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        main_course: 'main_course',
        vegetable: 'vegetable',
        side_dish: 'side_dish',
        dessert: 'dessert',
    },
    reducers: {
        chooseMain_Course: (state, action) => { state.main_course = action.payload },
        chooseVegetable: (state, action) => { state.vegetable = action.payload },
        chooseSide_Dish: (state, action) => { state.side_dish = action.payload },
        chooseDessert: (state, action) => { state.dessert = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMain_Course, chooseVegetable, chooseSide_Dish, chooseDessert } = rootSlice.actions
