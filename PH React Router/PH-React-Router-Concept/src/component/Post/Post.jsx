import { useLoaderData, useNavigate } from "react-router-dom";

const Post = () => {
    const post = useLoaderData()
    const {id, title, body} = post;

    const naviget = useNavigate()

    const handleGoBack = () =>{
        naviget(-1)
    }

    return (
        <div>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h5>{body}</h5>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default Post;