import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { act_quantity } from '../redux/action';
import { act_delete_cart } from '../redux/action';

export default function CartItem(props) {
    const dispatch =useDispatch()
    const [quantity, setQuantity] = useState(1)

    let { cart,index } = props


    const plus = ()=>{
        setQuantity(cart.cartQuantity += 1);
    }
    const minus = ()=>{
        setQuantity(cart.cartQuantity -= 1);
    }

    
    useEffect(() => {
        
            dispatch(act_quantity({...cart,cartQuantity: quantity}))
     
    }, [quantity]);
    useEffect(() => {
           setQuantity(cart.cartQuantity)
    }, []);

    const handelDelete = () => {
        window.confirm('Are you sure you want to delete ??')
        dispatch(act_delete_cart(index))
    }
   

    return (
        <>
            <div className="d-flex align-items-center mb-5">
                <div className="flex-shrink-0">
                    <img
                        src={cart.img}
                        className="img-fluid"
                        style={{ width: 80 }}
                        alt="Generic placeholder image"
                    />
                </div>
                <div className="flex-grow-1 ms-3">
                    <a href="#!" className="float-end text-black">
                        <button onClick={handelDelete} className="fas fa-times fa-danger" style={{borderRadius:"3px",background:"#e84c07",border:"0.5px"}}/>
                    </a>
                    <h5 className="text-primary">
                        {cart.name}
                    </h5>
                    {/* <h6 style={{ color: "#9e9e9e" }}>Color: white</h6> */}
                    <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-5 pe-3">
                            {cart.price} $
                        </p>
                        <div className="def-number-input number-input safari_only">
                            <button
                                onClick={minus}
                                className="minus"
                            />
                            <input
                                className="form-control form-control-sm"
                                min={1}
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(+e.target.value)}
                               
                                style={{borderRadius:"3px",background:"rgb(252 163 124)",border:"1px",width:"100px"}}
                            />
                            <button
                                onClick={plus}
                                className="plus"
                            />
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
