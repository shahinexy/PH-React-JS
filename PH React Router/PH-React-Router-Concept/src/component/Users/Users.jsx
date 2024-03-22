import { useLoaderData } from "react-router-dom";
import './Users.css'

const Users = () => {

    const user = useLoaderData()
    return (
        <div>
            <h2>Our users</h2>
            <h3>Users Length: {user.length}</h3>
            <div className="card_container">
                {
                    user.map(user => (
                        <div key={user.id} className="card">
                            <h2>name</h2>
                            <hr />
                            <ul>
                                <li>
                                    Phone: {user.phone}
                                </li>
                                <li>
                                    Email: {user.email}
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;