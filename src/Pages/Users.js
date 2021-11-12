import React from 'react'
import './Users.css'

function Users() {
    const handleCreateUser = () => {
        const createUser = document.querySelector('.users-create-wrapper')

        createUser.style.display = 'block'
    }
    const handleRemoveUser = () => {
        const removeUser = document.querySelector('.users-remove-wrapper')

        removeUser.style.display = 'block'
    }

    return (
        <div className="container">
            <div className="container__table">
                <table className="table__user">
                    <thead>
                        <tr className="table__user-header">
                            <th></th>
                            <th className="table__stt">STT</th>
                            <th className="table__col-2">Họ và tên</th>
                            <th className="table__col-3">Ngày sinh</th>
                            <th className="table__col-4">Ngày lập thẻ</th>
                            <th className="table__col-5">Email</th>
                            <th className="table__col-6">Địa chỉ</th>
                            <th className="table__col-7">Loại độc giả</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">1</td>
                            <td>Jane Cooper</td>
                            <td>7/11/19</td>
                            <td>5/27/15</td>
                            <td>curtis.weaver@example.com</td>
                            <td>ul. Końcowa 72, Szczecin 70-871</td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">2</td>
                            <td>Cameron Williamson</td>
                            <td>5/27/15</td>
                            <td>9/23/16</td>
                            <td>deanna.curtis@example.com</td>
                            <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">3</td>
                            <td>Marvin McKinney</td>
                            <td>8/15/17</td>
                            <td>Ngày lập thẻ</td>
                            <td>michael.mitc@example.com</td>
                            <td>20242 Schiller Camp</td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">4</td>
                            <td>Theresa Webb</td>
                            <td>9/4/12</td>
                            <td>Ngày lập thẻ</td>
                            <td>nevaeh.simmons@example.com</td>
                            <td>ul. Szajnochy 103, Bydgoszcz 85-738</td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">5</td>
                            <td>Wade Warren</td>
                            <td>9/4/12</td>
                            <td>Ngày lập thẻ</td>
                            <td>curtis.weaver@example.com</td>
                            <td>Mk2 Odéon</td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">6</td>
                            <td>Darlene Robertson</td>
                            <td>6/19/14</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Rue Arthur-Groussier (75010)</td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">7</td>
                            <td>Cameron Williamson</td>
                            <td>5/27/15</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Địa chỉ </td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">8</td>
                            <td>Esther Howard</td>
                            <td>6/19/14</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Địa chỉ </td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">9</td>
                            <td>Guy Hawkins</td>
                            <td>Ngày sinh</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Địa chỉ </td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">10</td>
                            <td>Cameron Williamson</td>
                            <td>Ngày sinh</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Địa chỉ </td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">11</td>
                            <td>Họ và tên</td>
                            <td>Ngày sinh</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Địa chỉ </td>
                            <td>Loại độc giả</td>
                        </tr>

                        <tr>
                            <td className="table__check"><input type="checkbox"/></td>
                            <td className="table__stt">12</td>
                            <td>Họ và tên</td>
                            <td>Ngày sinh</td>
                            <td>Ngày lập thẻ</td>
                            <td>Email</td>
                            <td>Địa chỉ </td>
                            <td>Loại độc giả</td>
                        </tr>

                    </tbody> 
                </table>
            </div>

            <div className="container__button">
                <button className="button" onClick={handleCreateUser}>Tạo thẻ</button>
                <button className="button" onClick={handleRemoveUser}>Xóa thẻ</button>
                <button className="button">Chỉnh sửa</button>
            </div>


        </div>
    )
}

export default Users
