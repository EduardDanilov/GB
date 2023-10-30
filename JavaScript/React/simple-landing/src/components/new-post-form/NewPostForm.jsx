import React, {useState} from "react";
import styles from './NewPostForm.module.css';
import InputArea from "../UI/input/InputArea";
import AddTaskButton from "../UI/buttons/AddTaskButton";

const NewPostForm = ({setPosts}) => {
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");

    const [note, setNote] = useState({title:'', body:''})

    const addNewNote = (e) => {
        e.preventDefault(); 
        setPosts((posts) => [...posts, {...note, id: Date.now()}]);
        setNote({title:'', body:''})

    };
    return (
        <form className={styles.block}>
            <InputArea
                value={note.title}
                onChange={(e) => setNote({...note, title: e.target.value})}
                type="text"
                placeholder="Название заметки"
            />
            <InputArea
                value={note.body}
                onChange={(e) => setNote({...note, body: e.target.value})}
                type="text"
                placeholder="Содержание"
            />
            <AddTaskButton onClick={addNewNote}>Добавить</AddTaskButton>
        </form>
    );
};

export default NewPostForm;
