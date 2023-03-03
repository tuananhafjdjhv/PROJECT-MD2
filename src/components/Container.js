import React from 'react'
import Phone from './Phone'

export default function Container() {
  return (
    <div className="container">
                    <div className="grid wide">
                        {/* Product Phone */}
                        <div className="row container__item">
                            <div className="col l-8 m-12 c-12">
                                <div className="banner">
                                    <div className="row">
                                        <div className="phone-banner__wrap">
                                            <i className="fas fa-arrow-left phone-banner__btn-prev" />
                                            <i className="fas fa-arrow-right phone-banner__btn-next" />
                                            <div className="phone-banner__list">
                                                {/* Thêm danh sách Banner */}
                                            </div>
                                            <div className="phone-banner-pagination">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col l-12 m-12 c-12">
                                <div className="container-nav">
                                    <h2 className="container-nav__heading">Hãng:</h2>
                                    <ul className="container-nav__list">
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Apple</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Samsung</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">OnePlus</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Xiaomi</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Oppo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Vivo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">ZTE</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Asus</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Nokia</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">LG</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Google</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Vsmart</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Meizu</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Sony</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">BlackBerry</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Lenovo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Bkav</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Huawei</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Smartisan</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Meiigo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-filter">
                                    <div className="container-filter__item">
                                        Giá từ cao đến thấp
                                        <i className="container-filter__icon-down fas fa-chevron-down" />
                                        <ul className="container-filter__list">
                                            <li className="container-filter__list-item">
                                                Giá từ cao đến thấp
                                            </li>
                                            <li className="container-filter__list-item">
                                                Giá từ thấp đến cao
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="container-filter__item">
                                        Bán chạy
                                        <i className="container-filter__icon-down fas fa-chevron-down" />
                                        <ul className="container-filter__list">
                                            <li className="container-filter__list-item">
                                                Bán chạy
                                            </li>
                                            <li className="container-filter__list-item">
                                                Phổ biến
                                            </li>
                                            <li className="container-filter__list-item">
                                                Khuyến mãi
                                            </li>
                                            <li className="container-filter__list-item">
                                                Hàng mới về
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col l-12 m-12 c-12">
                                    <div className="container-product">
                                        <div className="row no-gutters phone-products">
                                            {/* Thêm từng điện thoại vào */}
                                            <Phone></Phone>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    <div className="container-view-more">
                                        <a href="#" className="container-btn-extend">Xem thêm điện thoại</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Tool */}
                        <div className="row container__item">
                            <div className="col l-12 m-12 c-12" phone-products>
                                <div className="banner">
                                    <div className="row">
                                        <div className="col l-6 m-6 c-0">
                                            <a href="#" className="banner__link">
                                                <img src="./assets/images/banner/banner4.jpg" alt="Banner 1" className="banner__img" />
                                            </a>
                                        </div>
                                        <div className="col l-6 m-6 c-0">
                                            <a href="#" className="banner__link">
                                                <img src="./assets/images/banner/banner5.jpg" alt="Banner 2" className="banner__img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-nav">
                                    <h2 className="container-nav__heading">Phụ kiện:</h2>
                                    <ul className="container-nav__list">
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Loa - Tai nghe</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Đồng hồ thông minh</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Pin, Sạc dự phòng</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Đồ chơi công nghệ</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Phụ kiện điện thoại</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Máy lọc không khí</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col l-12 m-12 c-12">
                        <div className="container-filter">
                            <div className="container-filter__item">
                                Giá từ cao đến thấp
                                <i className="container-filter__icon-down fas fa-chevron-down"></i>
                                <ul className="container-filter__list">
                                    <li className="container-filter__list-item">
                                        Giá từ cao đến thấp
                                    </li>
                                    <li className="container-filter__list-item">
                                        Giá từ thấp đến cao
                                    </li>
                                </ul>
                            </div>

                            <div className="container-filter__item">
                                Bán chạy
                                <i className="container-filter__icon-down fas fa-chevron-down"></i>
                                <ul className="container-filter__list">
                                    <li className="container-filter__list-item">
                                        Bán chạy
                                    </li>
                                    <li className="container-filter__list-item">
                                        Phổ biến
                                    </li>
                                    <li className="container-filter__list-item">
                                        Khuyến mãi
                                    </li>
                                    <li className="container-filter__list-item">
                                        Hàng mới về
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                            <div className="col l-12 m-12 c-12">
                                <div className="container-product">
                                    <div className="row no-gutters tool-products">
                                        {/* Thêm phụ kiện */}
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-view-more">
                                    <a href="#" className="container-btn-extend">Xem thêm phụ kiện</a>
                                </div>
                            </div>
                        </div>
                        {/* Product Fix */}
                        <div className="row container__item">
                            <div className="col l-12 m-12 c-12">
                                <div className="banner">
                                    <div className="row">
                                        <div className="col l-6 m-6 c-0">
                                            <a href="#" className="banner__link">
                                                <img src="./assets/images/banner/banner6.jpg" alt="Banner 1" className="banner__img" />
                                            </a>
                                        </div>
                                        <div className="col l-6 m-6 c-0">
                                            <a href="#" className="banner__link">
                                                <img src="./assets/images/banner/banner4.jpg" alt="Banner 2" className="banner__img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-nav">
                                    <h2 className="container-nav__heading">Dịch vụ sửa chữa:</h2>
                                    <ul className="container-nav__list">
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">iPhone</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Samsung</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Oppo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Xiaomi</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Realme</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Honor</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">iPad</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Sony</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">HTC</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">LG</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Asus</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">BlackBerry</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Vivo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-filter">
                                    <div className="container-filter__item">
                                        Giá từ cao đến thấp
                                        <i className="container-filter__icon-down fas fa-chevron-down" />
                                        <ul className="container-filter__list">
                                            <li className="container-filter__list-item">
                                                Giá từ cao đến thấp
                                            </li>
                                            <li className="container-filter__list-item">
                                                Giá từ thấp đến cao
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="container-filter__item">
                                        Bán chạy
                                        <i className="container-filter__icon-down fas fa-chevron-down" />
                                        <ul className="container-filter__list">
                                            <li className="container-filter__list-item">
                                                Bán chạy
                                            </li>
                                            <li className="container-filter__list-item">
                                                Phổ biến
                                            </li>
                                            <li className="container-filter__list-item">
                                                Khuyến mãi
                                            </li>
                                            <li className="container-filter__list-item">
                                                Hàng mới về
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-product">
                                    <div className="row no-gutters fix-products">
                                        {/* Thêm sản phẩm */}

                                        <Phone></Phone>


                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-view-more">
                                    <a href="#" className="container-btn-extend">Xem thêm dịch vụ sửa chữa</a>
                                </div>
                            </div>
                        </div>
                        {/* Product Unlock */}
                        <div className="row container__item">
                            <div className="col l-12 m-12 c-12">
                                <div className="banner">
                                    <div className="row">
                                        <div className="col l-6 m-6 c-0">
                                            <a href="#" className="banner__link">
                                                <img src="./assets/images/banner/banner5.jpg" alt="Banner 1" className="banner__img" />
                                            </a>
                                        </div>
                                        <div className="col l-6 m-6 c-0">
                                            <a href="#" className="banner__link">
                                                <img src="./assets/images/banner/banner4.jpg" alt="Banner 1" className="banner__img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-nav">
                                    <h2 className="container-nav__heading">Hãng:</h2>
                                    <ul className="container-nav__list">
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Apple</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Samsung</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">OnePlus</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Xiaomi</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Oppo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Vivo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">ZTE</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Asus</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Nokia</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">LG</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Google</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Vsmart</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Meizu</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Sony</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">BlackBerry</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Lenovo</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Bkav</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Huawei</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Smartisan</a>
                                        </li>
                                        <li className="container-nav__item">
                                            <a href="#" className="container-nav__item-link">Meiigo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-filter">
                                    <div className="container-filter__item">
                                        Giá từ cao đến thấp
                                        <i className="container-filter__icon-down fas fa-chevron-down" />
                                        <ul className="container-filter__list">
                                            <li className="container-filter__list-item">
                                                Giá từ cao đến thấp
                                            </li>
                                            <li className="container-filter__list-item">
                                                Giá từ thấp đến cao
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="container-filter__item">
                                        Bán chạy
                                        <i className="container-filter__icon-down fas fa-chevron-down" />
                                        <ul className="container-filter__list">
                                            <li className="container-filter__list-item">
                                                Bán chạy
                                            </li>
                                            <li className="container-filter__list-item">
                                                Phổ biến
                                            </li>
                                            <li className="container-filter__list-item">
                                                Khuyến mãi
                                            </li>
                                            <li className="container-filter__list-item">
                                                Hàng mới về
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-product">
                                    <div className="row no-gutters unlock-products">
                                        {/* Thêm sản phẩm */}
                                    </div>
                                </div>
                            </div>
                            <div className="col l-12 m-12 c-12">
                                <div className="container-view-more">
                                    <a href="#" className="container-btn-extend">Xem thêm Unlock, mở mạng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container News */}
                    <div className="grid wide">
                        <div className="container-new">
                            <div className="row">
                                <div className="col l-6 l-12-m m-12 c-12">
                                    <div className="container-new__item">
                                        <a href="#" className="container-new__item-link">
                                            <img src="./assets/images/banner/banner7.jpg" alt className="container-new__img" />
                                            <div className="container-new__text">
                                                <h2 className="container-new__text-heading">MobileCity đổi máy CŨ lên máy MỚI năm 2020</h2>
                                                <p className="container-new__text-disc">MobileCity kính chào Quý khách! Cám ơn Quý khách đã ủng hộ và yêu quý MobileCity! Với mong muốn luôn luôn cải tiến và phục vụ Khách hàng tốt hơn, MobileCity mở chương trình "Đổi máy CŨ để lấy máy MỚI"</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col l-6 l-12-m m-12 c-12">
                                    <div className="container-new__item">
                                        <a href="#" className="container-new__item-link">
                                            <img src="./assets/images/banner/banner7.jpg" alt className="container-new__img" />
                                            <div className="container-new__text">
                                                <h2 className="container-new__text-heading">MobileCity đổi máy CŨ lên máy MỚI năm 2020</h2>
                                                <p className="container-new__text-disc">MobileCity kính chào Quý khách! Cám ơn Quý khách đã ủng hộ và yêu quý MobileCity! Với mong muốn luôn luôn cải tiến và phục vụ Khách hàng tốt hơn, MobileCity mở chương trình "Đổi máy CŨ để lấy máy MỚI"</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
