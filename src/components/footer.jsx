

export const Footer = () => {
    return (
        <div>

            <footer className="-pbm -fs12 -bg-gy7 -gy05">
                <div className="-bg-gy9 -mbm">
                    <div className="row -ptl">
                    <div className="col4">
                    <svg viewBox="0 0 172 30" className="ic" width="140" height="32">
                    <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-shop-jumia.9dea3b69.svg#logo-inv"></use>
                    </svg>
                    </div>

                    <div className="col7 -df -d-co -j-bet">
                    <div>
                    <div className="f-t -pbs">New to Jumia?</div>
                    Subscribe to our newsletter to get updates on our latest offers!
                    </div>

                    <form
                    method="post"
                    id="nl-ft-f"
                    action="/newsletter/subscription/default/"
                    className="-pts"
                    data-track-providers="moengage"
                    data-track-onsuccess="newsletterSubscribe"
                    >
                    <div className="-df -i-start">
                        <div className="fi-w _ic">
                        <input
                            placeholder="Enter E-mail Address"
                            required
                            className="fi"
                            type="email"
                            id="fi-nl-ft-email"
                            name="email"
                            aria-label="E-mail"
                        />
                        <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#email"></use>
                        </svg>
                        </div>
                        <button className="brd-btn _sqr -phl -mas">Subscribe</button>
                    </div>

                    <div className="fi-w _cb -dif">
                        <input
                        required
                        className="cb"
                        type="checkbox"
                        value="1"
                        id="fi-nl-ft-legalText"
                        name="legalText"
                        />
                        <label className="lbl -fs12 -gy3" htmlFor="fi-nl-ft-legalText">
                        I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.
                        </label>
                        <div className="-fw">
                        <a
                            className="_link -or5 -fs12"
                            target="_blank"
                            rel="noopener"
                            href="https://www.jumia.com.ng/sp-privacy/"
                        >
                            I accept the Legal Terms
                        </a>
                        </div>
                    </div>
                    <input name="csrfToken" value="88d9cddc119f47b17f7f80da7a940fb7" type="hidden" />
                    </form>
                    </div>

                    <div className="col4 -mla">
                    <div className="-df">
                    <svg viewBox="0 0 40 40" className="ic -fsh0" width="40" height="40">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-shop-jumia.9dea3b69.svg#app"></use>
                    </svg>
                    <div className="-plm">
                        <div className="f-t -pbs">DOWNLOAD JUMIA FREE APP</div>
                        Get access to exclusive offers!
                    </div>
                    </div>

                    <div className="-df -pts -fw-w">
                    <a
                        href="https://itunes.apple.com/app/id925015459?mt=8"
                        title="Get it on the App Store"
                        className="_sqr ic-link -dif -mts -mrm"
                        target="_blank"
                        rel="nofollow noopener"
                    >
                        <svg viewBox="0 0 75 20" className="ic" width="75" height="20">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#appstore"></use>
                        </svg>
                    </a>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.jumia.android&amp;referrer=adjust_reftag%3DcdTxOjM"
                        title="Get it on Google Play"
                        className="_sqr ic-link -dif -mts -mrm"
                        target="_blank"
                        rel="nofollow noopener"
                    >
                        <svg viewBox="0 0 84 20" className="ic" width="84" height="20">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#googleplay"></use>
                        </svg>
                    </a>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="row -pbl">
                    <div className="col4 -df -d-co -pvs">
                        <span className="f-t -pbm">Need Help?</span>

                        <button
                        className="-gy05 -pbxs -cp -ahf -tal"
                        data-btn-lc="true"
                        data-track-onclick="true"
                        data-eventname="live_chat_open"
                        data-eventcategory="LiveChat"
                        data-eventaction="open"
                        data-eventlabel="footer"
                        >
                        Chat with us
                        </button>

                        <ul className="-lsn">
                        <li><a href="https://www.jumia.com.ng/sp-help-center/" className="_link -pbxs">Help Center</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-contact/" className="_link -pbxs">Contact Us</a></li>
                        </ul>

                        <span className="f-t -pvm">Useful Links</span>

                        <ul className="-lsn">
                        <li><a href="https://www.jumia.com.ng/mlp-service-centers/" className="_link -pbxs">Service Center</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-help-center/" className="_link -pbxs">How to shop on Jumia?</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-help-center/?page=track+your+order" className="_link -pbxs">Delivery options and timelines</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-help-center/?page=create+a+return/" className="_link -pbxs">How to return a product on Jumia?</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-jumia-corporate/" className="_link -pbxs">Corporate and bulk purchases</a></li>
                        <li><a href="https://forms-prod2.sprinklr.com/guided-workflows/64351818df46305b9c8ba24e?gwId=65264ff2645a674786de59da&amp;viewType=FULL_PAGE" className="_link -pbxs">Report a Product</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-dispute-resolution/" className="_link -pbxs">Dispute Resolution Policy</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-help-center/?page=create+a+return/" className="_link -pbxs">Returns &amp; Refund Timeline</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-returns-refunds-policy/" className="_link -pbxs">Return Policy</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-pickup-stations/" className="_link -pbxs">Pickup Stations</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-jumia-delivery/" className="_link -pbxs">Jumia Delivery</a></li>
                        </ul>
                    </div>

                    <div className="col4 -df -d-co -pvs">
                        <span className="f-t -pbm">ABOUT JUMIA</span>
                        <ul className="-lsn">
                        <li><a href="https://www.jumia.com.ng/sp-about_us/" className="_link -pbxs">About us</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-careers/" className="_link -pbxs">Jumia careers</a></li>
                        <li><a href="https://group.jumia.com/" className="_link -pbxs">Corporate Website</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-terms-of-use/" className="_link -pbxs">Terms and Conditions</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-privacy/" className="_link -pbxs">Privacy Notice</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-jumia-store-credit-terms/" className="_link -pbxs">Jumia Store Credit Terms &amp; Conditions</a></li>
                        <li><a href="/sp-payment-information-guidelines/" className="_link -pbxs">Jumia Payment Information Guidelines</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-cookie-notice/" className="_link -pbxs">Cookie Notice</a></li>
                        <li><a href="https://www.jumia.com.ng/mlp-official-stores/" className="_link -pbxs">Official Stores</a></li>
                        <li><a href="https://www.jumia.com.ng/flash-sales/" className="_link -pbxs">Flash Sales</a></li>
                        </ul>
                    </div>

                    <div className="col4 -df -d-co -pvs">
                        <span className="f-t -pbm">MAKE MONEY WITH JUMIA</span>
                        <ul className="-lsn">
                        <li><a href="https://www.jumia.com.ng/sp-marketplace-vendor/" className="_link -pbxs">Sell on Jumia</a></li>
                        <li><a href="https://vendorhub.jumia.com.ng/" className="_link -pbxs">Vendor hub</a></li>
                        <li><a href="https://www.jumia.com.ng/sp-jforce/" className="_link -pbxs">Become a Sales Consultant</a></li>
                        </ul>
                    </div>

                    <div className="col4 row -c-start -pvs">
                        <span className="f-t col16 -pbm">JUMIA INTERNATIONAL</span>

                        <ul className="col5 -df -d-co -lsn">
                        <li><a href="https://www.jumia.com.dz/" className="_link -pbxs">Algeria</a></li>
                        <li><a href="https://www.jumia.com.eg/" className="_link -pbxs">Egypt</a></li>
                        <li><a href="https://www.jumia.com.gh/" className="_link -pbxs">Ghana</a></li>
                        <li><a href="https://www.jumia.ci/" className="_link -pbxs">Ivory Coast</a></li>
                        </ul>

                        <ul className="col5 -df -d-co -lsn">
                        <li><a href="https://www.jumia.co.ke/" className="_link -pbxs">Kenya</a></li>
                        <li><a href="https://www.jumia.ma/" className="_link -pbxs">Morocco</a></li>
                        <li><a href="https://www.jumia.sn/" className="_link -pbxs">Senegal</a></li>
                        <li><a href="https://www.jumia.ug/" className="_link -pbxs">Uganda</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row -pbl">
                    <div className="col4 row">
                        <div className="f-t col16 -pbm">JOIN US ON</div>

                        <div className="col16 -phn -fs0">
                        <a
                            href="https://www.facebook.com/jumia.com.ng/"
                            title="Facebook Jumia Nigeria"
                            className="ic-link -pas"
                            rel="noopener"
                            target="_blank"
                        >
                            <svg viewBox="0 0 24 24" className="ic" width="26" height="26">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#soc-facebook"></use>
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/c/JumiaNigeriaNG"
                            title="YouTube Jumia Nigeria"
                            className="ic-link -pas"
                            rel="noopener"
                            target="_blank"
                        >
                            <svg viewBox="0 0 24 24" className="ic" width="26" height="26">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#soc-youtube"></use>
                            </svg>
                        </a>

                        <a
                            href="https://www.instagram.com/jumianigeria/"
                            title="Instagram Jumia Nigeria"
                            className="ic-link -pas"
                            rel="noopener"
                            target="_blank"
                        >
                            <svg viewBox="0 0 24 24" className="ic" width="26" height="26">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#soc-instagram"></use>
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com/JumiaNGHelp"
                            title="Live Help on Twitter Jumia Nigeria"
                            className="ic-link -pas"
                            rel="noopener"
                            target="_blank"
                        >
                            <svg viewBox="0 0 24 24" className="ic" width="26" height="26">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#soc-twitter"></use>
                            </svg>
                        </a>

                        <a
                            href="https://www.tiktok.com/@jumiangr"
                            title="Tik Tok"
                            className="ic-link -pas"
                            rel="noopener"
                            target="_blank"
                        >
                            <svg viewBox="0 0 24 24" className="ic" width="26" height="26">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#soc-tiktok"></use>
                            </svg>
                        </a>
                        </div>
                    </div>

                    <div className="col12 row">
                        <div className="f-t col16 -pbm">PAYMENT METHODS</div>
                        <div className="col16 -phn -df -fw-w -fs0">
                        <a
                            href="https://www.jumia.com.ng/sp-cash-on-delivery/"
                            title="Payment on delivery"
                            className="ic-link -pas"
                        >
                            <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#pay-cashondelivery"></use>
                            </svg>
                        </a>

                        <a
                            href="https://www.jumia.com.ng/sp-credit-cards/"
                            title="Mastercard"
                            className="ic-link -pas"
                        >
                            <svg viewBox="0 0 36 24" className="ic" width="36" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#pay-mastercard"></use>
                            </svg>
                        </a>

                        <a
                            href="https://www.jumia.com.ng/sp-credit-cards/"
                            title="Visa"
                            className="ic-link -pas"
                        >
                            <svg viewBox="0 0 31 24" className="ic" width="31" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#pay-visa"></use>
                            </svg>
                        </a>

                        <a
                            href="https://www.jumia.com.ng/sp-credit-cards/"
                            title="Verve"
                            className="ic-link -pas"
                        >
                            <svg viewBox="0 0 42 24" className="ic" width="42" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#pay-verve"></use>
                            </svg>
                        </a>
                        </div>
                    </div>
                </div>

                <div className="row -pbl">
                    <ul className="col2 -df -d-co -lsn">
                        <li>
                        <a href="/adidas/" className="_link -pbxs">ADIDAS</a>
                        </li>
                    </ul>
                    <ul className="col2 -df -d-co -lsn">
                        <li>
                        <a href="/nike/" className="_link -pbxs">Nike</a>
                        </li>
                    </ul>
                    <ul className="col2 -df -d-co -lsn">
                        <li>
                        <a href="/samsung/" className="_link -pbxs">Samsung</a>
                        </li>
                    </ul>
                </div>
            
                <div className="vb row -i-ctr -j-ctr _foot _gy5 -hr -mtl">
                    <div className="col3 -df -j-start"></div>

                    <div className="col10 -df -j-ctr -fs0">
                        <a
                        href="https://pay.jumia.com.ng/?utm_source=jumia&utm_medium=mall&utm_campaign=venturebar"
                        className="vent-link"
                        title="JumiaPay"
                        rel="nofollow noopener"
                        target="_blank"
                        >
                        <svg viewBox="0 0 60 24" className="ic" width="60" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#venture-pay"></use>
                        </svg>
                        </a>

                        <a
                        href="https://www.jumia.com.ng/sp-jumia-delivery/"
                        className="vent-link"
                        title="jumia delivery"
                        rel="nofollow noopener"
                        target="_blank"
                        >
                        <svg viewBox="0 0 111 24" className="ic" width="111" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#venture-delivery"></use>
                        </svg>
                        </a>
                    </div>

                    <div className="col3 -df -j-end -wt -mla"></div>
                </div>

            </footer>
        
        </div>
    )
}
export default Footer;
