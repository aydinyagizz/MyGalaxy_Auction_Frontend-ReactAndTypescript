import React, { useEffect, useState } from 'react'
import { useGetVehiclesQuery } from '../../Api/VehicleApi'
import { vehicleModel } from '../../Interfaces/vehicleModel'
// css import işlemi
import './Styles/VehicleList.css'

function VehicleList() {

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
        {
          vehicles.map((vehicle, index) => {
            return (
              <div key={index} className='auction-card text-center'>
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
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default VehicleList