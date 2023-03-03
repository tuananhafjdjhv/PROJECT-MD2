import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { act_get_pro, act_delete_pro } from '../redux/action';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';



export default function Admin() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (pro) => {
        navigate("/admin-editproduct", { state: pro })
    }

    const handleDelete = (idDel) => {
        window.confirm('Are you sure you want to delete')
        dispatch(act_delete_pro(idDel));
    };

    useEffect(() => {
        dispatch(act_get_pro())
    }, []);



    let listProduct = useSelector(state => state.products)


    return (
        <>
        {/* <Header></Header> */}
        <div style={{ background: "#6c757d", color: "#f8f9fa", }}>
            <h2>ADMIN</h2>
            <NavLink className="flex-sm-fill text-sm-center nav-link active" to={"/login"}>Đăng xuất</NavLink>
            <NavLink className="nav-link active" to={"/admin-addproduct"}>Add Product</NavLink>
            <NavLink className="nav-link active" to={"/"}>Home</NavLink>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Giá</th>
                        <th scope="col-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listProduct.map((pro) =>
                            <tr key={pro.id} >
                                <th scope="row">{pro.id}</th>
                                <td>{pro.name}</td>
                                <td><img width={60} src={pro.img} alt={pro.name} /></td>
                                <td> {pro.price} USD</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => handleEdit(pro)}>Sửa sản phẩm </button><hr />
                                    <button className="btn btn-danger" onClick={() => handleDelete(pro.id)}>Xóa Sản phẩm</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </div>
        <Footer></Footer>
        </>
    )
}
