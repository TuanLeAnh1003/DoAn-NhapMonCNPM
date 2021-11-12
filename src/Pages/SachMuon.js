import React, { useState } from 'react';
import PhieuMuonSach from '../Components/PhieuMuonSach';
import './SachMuon.css';

function SachMuon() {

  const [isBorrow, setIsBorrow] = useState(false);

  const handleAdd = () => {
    setIsBorrow(true);
  }

  const childState = (state) => {
    setIsBorrow(state)
  }

  return (
    <div className="container-PMS">
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
                  <tr>
                      <td className="table__check"><input type="checkbox" /></td>
                      <td className="table__stt">1</td>
                      <td >CNPM</td>
                      <td >A</td>
                      <td >Tác giả 1</td>
                      <td >5000đ</td>
                      <td >Nhà xuất bản trẻ</td>
                  </tr>
              </tbody> 
          </table>
      </div>

      <div className="container__button">
          <button className="button" onClick={handleAdd}>Thêm</button>
          <button className="button">Xóa</button>
          <button className="button">Sửa</button>
      </div>

      {isBorrow ? <PhieuMuonSach handleClick={childState}/> : ""}
  </div>

  )
}

export default SachMuon
