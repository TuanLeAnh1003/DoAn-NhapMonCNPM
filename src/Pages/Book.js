import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Book.css'

function Book() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/sach')
        .then(data => {
            if(data.data.length >= 1) setBooks([...data.data]);
            else alert('Chưa có sách nào!');
        })
        .catch(err => alert('Có lỗi xảy ra. Hãy thử tải lại trang!'));
    }, []);

    const handleAddBook = () => {
        const AddBook = document.querySelector('.container-book-wrapper')
        
        AddBook.style.display = 'block'
    }

    const handleRemoveBook = () => {
        const RemoveBook = document.querySelector('.container-book-wrapper-remove')
        
        RemoveBook.style.display = 'block'
    }
    return (
        <div>
            <div className="container">
                <div className="container__table">
                    <table className="table__book">
                        <thead>
                            <tr className="table__book-header">
                                <th></th>
                                <th className="table__stt">STT</th>
                                <th className="table__col-3">Tên sách</th>
                                <th className="table__col-4">Thể loại</th>
                                <th className="table__col-5">Tác giả</th>
                                <th className="table__col-6">Trị giá</th>
                                <th className="table__col-7">Nhà xuất bản</th>
                            </tr>
                        </thead>

                        <tbody>
                            {books.map((item, index) => (
                                <tr key={index}>
                                    <td className="table__check"><input type="checkbox"/></td>
                                    <td className="table__stt">{index+1}</td>
                                    <td >{item.TenSach}</td>
                                    <td >{item.TenTheLoai}</td>
                                    <td >{item.TenTacGia}</td>
                                    <td >{item.TriGia}đ</td>
                                    <td >{item.TenNXB}</td>
                                </tr>
                            ))}
                            
                        </tbody> 
                    </table>
                </div>

                <div className="container__button">
                    <button className="button" onClick={handleAddBook}>Thêm</button>
                    <button className="button" onClick={handleRemoveBook}>Xóa</button>
                    <button className="button">Sửa</button>
                </div>
            </div>
        </div>
    )
}

export default Book
