import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  return (
    <div class="sign-in">
        <div class="sign-in__introduce">
            <h2 class="introduce__tittle">
                Welcome to our Library LibrarIse !
            </h2>
            <p class="introduce__description">
                We arrange access to the world of information – whether online, multimedia or in print – and the training and support to exploit it to the full. Come and make the most of us!
            </p>
        </div>

        <div class="sign-in__form">
            <header class="form__header">
                <a href="" class="form__header-account">Đã có tài khoản ?</a>
                <button class="form__btn-sign-up">Đăng ký</button>
            </header>

            <div action="" class="form__infor">
                <h3 class="form__infor-title">Hello! Welcome back.</h3>
                <p class="form__infor-description">Log in with your data that you entered during Your registration</p>
                <input type="text" class="form__infor-input" placeholder="Tên người dùng" />
                <input type="password" class="form__infor-input" placeholder="Mật khẩu" />
                <a href="" class="form__infor-forgot-password">Quên mật khẩu</a>
                <button class="form__btn-sign-in"><Link to="thuvien/">Đăng nhập</Link></button>
            </div>
        </div>
    </div>
  )
}

export default SignIn
