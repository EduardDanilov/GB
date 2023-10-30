import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={styles.postContainer}>
            <div className={styles.postContent}>
                <h3>{props.number}. {props.post.title}</h3>
                <p>
                    {props.post.body}
                </p>
            </div>
                <button className={styles.delBtn} onClick={() => props.remove(props.post)}>Удалить</button>
        </div>
    );
};

export default Post;
