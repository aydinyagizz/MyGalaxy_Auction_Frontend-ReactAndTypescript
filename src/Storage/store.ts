import { configureStore } from "@reduxjs/toolkit";
import { vehicleReducer } from "./Redux/vehicleSlice";
import vehicleApi from "../Api/VehicleApi";


const store = configureStore({
    reducer:{
        vehicleStore : vehicleReducer,

        [vehicleApi.reducerPath] : vehicleApi.reducer


    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(vehicleApi.middleware)

    
})


//dışarıya açma işlemi
export type RootState = ReturnType<typeof store.getState>;
export default store;