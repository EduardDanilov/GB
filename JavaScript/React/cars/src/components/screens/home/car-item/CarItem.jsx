import style from '../Home.module.css'

const CarItem = ({car}) => {
    return (
        <div key={car.id} className={style.item}>
            <div
                style={{
                    backgroundImage: `url(${car.image})`,
                }}
                className={style.backImage}
            />
            <div className={style.info}>
                <h2>
                    {car.name} {car.model}
                </h2>
                <p>
                    {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                    }).format(car.price)}
                </p>
                <button>Read more</button>
            </div>
        </div>
    );
};

export default CarItem;
