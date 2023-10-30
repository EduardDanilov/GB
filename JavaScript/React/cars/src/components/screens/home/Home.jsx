import { useState } from "react";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./cars.data.js";
import CreateCarForm from "./create-car-form/CreateCarForm";

const Home = () => {
    const [cars, setCars] = useState(carsData)
    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars = {setCars}/>
            <div>
                {cars.length ? (
                    cars.map((car) => <CarItem key={car.id} car={car} />)
                ) : (
                    <p>There are no cars</p>
                )}
            </div>
        </div>
    );
};

export default Home;
