import React from 'react'
import { useState, useEffect } from "react";
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { useDispatch } from 'react-redux';
import { act_post_pro } from '../redux/action';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [imageUrl, setImageUrl] = useState([]);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const imagesListRef = ref(storage, "images/")


    const uploadImage = (e) => {
        let imageUpload = e.target.files[0];
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
            });
        });
    };
    // Lấy dữ liệu trả về từ firebase
    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrl((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    const handleAddProduct = () => {
        dispatch(act_post_pro({ name: productName, price, img: imageUrl }))
        navigate("/admin")
    }
    return (
        <div>
            <h2>THêm Sản Phẩm</h2>
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
                    <tr>
                        <th scope="row">1</th>
                        <td><input type="text" value={productName}
                            onChange={(e) => setProductName(e.target.value)} /></td>
                        <td>
                            <img width="100" src={imageUrl} alt="new-product" />
                            <input type="file" onChange={uploadImage} />

                        </td>
                        <td><input type="number" value={price}
                            onChange={(e) => setPrice(e.target.value)} />    USD</td>
                        <td>
                            <button onClick={handleAddProduct} className="btn btn-success">Thêm sản phẩm </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
