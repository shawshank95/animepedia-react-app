import React, {useEffect} from "react";
import {findUser} from "../../services/user-service";
import {useState} from "react";
import {useNavigate} from "react-router";


const FollowItemList = ({follow}) => {

    const [user, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await findUser(follow.followingId)
            setUserData(userData);

        }

        getDataFromServer();

    }, [])
    return (

        <>{
            user ?
                <li
                    className="list-group-item"
                >
                    <h1 onClick={() => {
                        let path = `/profile/${user._id}`;
                        navigate(path);
                        // navigate("/profile/:user.id");
                     }
                    }>  {user.firstName} {user.lastName} </h1>
                </li> : null
        }


        </>
    )
}

export default FollowItemList