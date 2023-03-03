import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { act_get_pro, act_get_user } from '../redux/action';
import { useEffect } from "react";
import { act_post_cart } from '../redux/action';
import { products } from './../redux/reducers/product';


export default function Phone() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(act_get_user())
    },[])
    const userLogin = useSelector(state=>state.users)
    console.log('userLogin',userLogin);

    
    const handleAddToCart = (product) => {
        dispatch(act_post_cart({ ...product, cartQuantity: 1 }))
        navigate("/cart")
        window.confirm("Xem trong giỏ hàng nhé :))")
    }
        
    


    // gọi action act_get_user khi component đc mount
    useEffect(() => {
        dispatch(act_get_pro())
    }, [])
    const listProduct = useSelector(state => state.products)


    return (
        listProduct.map((product) =>

            <div className="col l-2-4 l-3-m m-4 c-6">

                <div className="container-product__item">
                    <div>
                        <img src={product.img} alt="" width={120} />
                    </div>
                    <div className="container-product__item-wrap">
                        <div className="container-product__item-info">
                            <a href="#" class="container-product__item-name" >
                                {product.name}
                            </a>
                            <i className="container-product__item-sale-icon fas fa-gift"></i>
                        </div>
                        <div className="container-product__item-buy">
                            <span className="container-product__item-price">
                                {product.price} $
                            </span>
                            <button
                                className="container-product__item-btn"
                                onClick={() => handleAddToCart(product)}
                            >MUA</button>
                        </div>
                    </div>
                    <ul clasNames="container-product__item-gifts-list">
                        <li className="container-product__item-gift">
                            1. Tặng:
                            <span className="container-product__item-gift--highlight">
                                Cường lực - Ốp lưng - Tai nghe
                            </span>
                            khi mua BHV
                        </li>
                        <li className="container-product__item-gift">
                            2. Giảm:
                            <span className="container-product__item-gift--highlight">
                                100K
                            </span>
                            áp dụng HSSV mua BHV tại
                            <span className="container-product__item-gift--highlight">
                                42 phố Vọng
                            </span>
                        </li>
                    </ul>
                    <ul className="container-product-marker__list ${markers}">
                        <li className="container-product-marker__item container-product-marker__item--new">Mới</li>
                        <li className="container-product-marker__item container-product-marker__item--hot">Hot</li>
                    </ul>
                </div>
            </div>

        )
    )
}

