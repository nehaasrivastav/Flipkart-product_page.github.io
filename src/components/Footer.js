import React from 'react'
import './Footer.css'
import payment from '../images/payment-method_69e7ec.svg'

export default function Footer() {
    return (
        <>
            <div>

                <div class="site-footer px-5 ">
                    <div class="container-flex">
                        <div class="row">
                            <div className='d-flex flex-row mt-4 '>
                            <div className='ms-5'>
                                <h6>About</h6>
                                <ul className='d-flex flex-column'>
                                    <a href='https://www.flipkart.com/helpcentre?otracker=undefined_footer_navlinks'> <li>Contact Us</li></a>
                                    <a href='https://corporate.flipkart.net/corporate-home'> <li>About Us</li></a>
                                    <a href='https://www.flipkartcareers.com/?otracker=undefined_footer_navlinks#!/'> <li>Careers</li></a>
                                    <a href='https://stories.flipkart.com/?otracker=undefined_footer_navlinks'> <li>Flipkart Stories</li></a>
                                    <a href='https://stories.flipkart.com/category/top-stories/news/'> <li>Press</li></a>
                                    <a href='https://www.flipkartwholesale.com/?otracker=undefined_footer_navlinks'> <li>Flipkart Wholesale</li></a>
                                    <a href='https://www.flipkart.com/corporate-information'> <li>Corporate Information</li></a>
                                </ul>
                            </div>
                            <div className='ms-5'>
                                <h6>HELP
                                </h6>
                                <ul className='d-flex flex-column'>
                                    <a href='https://www.flipkart.com/pages/payments'> <li>Payments</li></a>
                                    <a href='https://www.flipkart.com/search?q=womens+dress&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY&as-searchtext=womens+dress'> <li>Shipping</li></a>
                                    <a href='https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG'> <li>Cancellation & Returns</li></a>
                                    <a href='https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG'> <li>FAQ</li></a>
                                    <a href='https://seller.flipkart.com/?referral_url=%2Ffiv%3Fotracker%3Dundefined_footer_navlinks'> <li>Report Infringement</li></a>
                                </ul>
                            </div>
                            <div className='ms-5'>
                                <h6>CONSUMER POLICY</h6>
                                <ul className='d-flex flex-column'>
                                    <a href='https://www.flipkart.com/pages/returnpolicy?otracker=undefined_footer_navlinks'> <li>Return Policy</li></a>
                                    <a href='https://www.flipkart.com/pages/terms?otracker=undefined_footer_navlinks'> <li>Terms Of Use</li></a>
                                    <a href='https://www.flipkart.com/pages/paymentsecurity?otracker=undefined_footer_navlinks'> <li>Security</li></a>
                                    <a href='https://www.flipkart.com/pages/privacypolicy?otracker=undefined_footer_navlinks'> <li>Privacy</li></a>
                                    <a href='https://www.flipkart.com/sitemap?otracker=undefined_footer_navlinks'> <li>Sitemap</li></a>
                                    <a href='https://www.flipkart.com/pages/grievance-redressal-mechanism?otracker=undefined_footer_navlinks'> <li>Grievance Redressal</li></a>
                                    <a href='https://www.flipkart.com/pages/ewaste-compliance-tnc?otracker=undefined_footer_navlinks'> <li>EPR Compliance</li></a>
                                </ul>
                            </div>
                            <div className='ms-5'>
                                <h6>SOCIAL
                                </h6>
                                <ul className='d-flex flex-column'>
                                    <a href='https://www.facebook.com/flipkart'> <li>Facebook</li></a>
                                    <a href='https://twitter.com/flipkart'> <li>Twitter</li></a>
                                    <a href='https://www.youtube.com/flipkart'> <li>YouTube</li></a>
                                </ul>
                            </div>
                            <div className='ms-5'>
                                <h6>Mail Us:</h6>
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India</p>
                            </div>
                            <div className='ms-5'>
                                <h6>Registered Office Address:</h6>
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India </p>
                                <p> CIN : U51109KA2012PTC066107 </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='d-flex flex-row '>
                        <div className='mx-4'>
                          
                            <i class="fa-solid fa-briefcase"></i>
                            <a href=''><span>Become a Seller</span></a>
                        </div>
                        <div className='mx-4'>
                            <i class="fa-solid fa-star"></i>
                            <a href=''><span>Advertise</span></a>
                        </div>
                        <div className='mx-4'>
                            <i class="fa-solid fa-gift"></i>
                            <a href=''><span>Gift Cards</span></a>
                        </div>
                        <div className='mx-4'>
                            <i class="fa-regular fa-circle-question"></i>
                            <a href=''><span>Help Center</span></a>
                        </div>
                        <div className='mx-4'>
                            <span>© 2007-2023 Flipkart.com</span>
                        </div>
                        <div className='mx-5'>
                            <img src={payment}></img>
                            
                        </div>
                       
                       
</div>
                    </div>
                </div>
            </div>
       
        </>
    )
}
