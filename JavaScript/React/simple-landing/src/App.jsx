import { useState } from "react";
import Counter from "./components/counter/Counter";
import PostList from "./components/post-list/PostList";
import NewPostForm from "./components/new-post-form/NewPostForm";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Learning React 1", body: "Description 1" },
        { id: 2, title: "Learning React 2", body: "Description 2" },
        { id: 3, title: "Learning React 3", body: "Description 3" },
    ]);

    const removePost = (post) => {
        setPosts(posts.filter((el) => el.id !== post.id));
    };

    return (
        <>
            <Counter />
            <NewPostForm setPosts={setPosts} />
            {posts.length ? (
                <PostList posts={posts} remove={removePost} />
            ) : (
                <h2 style={{textAlign:'center'}}>Заметок нет</h2>
            )}
        </>
    );
}
export default App;
