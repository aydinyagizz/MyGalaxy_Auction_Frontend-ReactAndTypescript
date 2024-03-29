import React, { useEffect, useState } from 'react'
import { useGetVehiclesQuery } from '../../Api/VehicleApi'
import { vehicleModel } from '../../Interfaces/vehicleModel'
// css import işlemi
import './Styles/VehicleList.css'
import Circle from './Circle'

function VehicleList(props:{vehicles: vehicleModel[]} ) {
//   interface VehicleListProps {
//     vehicles: vehicleModel[];
// }

// const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {

  return (
<>
    {
      props.vehicles.map((vehicle:any, index:any) => {
        return (
          <div className='col' key={index}>
            <div className='auction-card text-center'>
              <div className='card-image text-center'>
                <img src={vehicle.image} alt="" />
              </div>
              <div className='card-details text-center'>
                <h2>{vehicle.brandAndModel}</h2>
                <p><strong>Year:</strong> {vehicle.manufacturingYear}</p>
                <p><strong>Color</strong> {vehicle.color} </p>
                <p><strong>Current Bid:</strong> ${vehicle.price} </p>
                <p><strong>End Time:</strong> {vehicle.endTime} </p>
              </div>
              <div>
                <button className='btn btn-danger'>Detail</button>

              </div>
              <Circle vehicle={vehicle}></Circle>
            </div>
          </div>
        )
      })
    }
</>
  );
}

export default VehicleList