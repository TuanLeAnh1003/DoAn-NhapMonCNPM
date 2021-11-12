import React, { useState } from 'react';
import PhieuTraSach from '../Components/PhieuTraSach';
import './SachTra.css';

function SachTra() {
  const [isPay, setIsPay] = useState(false);

  const handleAdd = () => {
      setIsPay(true);
  }

  const childState = (state) => {
      setIsPay(state)
  }

  return (
    <div className="container-PTS">
      <div className="container-PTS__table">
          <table className="table__book">
              <thead>
                  <tr className="table__book-header">
                      <th></th>
                      <th className="table__stt">STT</th>
                      <th className="table__col-3">ID độc giả</th>
                      <th className="table__col-4">Họ tên</th>
                      <th className="table__col-6">Ngày lập</th>
                      <th className="table__col-7">Tên sách</th>
                      <th className="table__col-8">Tiền phạt kỳ này</th>
                      <th className="table__col-9">Tổng nợ kỳ này</th>
                      <th>Tổng nợ</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td className="table__check"><input type="checkbox" /></td>
                      <td className="table__stt">1</td>
                      <td>0001</td>
                      <td>Devon Lane</td>
                      <td>04/11/2021</td>
                      <td>Tên sách Tên sách</td>
                      <td>0đ</td>
                      <td>0đ</td>
                      <td>0đ</td>
                  </tr>
                  
              </tbody> 
          </table>
      </div>

      <div className="container__button">
          <button className="button" onClick={handleAdd}>Thêm</button>
          <button className="button">Xóa</button>
          <button className="button">Sửa</button>
      </div>

      {isPay ? <PhieuTraSach handleClick={childState}/> : ""}
  </div>
  )
}

export default SachTra
