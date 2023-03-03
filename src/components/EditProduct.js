import React ,{ useEffect,useState }from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';
import { getDownloadURL,uploadBytes,ref,listAll } from 'firebase/storage';
import { storage } from '../firebase';
import { act_update_pro } from '../redux/action';




export default function EditProduct(props) {
    let {pro}=props
    const [imageUrl, setImageUrl] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");

    const productUpdate = useLocation().state;
    console.log('productUpdate',productUpdate);

    useEffect(() => {
        setImageUrl(productUpdate.img);
        setProductName(productUpdate.name);
        setPrice(productUpdate.price);
    }, [productUpdate]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const imagesListRef = ref(storage, "uploads/");

    // Tạo storage lưu trữ từ dịch vụ của firebase
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
    const handleUpdateProduct = () => {
        dispatch(
            act_update_pro({
                id: productUpdate.id,
                name: productName,
                price,
                img: imageUrl,
            })
        );
        navigate("/admin");
    };
    useEffect(() => {
        listAll(imagesListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrl(url);
                });
            });
        });
    }, []);
    return (
     
            <div>
                <h2>Sửa Sản Phẩm</h2>
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
                            <td><input type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            /></td>
                            <td>
                                <img
                                    width="100"
                                    src={imageUrl} alt="new-product"
                                />
                                <input
                                    type="file"
                                    onChange={uploadImage}
                                />

                            </td>
                            <td>
                                <input
                                    type="number" value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />đ</td>
                            <td>
                                <button className="btn btn-primary"
                                    onClick={handleUpdateProduct}
                                >Edit </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
    )
}
