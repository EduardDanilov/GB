import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState({
        name: '',
        model: '',
        price: 0,
        image: ''
    });

    const addCar = event => {
        event.preventDefault();
        
        setCars(prev => [{id: prev.length + 1, ...data}, ...prev])

        setData({
            name: '',
            model: '',
            price: 0,
            image: ''
        })
    };

    return (
        <form className={styles.form}>
            <input
                type="text"
                placeholder="Марка"
                onChange={(e) => setData(prev => ({...prev, name: e.target.value}))}
                value={data.name}
            />
            <input
                type="text"
                placeholder="Модель"
                onChange={(e) => setData(prev => ({...prev, model: e.target.value}))}
                value={data.model}
            />
            <input
                type="number"
                placeholder="Цена"
                onChange={(e) => setData(prev => ({...prev, price: e.target.value}))}
                value={data.price}
            />
            <input
                type="text"
                placeholder="Ссылка на изображение"
                onChange={(e) => setData(prev => ({...prev, image: e.target.value}))}
                value={data.image}
            />
            <button onClick={(event) => addCar(event)} className={styles.btn}>
                Добавить
            </button>
        </form>
    );
};

export default CreateCarForm;
