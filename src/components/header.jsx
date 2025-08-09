
export function Header() {
    return (
        <div>
            {/* Header Section */}
            <header className="header">
            <section className="row -i-ctr -fw-nw -pvm">
                <div className="col3 -df -i-ctr">
                <a href="/" className="-df -i-ctr -mra">
                    <svg
                    role="img"
                    aria-label="Jumia Nigeria: Online Shopping for Electronics, Phones & Fashion"
                    viewBox="0 0 172 30"
                    className="ic"
                    width="134"
                    height="30"
                    >
                    <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-shop-jumia.9dea3b69.svg#logo" />
                    </svg>
                </a>
                </div>

                {/* Search Form */}
                <form
                id="search"
                method="get"
                className="cola -df"
                action="/catalog/"
                data-track-providers="ga4|moengage"
                data-track-onsubmit="search"
                >
                <div className="find">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                    <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#search" />
                    </svg>
                    <input
                    type="text"
                    name="q"
                    id="fi-q"
                    placeholder="Search products, brands and categories"
                    aria-label="Search"
                    autoComplete="off"
                    required
                    />
                    <button type="button" className="rst" aria-label="Reset">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#close" />
                    </svg>
                    </button>
                    <div className="sug"></div>
                </div>
                <button className="btn _prim _md -mls -fsh0">Search</button>
                </form>

                {/* Account / Sign In Dropdown */}
                <div className="col -df -j-bet -m -phn -i-ctr">
                <div className="dpdw _pcent" data-dpdw="true">
                    <input
                    id="dpdw-login"
                    className="tgl"
                    type="checkbox"
                    aria-controls="dpdw-login-box"
                    aria-haspopup="true"
                    aria-label="Account"
                    />
                    <label className="trig -df -i-ctr -fs16" htmlFor="dpdw-login">
                    <span className="-fsh0 -mrs">
                        <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#person" />
                        </svg>
                    </span>
                    <span className="-elli">Account</span>
                    <svg viewBox="0 0 24 24" className="ic -fsh0 -mls" width="18" height="18">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-down" />
                    </svg>
                    </label>

                    <div className="box -r" role="menu" aria-labelledby="dpdw-login" id="dpdw-login-box">
                    <div className="inbox">
                        <div className="-pam -hr-bb">
                        <a
                            rel="nofollow"
                            href="/customer/account/login/?return=%2F%3Fsrsltid%3DAfmBOoqpD2iz_aeEZz0hU_yxSZYtwvt8aj6QQnGqALtJ-6AwZl0dylEB"
                            className="btn _prim -fw _md"
                        >
                            Sign In
                        </a>
                        </div>

                        {/* Account Options */}
                        <a
                        rel="nofollow"
                        href="/customer/account/index/"
                        className="-df -i-ctr -pas -hov-bg-gy05 -hov-m"
                        >
                        <svg viewBox="0 0 24 24" className="ic -mrm -fsh0" width="24" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#person" />
                        </svg>
                        My Account
                        </a>

                        <a
                        rel="nofollow"
                        href="/customer/order/index/"
                        className="-df -i-ctr -pas -hov-bg-gy05 -hov-m"
                        >
                        <svg viewBox="0 0 24 24" className="ic -mrm -fsh0" width="24" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#orders" />
                        </svg>
                        Orders
                        </a>

                        <a
                        rel="nofollow"
                        href="/customer/wishlist/index/"
                        className="-df -i-ctr -pas -hov-bg-gy05 -hov-m"
                        >
                        <svg viewBox="0 0 24 24" className="ic -mrm -fsh0" width="24" height="24">
                            <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#favorite-border" />
                        </svg>
                        Wishlist
                        </a>
                    </div>
                    </div>
                </div>

                {/* Help Dropdown */}
                <div className="dpdw _pcent" data-dpdw="true">
                    <input
                    id="dpdw-help"
                    className="tgl"
                    type="checkbox"
                    aria-controls="dpdw-help-box"
                    aria-haspopup="true"
                    aria-label="Help"
                    />
                    <label className="trig -df -i-ctr -fs16" htmlFor="dpdw-help">
                    <span className="-fsh0 -mrs">
                        <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#help-outline" />
                        </svg>
                    </span>
                    <span className="-elli">Help</span>
                    <svg viewBox="0 0 24 24" className="ic -fsh0 -mls" width="18" height="18">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-down" />
                    </svg>
                    </label>

                    <div className="box -r" role="menu" aria-labelledby="dpdw-help" id="dpdw-help-box">
                    <div className="inbox">
                        <a
                        href="https://www.jumia.com.ng/sp-help-center/"
                        className="-df -i-ctr -phm -pv12 -hov-bg-gy05 -hov-m"
                        >
                        Help Center
                        </a>
                        <a
                        href="https://www.jumia.com.ng/sp-help-center/?page=place+an+order"
                        className="-df -i-ctr -phm -pv12 -hov-bg-gy05 -hov-m"
                        >
                        Place an order
                        </a>
                        <a
                        href="https://www.jumia.com.ng/sp-help-center/?page=pay+for+your+order"
                        className="-df -i-ctr -phm -pv12 -hov-bg-gy05 -hov-m"
                        >
                        Payment options
                        </a>
                        <a
                        href="https://www.jumia.com.ng/sp-help-center/?page=track+your+order"
                        className="-df -i-ctr -phm -pv12 -hov-bg-gy05 -hov-m"
                        >
                        Track an order
                        </a>
                        <a
                        href="https://www.jumia.com.ng/sp-help-center/?page=cancel+an+order"
                        className="-df -i-ctr -phm -pv12 -hov-bg-gy05 -hov-m"
                        >
                        Cancel an order
                        </a>
                        <a
                        href="https://www.jumia.com.ng/sp-help-center/?page=create+a+return"
                        className="-df -i-ctr -phm -pv12 -hov-bg-gy05 -hov-m"
                        >
                        Returns &amp; Refunds
                        </a>

                        <div className="-hr -pam">
                        <div className="-tac _hx2 -fs0">
                            <button
                            className="btn _prim _md _i -fw"
                            data-btn-lc="true"
                            data-track-onclick="true"
                            data-eventname="live_chat_open"
                            data-eventcategory="LiveChat"
                            data-eventaction="open"
                            >
                            <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                                <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#chat" />
                            </svg>
                            <span>Live Chat</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Cart Link */}
                <a className="-df -i-ctr -gy9 -hov-or5 -phs -fs16" href="/cart/">
                    <span id="ci" className="-mrs -fs0">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#shopping-cart" />
                    </svg>
                    </span>
                    Cart
                </a>

                </div>
            </section>
            </header>

        </div>
    )
}
export default Header;
