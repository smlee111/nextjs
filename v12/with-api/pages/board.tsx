import axios from "axios";
import {useState, useEffect} from "react";

type Post = {
    id: number;
    title: string;
    contents: string;
};

const Board = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get<Post[]>(
                    "http://127.0.0.1:8000/api/v1/board/test/"
                );
                setPosts(response.data);
            } catch (error) {
                console.error("API 호출 중 오류 발생:", error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>게시글 목록</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title} - {post.contents}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Board;
