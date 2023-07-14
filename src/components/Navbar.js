import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import data from './Data'
import logo1 from '../images/flipkart-plus.png'
import logo2 from '../images/plus_aef861.png'

export default function Navbar() {
    const [Data, setData] = useState(data);

    return (
        <>
            <div className='nav'>
                <div className='container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='container-flex d-flex flex-row py-1'>

                                <div id='logo'>
                                    <a href="/">
                                        <img width="75" src={logo1} alt="Flipkart" title="Flipkart" class="_2xm1JU" />
                                    </a>
                                    <br></br>
                                    <a>
                                        Explore
                                        <span class="logo2_text">Plus</span>
                                        <img width="10" src={logo2}></img>
                                    </a>
                                </div>
                                <div id='searchBar ' className='container-flex'>
                                    <a href='/'><input type='search' className='search mt-2 ms-2 ' placeholder='womens dress'  ></input></a>
                                </div>
                                <div>
                                    <i class="fa-solid fa-magnifying-glass mt-3  " id='search-icon'></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-microphone mt-3" id='mic-icon'></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-camera mt-3" id='camera-icon'></i>
                                </div>
                                <div id='login_button' className='mt-2 ms-3'>
                                    <button >Login</button>
                                    <div class="more_menu">
                                        <div class="more_menu_list">

                                            <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2F%3Frd%3D0%26link%3Dhome_account">
                                                <p>My Profile</p>
                                            </a>
                                            <a href="https://www.flipkart.com/plus">
                                                <p>Flipkart Plus Zone</p>
                                            </a>
                                            <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2Forders%3Flink%3Dhome_orders">
                                                <p>Orders</p>
                                            </a>
                                            <a href="https://www.flipkart.com/account/login?ret=%2Fwishlist%3Flink%3Dhome_wishlist">
                                                <i class="fa-solid fa-arrow-down-to-line"></i>
                                                <p>Wishlist</p>
                                            </a>
                                            <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2Frewards%3Flink%3Dhome_rewards">
                                                <i class="fa-solid fa-arrow-down-to-line"></i>
                                                <p>Rewards</p>
                                            </a>
                                            <a href="https://www.flipkart.com/the-gift-card-store?link=home_giftcard">
                                                <i class="fa-solid fa-arrow-down-to-line"></i>
                                                <p>Gift Cards</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                                <a class="nav-link"
                                    href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                                    Become a Seller
                                </a>


                                <div class="more_link mt-2 ms-3">
                                    More
                                    <i class="fa-solid fa-angle-down icon_more"></i>
                                    <div class="more_menu">
                                        <div class="more_menu_list">

                                            <a href="https://www.flipkart.com/communication-preferences/push?t=all">
                                                <p>Notification Preferences</p>
                                            </a>
                                            <a href="https://www.flipkart.com/helpcentre">
                                                <p>24 X 7 Customer Care</p>
                                            </a>
                                            <a href="https://advertising.flipkart.com/login?returl=/?otracker=ch_vn_advertise_header">
                                                <p>Advertise</p>
                                            </a>
                                            <a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps">
                                                <i class="fa-solid fa-arrow-down-to-line"></i>
                                                <p>Download App</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART">
                                    <div class="card_link mt-2 ms-4">
                                        <i class="fa-solid fa-cart-shopping mt-1" id='cart-icon'></i>
                                        <p>Cart</p>

                                    </div>
                                </a>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
