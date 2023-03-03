import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    const [name, setName] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("users"));
        if (user) {
            setName(user.fullname);
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    return (
        <div className="header">
            <div className="header-nav">
                <div className="grid wide no-margin">
                    <div className="row">
                        <div className="col l-4 m-12 c-12">
                            <div className="header-nav__item">
                                <span>Bạn đang xem giá, tồn kho tại: </span>
                                <span className="header-nav__location">
                                    Hồ Chí Minh
                                    <i className="header-nav__icon-down fas fa-chevron-down" />
                                    <ul className="header-nav__areas-list">
                                        <li className="header-nav__area-name">Hồ Chí Minh</li>
                                        <li className="header-nav__area-name">Hà Nội</li>
                                        <li className="header-nav__area-name">Bình Dương</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className="col l-4 l-o-4 m-0 c-0">
                            <div className="header-nav__item">
                                <ul className="header-nav__logs-list">
                                    <li className="header-nav__log-item">
                                        <a href="#" className="header-nav__log-link">Tra cứu bảo hành</a>
                                    </li>
                                    {
                                        isLogin ? (<li className="header-nav__log-item">
                                            <NavLink to={"/login"} className="header-nav__log-link" onClick={() => {
                                                localStorage.removeItem("users");
                                                setIsLogin(false);
                                            }}>{name} <i className="bi bi-box-arrow-in-right"></i></NavLink>
                                        </li>) : (
                                                <li className="header-nav__log-item">
                                                <NavLink to={"/login"} className="header-nav__log-link" onClick={() => {
                                                    
                                                }}>Đăng nhập/Đăng kí</NavLink>
                                            </li>
                                            )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-with-search">
                <div className="grid wide">
                    <div className="header-with-search__wrap">
                        {/* Mobile menu button */}
                        <div className="header-mobile-menu display-on-mobile-and-tablet">
                            <i className="header-mobile-menu__icon fas fa-bars" />
                        </div>
                        <a href="#" className="header-logo__link">
                            <div className="header-logo__img" />
                        </a>
                        <div className="header-search hide-on-mobile-and-tablet">
                            <input type="text" placeholder="Nhập tên sản phẩm..." className="header-search__input" />
                            <i className="header-search__icon fas fa-search" />
                        </div>
                        <ul className="header-menu hide-on-mobile-and-tablet">
                            {/* Menu Mobile */}
                            <li className="header-menu__item">
                                <a href className="header-menu__item-link">
                                    <i className="header-menu__item-icon fas fa-mobile-alt" />
                                    <p className="header-menu__item-name">Điện thoại</p>
                                </a>
                                <div className="header-sub-menu">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col l-9 m-9">
                                                <h3 className="header-sub-menu__title">Hãng sản xuất</h3>
                                                <div className="row">
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Apple
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Samsung
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                OnePlus
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Xiaomi
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Oppo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Vivo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                ZTE (Nubia)
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Asus
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Nokia
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                LG
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Google
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Vsmart
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Meizu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Sony
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                BlackBerry
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Lenovo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Bkav
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Huawei
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Smartisan
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Meiigoo
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col l-3 m-4">
                                                <h3 className="header-sub-menu__title">Mức giá</h3>
                                                <div className="row">
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 1 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 2 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 3 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 5 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 8 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 10 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Trên 10 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col l-12 m-12">
                                                <div className="header-sub-menu__ranking">
                                                    <i className="header-sub-menu__ranking-icon fas fa-trophy" />
                                                    <a href="#" className="header-sub-menu__ranking-title">Xếp hạng điện thoại</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Menu Tablet */}
                            <li className="header-menu__item">
                                <a href className="header-menu__item-link">
                                    <i className="header-menu__item-icon fas fa-tablet-alt" />
                                    <p className="header-menu__item-name">Tablet</p>
                                </a>
                                <div className="header-sub-menu">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col l-9 m-9">
                                                <h3 className="header-sub-menu__title">Hãng sản xuất</h3>
                                                <div className="row">
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Apple
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Samsung
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col l-3 m-3">
                                                <h3 className="header-sub-menu__title">Mức giá</h3>
                                                <div className="row">
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 1 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 2 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 3 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 5 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 8 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Dưới 10 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-12 m-12">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Trên 10 triệu
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col l-12 m-12">
                                                <div className="header-sub-menu__ranking">
                                                    <i className="header-sub-menu__ranking-icon fas fa-trophy" />
                                                    <a href="#" className="header-sub-menu__ranking-title">Xếp hạng điện thoại</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Menu Tool */}
                            <li className="header-menu__item">
                                <a href className="header-menu__item-link">
                                    <i className="header-menu__item-icon fas fa-headphones-alt" />
                                    <p className="header-menu__item-name">Phụ kiện</p>
                                </a>
                                <div className="header-sub-menu header-sub-menu--m-size">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col l-12 m-12">
                                                <h3 className="header-sub-menu__title">Loại phụ kiện</h3>
                                                <div className="row">
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Loa - Tai nghe
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Đồng hồ thông minh
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Pin - Sạc dự phòng
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện iPhone
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Đồ chơi công nghệ
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Xiaomi
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Máy lọc không khí
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Sony
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Samsung
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện LG
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Lenovo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện iPad
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Meizu
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện BlackBerry
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Oppo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Pisen
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện Mark
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Phụ kiện khác
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Menu Fix */}
                            <li className="header-menu__item">
                                <a href className="header-menu__item-link">
                                    <i className="header-menu__item-icon fas fa-tools" />
                                    <p className="header-menu__item-name">Sửa chữa</p>
                                </a>
                                <div className="header-sub-menu header-sub-menu--m-size">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col l-12 m-12">
                                                <h3 className="header-sub-menu__title">Loại sản phẩm</h3>
                                                <div className="row">
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                iPhone
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Samsung
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Xiaomi
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Oppo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Realme
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Honor
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                iPad
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Sony
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                HTC
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                LG
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Asus
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                BlackBerry
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Vivo
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Mobiistar
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Huawei
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Sim ghép iPhone
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Hãng khác
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Linh kiện điện thoại
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Menu Unlock */}
                            <li className="header-menu__item">
                                <a href className="header-menu__item-link">
                                    <i className="header-menu__item-icon fas fa-unlock" />
                                    <p className="header-menu__item-name">Mở khóa</p>
                                </a>
                                <div className="header-sub-menu header-sub-menu--m-size">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col l-12 m-12">
                                                <h3 className="header-sub-menu__title">Hãng sản xuất</h3>
                                                <div className="row">
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock iPhone
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock Samsung
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock LG
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock Sony
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock HTC
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock Huawei
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock iPad
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col l-4 m-4">
                                                        <div className="header-sub-menu__item">
                                                            <a href="#" className="header-sub-menu__link">
                                                                <i className="header-sub-menu__icon fas fa-angle-double-right" />
                                                                Unlock Xiaomi
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Menu news */}
                            <li className="header-menu__item">
                                <a href className="header-menu__item-link">
                                    <i className="header-menu__item-icon fas fa-newspaper" />
                                    <p className="header-menu__item-name">Tin tức</p>
                                </a>
                            </li>
                        </ul>
                        {/* Button search in mobile */}
                        <div className="header-mobile-search display-on-mobile-and-tablet">
                            <i className="header-mobile-search__icon fas fa-search" />
                        </div>
                        {/* Mobile search input */}
                        <div className="header-mobile-search-box__wrap">
                            <input type="text" placeholder="Nhập tên sản phẩm..." className="header-mobile-search-box__input" />
                            <button className="header-mobile-search-box__btn">
                                <i className="header-mobile-search-box__icon fas fa-search" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile and Tablet sub menu */}
            <label className="header-mobile-nav__overlay" />
            <nav className="header-mobile-nav">
                <div className="header-mobile-nav__heading">
                    <a href="#" className="header-mobile-nav__heading-link">
                        <div className="header-mobile-nav__logo" />
                    </a>
                    <i className="header-mobile-nav__close fas fa-times" />
                </div>
                <ul className="header-mobile-nav__list">
                    {/* Mobile */}
                    <li className="header-mobile-nav__item">
                        <label className="header-mobile-nav__item-select">
                            <i className="header-mobile-nav__icon-open fas fa-chevron-right" />
                            Điện thoại
                        </label>
                        <ul className="header-mobile-sub-nav__list" style={{ "--num-row": "8" }}>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Apple</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Samsung</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">OnePlus</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Xiaomi</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Oppo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Vivo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">ZTE (Nubia)</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Asus</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Nokia</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">LG</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Google</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Vsmart</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Meizu</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Sony</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">BlackBerry</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Lenovo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Bkav</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Huawei</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Smartisan</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Meiigo</a>
                            </li>
                        </ul>
                    </li>
                    {/* Tablet */}
                    <li className="header-mobile-nav__item">
                        <label className="header-mobile-nav__item-select">
                            <i className="header-mobile-nav__icon-open fas fa-chevron-right" />
                            Tablet
                        </label>
                        <ul className="header-mobile-sub-nav__list" style={{ "--num-row": "2" }}>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Apple</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Samsung</a>
                            </li>
                        </ul>
                    </li>
                    {/* Tool */}
                    <li className="header-mobile-nav__item">
                        <label className="header-mobile-nav__item-select">
                            <i className="header-mobile-nav__icon-open fas fa-chevron-right" />
                            Phụ kiện
                        </label>
                        <ul className="header-mobile-sub-nav__list" style={{ "--num-row": "8" }}>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Loa - Tai nghe</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Đồng hồ thông minh</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Pin - Sạc dự phòng</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện iPhone</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Đồ chơi công nghệ</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Xiaomi</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Máy lọc không khí</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Sony</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Samsung</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện LG</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Lenovo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Ipad</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Meizu</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện BlackBerry</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Oppo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Pisen</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện Mark</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Phụ kiện khác</a>
                            </li>
                        </ul>
                    </li>
                    {/* Fix */}
                    <li className="header-mobile-nav__item">
                        <label className="header-mobile-nav__item-select">
                            <i className="header-mobile-nav__icon-open fas fa-chevron-right" />
                            Sửa chữa
                        </label>
                        <ul className="header-mobile-sub-nav__list" style={{ "--num-row": "8" }}>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">iPhone</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Samsung</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Xiaomi</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Oppo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Realme</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Honor</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">iPad</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Sony</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">HTC</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">LG</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Asus</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">BlackBerry</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Meizu</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Vivo</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Mobiistar</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Huawei</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Sim ghép iPhone</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Hãng khác</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Linh kiện điện thoại</a>
                            </li>
                        </ul>
                    </li>
                    {/* Unlock */}
                    <li className="header-mobile-nav__item">
                        <label className="header-mobile-nav__item-select">
                            <i className="header-mobile-nav__icon-open fas fa-chevron-right" />
                            Mở khóa
                        </label>
                        <ul className="header-mobile-sub-nav__list" style={{ "--num-row": "4" }}>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock iPhone</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock Samsung</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock LG</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock Sony</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock HTC</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock Huawei</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock iPad</a>
                            </li>
                            <li className="header-mobile-sub-nav__item">
                                <a href="#" className="header-mobile-sub-nav__item-link">Unlock Xiaomi</a>
                            </li>
                        </ul>
                    </li>
                    {/* News */}
                    <li className="header-mobile-nav__item">
                        <a href="#" className="header-mobile-nav__item-select">
                            <i className="header-mobile-nav__icon-open fas fa-chevron-right" />
                            Tin tức
                        </a>
                    </li>
                    <li className="header-mobile-nav__item pd-none" style={{ "--num-row": "2" }}>
                        <a href="#" className="header-mobile-nav__item-link">Liên hệ</a>
                    </li>
                    <li className="header-mobile-nav__item pd-none">
                        <a href="#" className="header-mobile-nav__item-link">Diễn đàn</a>
                    </li>
                    <li className="header-mobile-nav__item pd-none">
                        <a href="#" className="header-mobile-nav__item-link">Tra cứu bảo hành</a>
                    </li>
                    <li className="header-mobile-nav__item pd-none">
                        <a className="header-mobile-nav__item-link">Đăng nhập</a>
                    </li>
                    <li className="header-mobile-nav__item pd-none">
                        <a href="#" className="header-mobile-nav__item-link">Đăng xuất</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
