import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';




export default function Login() {

  const [userLogin, setUserLogin] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    if (userLogin.email.trim() === '' || userLogin.password.trim() === '') {
      setErrorMessage('email và mật khẩu không được để trống');
      return
    }
    axios.get(`http://localhost:8000/users?email=${userLogin.email}&password=${userLogin.password}`)
      .then((res) => {
        console.log('res.data>>>>>>>', res.data);
        //đăng nhập thành công
        if (res.data[0].permission === 1) {
          localStorage.setItem("admin", JSON.stringify(res.data[0]));
          navigate("/admin");
        } else {
          localStorage.setItem("users", JSON.stringify(res.data[0]));
          navigate("/");
        }
      });
  };
  //LOGIN GOOGLE API
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title"> Login</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
                  <input type="text" className="form-control" value={userLogin.email} onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
                  } />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" i=""
                    value={userLogin.password} onChange={(e) =>
                      setUserLogin({ ...userLogin, password: e.target.value })
                    } />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* Error Message */}
                    <p className="text-danger text-error">{errorMessage}</p>
                  </div>
                  <div className="col-lg-6 login-btm login-button" style={{display:"flex",gap:"10px"}}>
                    <button type="submit" className="btn btn-outline-primary" onClick={handleLogin} >
                      Login
                    </button>
                    <button type="submit" onClick={() => login()} className="btn btn-outline-primary">Đăng nhập bằng Google </button>
                    <Link className="btn btn-outline-primary" to={"/register"}>Đăng kí</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>

  )
}
