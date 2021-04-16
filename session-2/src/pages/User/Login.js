import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/user";

const Login = ({ setOpen }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="login-wrap">
                <h1>Login  Page</h1>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={() =>
                        dispatch(
                            login({
                                email: "muhammad.nuh@sirclo.com",
                                fullname: "Inu Aimar"
                            })
                        )
                    }
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit
                    }) => (
                        <form onSubmit={() => handleSubmit()}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                placeholder="email"
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                placeholder="password"
                            />
                            <button type="submit">Login</button>
                            <br />
                            <p>Don't have account?
            <a onClick={() => setOpen(true)} className="register-link">
                                    Register
            </a>
                            </p>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Login;
