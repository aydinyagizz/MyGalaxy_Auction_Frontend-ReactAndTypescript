import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const vehicleApi = createApi({
    reducerPath : "vehicleApi",
    baseQuery : fetchBaseQuery({
        //bu api hangi base url'den istek alacak yani referans alacak bunu belirtiyoruz.
        baseUrl:"https://localhost:7204/api/Vehicle/"
    }),
    endpoints : (builder) => ({
        //get işlemlerinde query kullanılır. create, update, delete işlemlerinde mutation kullanılır
        getVehicles : builder.query({
            query : () => ({
                url:"getVehicles"
            })   
        }),

    })
})


export const {useGetVehiclesQuery} = vehicleApi
export default vehicleApi