import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";

const UserComp = () => {
    const data = useSelector((state) => state.user);
    const [openRegister, setOpen] = React.useState(false);
    return (
        <>
            <div className="acount-container">
                {data.user == null ? (
                    openRegister ? (
                        <Register setOpen={setOpen} />
                    ) : (
                        <Login setOpen={setOpen} />
                    )
                ) : (
                    <Dashboard />
                )}
            </div>
        </>
    );
};

export default UserComp;
