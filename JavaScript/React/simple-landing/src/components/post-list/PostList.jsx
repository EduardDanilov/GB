import styles from './PostList.module.css';
import Post from "../post/Post";

const PostList = ({posts, remove}) => {
    return (
        <div>
            <h1>Список постов</h1>
            <div className={styles.postscontainer}>
                {posts.map((post, index) => (
                    <Post number={index+1} post={post} key={post.id} remove={remove}/>
                ))}
            </div>
        </div>
    );
};

export default PostList;
