import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Posts = () => {
    const posts = useLoaderData()

    const naviget = useNavigate()

    const hendleNaviget = (id) => {
        naviget(`/post/${id}`)
    }

    return (
        <div>
            <h2>All Posts</h2>

            <div className="card_container">
                {
                    posts.map(post => (
                        <div key={post.id} className="card">
                            <h2>User ID: {post.id}</h2>
                            <hr />
                            <ul>
                                <li>
                                    Post Title: {post.title}
                                </li>
                            </ul>
                            <Link to={`/post/${post.id}`}>
                            <button>Details</button>
                            </Link>

                            <button onClick={() => hendleNaviget(post.id)}>Naviget Deatais</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Posts;