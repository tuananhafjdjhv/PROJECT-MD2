import React from 'react'

export default function Footer() {
  return (
     <div className="footer">
                    <div className="grid wide">
                        <div className="row">
                            {/* Footer Areas */}
                            <div className="col-sm-4">
                                <div className="footer__heading">
                                    <i className="footer__heading-icon fas fa-map-marker-alt" />
                                    Hệ thống cửa hàng
                                </div>
                                <ul className="footer-areas">
                                    <li className="footer-area__item">
                                        <h3 className="footer-area__heading">Hà Nội</h3>
                                        <ul className="footer-places">
                                            <li className="footer-place__item">
                                                <div className="footer-place__item-location">
                                                    120 Thái Hà, Q. Đống Đa
                                                    <a href="#" className="footer-place__item-link footer-place__item-link--highlight">| Xem bản đồ</a>
                                                </div>
                                                <div className="footer-place__item-contact">
                                                    Điện thoại:
                                                    <a href="#" className="footer-place__item-link">097.120.6688</a>
                                                    -
                                                    <a href="#" className="footer-place__item-link">0969.120.120</a>
                                                </div>
                                            </li>
                                            <li className="footer-place__item">
                                                <div className="footer-place__item-location">
                                                    398 Cầu Giấy, Q. Cầu Giấy
                                                    <a href="#" className="footer-place__item-link footer-place__item-link--highlight">| Xem bản đồ</a>
                                                </div>
                                                <div className="footer-place__item-contact">
                                                    Điện thoại:
                                                    <a href="#" className="footer-place__item-link">096.1111.398</a>
                                                    -
                                                    <a href="#" className="footer-place__item-link">096.2222.398</a>
                                                </div>
                                            </li>
                                            <li className="footer-place__item">
                                                <div className="footer-place__item-location">
                                                    42 Phố Vọng, Hai Bà Trưng
                                                    <a href="#" className="footer-place__item-link footer-place__item-link--highlight">| Xem bản đồ</a>
                                                </div>
                                                <div className="footer-place__item-contact">
                                                    Điện thoại:
                                                    <a href="#" className="footer-place__item-link">0979.884242</a>
                                                    -
                                                    <a href="#" className="footer-place__item-link">0338.424242</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer-area__item">
                                        <h3 className="footer-area__heading">Hồ Chí Minh</h3>
                                        <ul className="footer-places">
                                            <li className="footer-place__item">
                                                <div className="footer-place__item-location">
                                                    123 Trần Quang Khải, Q.1
                                                    <a href="#" className="footer-place__item-link footer-place__item-link--highlight">| Xem bản đồ</a>
                                                </div>
                                                <div className="footer-place__item-contact">
                                                    Điện thoại:
                                                    <a href="#" className="footer-place__item-link">0965.123.123</a>
                                                    -
                                                    <a href="#" className="footer-place__item-link">0969.520.520</a>
                                                </div>
                                            </li>
                                            <li className="footer-place__item">
                                                <div className="footer-place__item-location">
                                                    602 Lê Hồng Phong, P.10, Q.10
                                                    <a href="#" className="footer-place__item-link footer-place__item-link--highlight">| Xem bản đồ</a>
                                                </div>
                                                <div className="footer-place__item-contact">
                                                    Điện thoại:
                                                    <a href="#" className="footer-place__item-link">097.1111.602</a>
                                                    -
                                                    <a href="#" className="footer-place__item-link">097.3333.602</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer-area__item">
                                        <h3 className="footer-area__heading">Đà Nẵng</h3>
                                        <ul className="footer-places">
                                            <li className="footer-place__item">
                                                <div className="footer-place__item-location">
                                                    97 Hàm Nghi, Q.Thanh Khê
                                                    <a href="#" className="footer-place__item-link footer-place__item-link--highlight">| Xem bản đồ</a>
                                                </div>
                                                <div className="footer-place__item-contact">
                                                    Điện thoại:
                                                    <a href="#" className="footer-place__item-link">096.123.9797</a>
                                                    -
                                                    <a href="#" className="footer-place__item-link">097.123.9797</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* Footer Policy */}
                            <div className="col-sm-4">
                                <div className="footer__heading">
                                    <i className="footer__heading-icon far fa-question-circle" />
                                    Quy định - chính sách
                                </div>
                                <ul className="footer-policy__list">
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Chính sách bảo hành</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Chính sách vận chuyển</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Chính sách đổi trả hàng</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Chính sách bảo mật thông tin</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Hướng dẫn thanh toán</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Hướng dẫn mua hàng Online</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Dịch vụ Ship COD Toàn quốc</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Chính sách đại lý linh, phụ kiện</a>
                                    </li>
                                    <li className="footer-policy__item">
                                        <a href="#" className="footer-policy__link">Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Footer Subscribe */}
                            <div className="col-sm-4">
                                <div className="footer__heading">
                                    <i className="footer__heading-icon far fa-envelope" />
                                    Đăng ký nhận bảng tin
                                </div>
                                <div className="footer-mail">
                                    <form action>
                                        <input type="text" required placeholder="Nhập email của bạn..." name id className="footer-mail__input" />
                                        <button className="footer-mail__btn">Gửi</button>
                                    </form>
                                </div>
                                <div className="footer-linked">
                                    <h3 className="footer-linked__heading">
                                        <i className="footer-linked__icon fas fa-link" />
                                        Liên kết
                                    </h3>
                                    <ul className="footer-associates">
                                        <li className="footer-associate__item">
                                            <i className="footer-associate__icon footer-associate__icon--facebook fab fa-facebook" />
                                            <a href="https://www.facebook.com/profile.php?id=100035256339240" target="_blank" className="footer-associate__link">
                                                Facebook
                                            </a>
                                        </li>
                                        <li className="footer-associate__item">
                                            <i className="footer-associate__icon footer-associate__icon--youtube fab fa-youtube" />
                                            <a href="https://www.youtube.com/watch?v=RvbdOpO6psc&list=RDMMRvbdOpO6psc&start_radio=1" target="_blank" className="footer-associate__link">
                                                Youtube
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-certification" />
                                <div className="footer-power" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-text">© 2021. MobileCity - Nguyễn Trường Anh</div>
                    <ul className="footer-nav-mobile__list">
                        <li className="footer-nav-mobile__item">
                            <a href="#" className="footer-nav-mobile__link">
                                <i className="footer-nav-mobile__icon fas fa-home" />
                                <span className="footer-nav-mobile__title">Trang chủ</span>
                            </a>
                        </li>
                        <li className="footer-nav-mobile__item">
                            <a href="#" className="footer-nav-mobile__link">
                                <i className="footer-nav-mobile__icon fas fa-shopping-cart" />
                                <span className="footer-nav-mobile__title">Giỏ hàng</span>
                                <span className="footer-nav-mobile__number">0</span>
                            </a>
                        </li>
                        <li className="footer-nav-mobile__item">
                            <a href="#" className="footer-nav-mobile__link">
                                <i className="footer-nav-mobile__icon fas fa-bell" />
                                <span className="footer-nav-mobile__title">Thông báo</span>
                                <span className="footer-nav-mobile__number">0</span>
                            </a>
                        </li>
                        <li className="footer-nav-mobile__item">
                            <a href="#" className="footer-nav-mobile__link">
                                <i className="footer-nav-mobile__icon fas fa-user" />
                                <span className="footer-nav-mobile__title">Tài khoản</span>
                            </a>
                        </li>
                    </ul>
                </div>
  )
}
