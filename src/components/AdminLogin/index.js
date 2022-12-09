import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adminLoginThunk, loginThunk} from "../../services/admin-thunk";
import {useNavigate} from "react-router";

const AdminLogin = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch();
    const {currentAdmin} = useSelector(state => state.adminData);
    const navigate = useNavigate()

    useEffect(() => {
        if(currentAdmin) {
            navigate("/admin")
        }
    },[currentAdmin,navigate])


    const handleLoginBtn = () => {
        const adminData = {username, password}
        console.log(adminData)
        dispatch(adminLoginThunk(adminData)).then(
            () => {
                console.log(currentAdmin)
                if(currentAdmin){
                    navigate("/admin")
                }
            }
        )



    }


    return(
        <>
            <div className="Auth-form-container">
                <div className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Admin Login</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                className="form-control mt-1"
                                placeholder="Enter username"
                                onChange={(e) =>setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) =>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button
                                type="submit"
                                className="btn btn-dark"
                                onClick={handleLoginBtn}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AdminLogin;