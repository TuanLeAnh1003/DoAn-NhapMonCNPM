import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
    const handleHover1 = (e) => {
        const listHover = document.querySelector('#nav-item-link-book');
        
        listHover.style.display = 'block'

        e.target.classList.add('nav-item-link-active')
    }
    const handleLeave1 = (e) => {
        const listHover = document.querySelector('#nav-item-link-book');
        
        listHover.style.display = 'none'

        e.target.classList.remove('nav-item-link-active')
    }
    const handleHover2 = (e) => {
        const listHover = document.querySelector('#nav-item-link-statistical');
        
        listHover.style.display = 'block'

        e.target.classList.add('nav-item-list-item-active')
    }
    const handleLeave2 = (e) => {
        const listHover = document.querySelector('#nav-item-link-statistical');
        
        listHover.style.display = 'none'

        e.target.classList.remove('nav-item-list-item-active')
    }

    return (
        <div className="nav">
            <ul className="nav-wrapper">
                <li className="nav-item">
                    <Link to="/" className="nav-item-link">Trang chủ</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-item-link">Sách</Link>
                </li>
                <li className="nav-item" onMouseEnter={e => handleHover1(e)} onMouseLeave={e => handleLeave1(e)}>
                    <Link to="/" className="nav-item-link">
                        Phiếu
                        <i className="nav-item-link-icon fas fa-chevron-down"></i>
                    </Link>
                    <ul className="nav-item-list"  id="nav-item-link-book">
                        <li className="nav-item-list-item">
                            <Link to="/" className="nav-item-list-item-link">Mượn sách</Link>
                        </li>
                        <li className="nav-item-list-item">
                            <Link to="/" className="nav-item-list-item-link">Trả sách</Link>
                        </li>
                        <li className="nav-item-list-item">
                            <Link to="/" className="nav-item-list-item-link">Thu tiền phạt</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-item-link">Người dùng</Link>
                </li>
                <li className="nav-item" onMouseEnter={e => handleHover2(e)} onMouseLeave={e => handleLeave2(e)}>
                    <Link to="/" className="nav-item-link">
                        Thống kê
                        <i className="nav-item-link-icon fas fa-chevron-down"></i>
                    </Link>
                    <ul className="nav-item-list" id="nav-item-link-statistical">
                        <li className="nav-item-list-item">
                            <Link to="/" className="nav-item-list-item-link">Thể loại</Link>
                        </li>
                        <li className="nav-item-list-item">
                            <Link to="/" className="nav-item-list-item-link">Trả không đúng hạn</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-item-link">Cài đặt</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
