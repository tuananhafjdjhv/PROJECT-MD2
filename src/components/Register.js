
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { act_post_user } from "../redux/action";
const initUser = {
  fullname: "",
  email: "",
  password: "",
  rePassword: "",
};

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(initUser);
  const [errMessage, setErrMessage] = useState(initUser);
  const [isExistEmail, setIsExistEmail] = useState(false);
  console.log(errMessage);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
    validateUser(name, value);
  };
  const validateUser = (name, value) => {
    if (name === "fullname") {
      if (value.trim() === "") {
        setErrMessage({ ...errMessage, [name]: "không được để trống" });
      } else if (value.trim().length <= 4) {
        setErrMessage({
          ...errMessage,
          [name]: "Tên chưa đầy đủ",
        });
      } else {
        setErrMessage({ ...errMessage, [name]: "" });
      }
    }
    if (name === "email") {
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.trim() === "") {
        setErrMessage({ ...errMessage, [name]: "không được để trống" });
      } else if (!pattern.test(value)) {
        setErrMessage({ ...errMessage, [name]: "Không đúng định dạng" });
      } else {
        checkEmailExist(value).then((res) => {
          if (res) {
            setErrMessage({ ...errMessage, [name]: "Email đã tồn tại" });
          } else {
            setErrMessage({ ...errMessage, [name]: "" });
          }
        });
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        setErrMessage({ ...errMessage, [name]: "không được để trống" });
      } else if (value.trim().length < 6) {
        setErrMessage({
          ...errMessage,
          [name]: "Mật khẩu phải ít nhất 6 kí tự",
        });
      } else {
        setErrMessage({ ...errMessage, [name]: "" });
      }
    }
    if (name === "rePassword") {
      if (newUser.password !== value) {
        setErrMessage({ ...errMessage, [name]: "Mật khẩu không trùng khớp" });
      } else {
        setErrMessage({ ...errMessage, [name]: "" });
      }
    }
  };

  const checkEmailExist = (email) => {
    return axios
      .get(`http://localhost:8000/users?email=${email}`)
      .then((res) => res.data.length > 0)

      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    let condition_1 =
      newUser.fullname !== "" &&
      newUser.email !== "" &&
      newUser.password !== "" &&
      newUser.rePassword !== "";
    let condition_2 =
      errMessage.fullname === "" &&
      errMessage.email === "" &&
      errMessage.password === "" &&
      errMessage.rePassword === "";

    console.log(condition_1, condition_2);
    if (condition_1 && condition_2) {
      axios
        .post("http://localhost:8000/users", newUser)
        .then(() => {
          dispatch(act_post_user(newUser));
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
    e.preventDefault();
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        name="fullname"
                        value={newUser.fullname}
                        onChange={handleChange}
                      />
                      <p className="text-danger text-error">{errMessage.fullname}</p>
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                      />
                      <p className="text-danger text-error">{errMessage.email}</p>
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                      />
                      <p className="text-danger text-error">{errMessage.password}</p>
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        name="rePassword"
                        value={newUser.rePassword}
                        onChange={handleChange}
                      />
                      <p className="text-danger text-error">{errMessage.rePassword}</p>
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                      <p>
                        Bạn đã có tài khoản?&nbsp;
                        <Link to={"/login"}>Đăng nhập</Link>
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
