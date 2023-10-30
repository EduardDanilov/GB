import CarItem from "../home/car-item/CarItem";

const CarDetail = () => {
    return (
        <div>
            <div>CarDetail</div>
            <CarItem key={car.id} car={car} />
        </div>
    );
};

export default CarDetail;
