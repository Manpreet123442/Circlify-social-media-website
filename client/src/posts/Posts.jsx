import Post from '../post/Post';
import './posts.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/getPosts", {
                withCredentials : true
            });
            setData(response.data);
        } catch (error) {
            setError(error.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="posts">
            {error ? (
                <div className="error">Something went wrong: {error}</div>
            ) : isLoading ? (
                <div className="loading">Loading...</div>
            ) : (
                data.map((post) => <Post post={post} key={post.id} />)
            )}
        </div>
    );
}

export default Posts;
