import React, { useEffect, useState } from 'react'
import { useGetVehiclesQuery } from '../../Api/VehicleApi';
import { vehicleModel } from '../../Interfaces/vehicleModel';
import VehicleList from './VehicleList';

function VehicleBase() {


    const { data, isLoading } = useGetVehiclesQuery(null)

    const [vehicles, setVehicleState] = useState<vehicleModel[]>([])

    useEffect(() => {
        if (data) {
            console.log(data);
            setVehicleState(data.result);
        }

    }, [data])


    return (
        <div className='container'>
            <div className='row'>
            <VehicleList vehicles = {vehicles} ></VehicleList>
            </div>
        </div>
    )
}

export default VehicleBase