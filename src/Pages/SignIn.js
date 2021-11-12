import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  return (
    <div className="sign-in">
        <div className="sign-in__introduce">
            <h2 className="introduce__tittle">
                Welcome to our Library LibrarIse !
            </h2>
            <p className="introduce__description">
                We arrange access to the world of information – whether online, multimedia or in print – and the training and support to exploit it to the full. Come and make the most of us!
            </p>
        </div>

        <div className="sign-in__form">
            <header className="form__header">
                <a href="/" className="form__header-account">Đã có tài khoản ?</a>
                <button className="form__btn-sign-up">Đăng ký</button>
            </header>

            <div action="" className="form__infor">
                <h3 className="form__infor-title">Hello! Welcome back.</h3>
                <p className="form__infor-description">Log in with your data that you entered during Your registration</p>
                <input type="text" className="form__infor-input" placeholder="Tên người dùng" />
                <input type="password" className="form__infor-input" placeholder="Mật khẩu" />
                <a href="/" className="form__infor-forgot-password">Quên mật khẩu</a>
                <button className="form__btn-sign-in"><Link to="thuvien/">Đăng nhập</Link></button>
            </div>
        </div>
    </div>
  )
}

export default SignIn
