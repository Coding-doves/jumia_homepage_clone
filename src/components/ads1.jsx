import Banner from './banner';
import FAQs from './faqs'
import Footer from './footer';
import Header from './header';

export const Ads1 = () => {
  return (
    <div>
      <div id="jm">

        <Banner />

        {/* Venture Bar */}
        <div className="vb row -i-ctr -j-ctr _head -bg-gy05">
          {/* Sell on Jumia */}
          <div className="col3 -df -j-start">
            <a
              href="/marketplace-vendor/"
              className="_link -df -i-ctr -or5 -m -fs12"
              target="_blank"
              rel="noopener"
              >
              <svg viewBox="0 0 24 24" className="ic -f-or5 -maxs" width="16" height="16">
                <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-services" />
              </svg>
              Sell on Jumia
            </a>
          </div>

          {/* Jumia & JumiaPay logos */}
          <div className="col10 -df -j-ctr -fs0">
            <span className="vent-link" title="Jumia">
              <svg viewBox="0 0 75 24" className="ic" width="75" height="24">
                <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#venture-jumia" />
              </svg>
            </span>

            <a
              href="https://pay.jumia.com.ng/?utm_source=jumia&amp;utm_medium=mall&amp;utm_campaign=venturebar"
              className="vent-link"
              title="JumiaPay"
              rel="nofollow noopener"
              target="_blank"
              >
              <svg viewBox="0 0 60 24" className="ic" width="60" height="24">
                <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#venture-pay" />
              </svg>
            </a>

            {/* Jumia Delivery Logo */}
            <a
              href="https://www.jumia.com.ng/sp-jumia-delivery/"
              className="vent-link"
              title="jumia delivery"
              rel="nofollow noopener"
              target="_blank"
              >
              <svg viewBox="0 0 111 24" className="ic" width="111" height="24">
                <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#venture-delivery" />
              </svg>
            </a>
          </div>
          {/* Empty Column */}
          <div class="col3 -df -j-end -wt -mla -gy5"></div>
        </div>

        <Header />

        <main className="has-b2top">
          <style>
            {`@media(min-width:1200px){
                main {
                  background: center 0 no-repeat url('https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/April/aotm-BG_TAKEOVER.jpg');
                }
              }
              main {
                background-color: #FF9900;
              }`}
          </style>
          
          <div className="row -pvm">

            <div className="col16 -df -j-bet -pbs">
              <div className="flyout-w -fsh0 -fs0">
                <div className="flyout" role="menu">
                  <a href="https://www.jumia.com.ng/mlp-appliances/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-kitchen-dinning" />
                    </svg>
                    <span className="text">Appliances</span>
                  </a>

                  <a href="/phones-tablets/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-mobile" />
                    </svg>
                    <span className="text">Phones &amp; Tablets</span>
                  </a>

                  <a href="/health-beauty/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-beauty" />
                    </svg>
                    <span className="text">Health &amp; Beauty</span>
                  </a>

                  <a href="/home-office/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-home" />
                    </svg>
                    <span className="text">Home &amp; Office</span>
                  </a>

                  <a href="/electronics/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-tv" />
                    </svg>
                    <span className="text">Electronics</span>
                  </a>

                  <a href="/category-fashion-by-jumia/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-fashion" />
                    </svg>
                    <span className="text">Fashion</span>
                  </a>

                  <a href="https://www.jumia.com.ng/groceries/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-groceries" />
                    </svg>
                    <span className="text">Supermarket</span>
                  </a>

                  <a href="/computing/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-computing" />
                    </svg>
                    <span className="text">Computing</span>
                  </a>

                  <a href="/baby-products/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-baby" />
                    </svg>
                    <span className="text">Baby Products</span>
                  </a>

                  <a href="/video-games/" className="itm" role="menuitem">
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-games" />
                    </svg>
                    <span className="text">Gaming</span>
                  </a>

                  <a href="/musical-instruments/" className="itm" role="menuitem">
                    <span className="text">Musical Instruments</span>
                  </a>

                  <span className="itm" role="menuitem" tabIndex={0}>
                    <svg viewBox="0 0 24 24" className="ic -mrxs -fsh0" width="20" height="20">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#cat-othercategories" />
                    </svg>
                    <span className="text">Other categories</span>
                  </span>
                </div>
              </div>

              <div
                id="sl-topblock"
                className="sldr _img _main -rad4 -oh -fsh0 -mhm"
                data-track-onsliderview="eecPromo"
              >
                <input
                  type="radio"
                  id="sl-topblock-sld-1"
                  name="sl-topblock-sld"
                  className="sld"
                  defaultChecked
                />
                <a
                  href="https://www.jumia.com.ng/mlp-kids-corner/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_CP_KC_HPAGE"
                  data-ga4-promotion_name="SX_CP_KC_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/week_32/Kids-Corner/712x384-UPDATED.jpg"
                  data-ga4-creative_slot="slider_1_1"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/week_32/Kids-Corner/712x384-UPDATED.jpg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="Kids Corner"
                  />
                </a>
                <label className="lab" htmlFor="sl-topblock-sld-8" aria-label="Go to slide 8"></label>
                <label className="dot" htmlFor="sl-topblock-sld-1" aria-label="Go to slide 1"></label>

                <input
                  type="radio"
                  id="sl-topblock-sld-2"
                  name="sl-topblock-sld"
                  className="sld"
                />
                <a
                  href="https://www.jumia.com.ng/mlp-must-have-clothing/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_CP_KC_HPAGE"
                  data-ga4-promotion_name="SX_CP_KC_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/Must-have-clothing/Artboard-1.png"
                  data-ga4-creative_slot="slider_1_2"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/Must-have-clothing/Artboard-1.png"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="MUST HAVE CLOTH"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-1" aria-label="Go to slide 1"></label>
                <label className="dot" htmlFor="sl-topblock-sld-2" aria-label="Go to slide 2"></label>

                <input type="radio" id="sl-topblock-sld-3" name="sl-topblock-sld" className="sld" />
                <a
                  href="https://www.jumia.com.ng/mlp-ecoflow-official-store/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_ADS_ECF_HPAGE"
                  data-ga4-promotion_name="SX_ADS_ECF_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/August/eccoflow/712desktop.jpg"
                  data-ga4-creative_slot="slider_1_3"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/August/eccoflow/712desktop.jpg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="ECOFLOW"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-2" aria-label="Go to slide 2"></label>
                <label className="dot" htmlFor="sl-topblock-sld-3" aria-label="Go to slide 3"></label>

                <input type="radio" id="sl-topblock-sld-4" name="sl-topblock-sld" className="sld" />
                <a
                  href="https://www.jumia.com.ng/mlp-awoof-of-the-month/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_ADS_AWOOF_HPAGE"
                  data-ga4-promotion_name="SX_ADS_AWOOF_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/August/updated/712X384.png"
                  data-ga4-creative_slot="slider_1_4"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/August/updated/712X384.png"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="AWOOF DEALS"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-3" aria-label="Go to slide 3"></label>
                <label className="dot" htmlFor="sl-topblock-sld-4" aria-label="Go to slide 4"></label>

                <input type="radio" id="sl-topblock-sld-5" name="sl-topblock-sld" className="sld" />
                <a
                  href="https://www.jumia.com.ng/computing/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_CP_UYSTP_HPAGE"
                  data-ga4-promotion_name="SX_CP_UYSTP_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Comput/712x384.png"
                  data-ga4-creative_slot="slider_1_5"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Comput/712x384.png"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="UPGRADE YOUR SP"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-4" aria-label="Go to slide 4"></label>
                <label className="dot" htmlFor="sl-topblock-sld-5" aria-label="Go to slide 5"></label>

                <input type="radio" id="sl-topblock-sld-6" name="sl-topblock-sld" className="sld" />
                <a
                  href="https://www.jumia.com.ng/flash-sales/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_FSL_HPAGE"
                  data-ga4-promotion_name="SX_FSL_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-initiatives/flashsale/2024/Desktop_Homepage_Slider__712x384.jpg"
                  data-ga4-creative_slot="slider_1_6"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-initiatives/flashsale/2024/Desktop_Homepage_Slider__712x384.jpg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="FLASH SALES"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-5" aria-label="Go to slide 5"></label>
                <label className="dot" htmlFor="sl-topblock-sld-6" aria-label="Go to slide 6"></label>

                <input type="radio" id="sl-topblock-sld-7" name="sl-topblock-sld" className="sld" />
                <a
                  href="https://www.jumia.com.ng/mlp-power-boost/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_CP_PWR-BOOST_HPAGE"
                  data-ga4-promotion_name="SX_CP_PWR-BOOST_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/week_32/Power-Boost/712x384.png"
                  data-ga4-creative_slot="slider_1_7"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/week_32/Power-Boost/712x384.png"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="POWER BOOST"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-6" aria-label="Go to slide 6"></label>
                <label className="dot" htmlFor="sl-topblock-sld-7" aria-label="Go to slide 7"></label>

                <input type="radio" id="sl-topblock-sld-8" name="sl-topblock-sld" className="sld" />
                <a
                  href="https://www.jumia.com.ng/sp-jumia-delivery/"
                  className="itm"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_SX_CP_DELIVERY_HPAGE"
                  data-ga4-promotion_name="SX_CP_DELIVERY_HPAGE"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/update/712x384.jpg"
                  data-ga4-creative_slot="slider_1_8"
                >
                  <img
                    data-lazy-slide="true"
                    data-src="https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/update/712x384.jpg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                    className="-fw"
                    alt="JUMIA DELIVERY"
                  />
                </a>

                <label className="lab" htmlFor="sl-topblock-sld-7" aria-label="Go to slide 7"></label>
                <label className="dot" htmlFor="sl-topblock-sld-8" aria-label="Go to slide 8"></label>
                <label className="lab" htmlFor="sl-topblock-sld-8" aria-label="Go to slide 8"></label>
                <label className="lab" htmlFor="sl-topblock-sld-1" aria-label="Go to slide 1"></label>

                <div className="left">
                  <svg viewBox="0 0 24 24" className="ic -f-wt" width="24" height="24">
                    <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-left" />
                  </svg>
                </div>

                <div className="right">
                  <svg viewBox="0 0 24 24" className="ic -f-wt" width="24" height="24">
                    <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-right" />
                  </svg>
                </div>
              </div>

              <div className="-df -c-bet -fw-w -fg1 -m-dn -h-flyout -oh -fs0">

                <div className="card -df -fw-w -c-spar -fg1 -phm -h-50p_-m -oh">

                  <a
                    href="https://www.jumia.com.ng/sp-calltoorder/"
                    className="-df -i-ctr -oh -fw"
                    data-track-onclick="eecPromo"
                    data-ga4-promotion_id="home_default_CALL TO ORDER"
                    data-ga4-promotion_name="CALL TO ORDER"
                    data-ga4-creative_slot="topblock_top_1"
                    data-ga4-creative_name="https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png"
                    data-track-onview="eecPromo"
                  >
                    <img
                      data-lazy="true"
                      data-src="https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                      className="_ni -fsh0 -mrs"
                      width="34"
                      height="34"
                      alt="CALL TO ORDER"
                    />
                    <div className="-flupp -gy9 -oh">
                      <div className="-m -fs14 -elli">CALL TO ORDER</div>
                      <div className="-fs12 -elli">0700-600-0000, 02018883300</div>
                    </div>
                  </a>              

                  <a
                    href="https://vendorcenter.jumia.com/sign-up"
                    className="-df -i-ctr -oh -fw"
                    data-track-onclick="eecPromo"
                    data-ga4-promotion_id="home_default_Sell on Jumia"
                    data-ga4-promotion_name="Sell on Jumia"
                    data-ga4-creative_slot="topblock_top_2"
                    data-ga4-creative_name="https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png"
                    data-track-onview="eecPromo"
                  >
                    <img
                      data-lazy="true"
                      data-src="https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                      className="_ni -fsh0 -mrs"
                      width="34"
                      height="34"
                      alt="Sell on Jumia"
                    />
                    <div className="-flupp -gy9 -oh">
                      <div className="-m -fs14 -elli">Sell on Jumia</div>
                      <div className="-fs12 -elli"></div>
                    </div>
                  </a>

                  <a
                    href="https://www.jumia.com.ng/sp-jumia-delivery/"
                    className="-df -i-ctr -oh -fw"
                    data-track-onclick="eecPromo"
                    data-ga4-promotion_id="home_default_Send Your Packages"
                    data-ga4-promotion_name="Send Your Packages"
                    data-ga4-creative_slot="topblock_top_3"
                    data-ga4-creative_name="https://ng.jumia.is/cms/0-1-homepage/bsb/delivery-new.jpg"
                    data-track-onview="eecPromo"
                  >
                    <img
                      data-lazy="true"
                      data-src="https://ng.jumia.is/cms/0-1-homepage/bsb/delivery-new.jpg"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                      className="_ni -fsh0 -mrs"
                      width="34"
                      height="34"
                      alt="Send Your Packages"
                    />
                    <div className="-flupp -gy9 -oh">
                      <div className="-m -fs14 -elli">Send Your Packages</div>
                      <div className="-fs12 -elli"></div>
                    </div>
                  </a>
                </div>

                <div
                  className="-fw"
                  data-track-onclick="eecPromo"
                  data-ga4-promotion_id="home_default_JFORCE"
                  data-ga4-promotion_name="JFORCE"
                  data-ga4-creative_slot="topblock_bottom"
                  data-ga4-creative_name="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif"
                  data-track-onview="eecPromo"
                >
                  <a
                    href="https://www.jumia.com.ng/sp-jforce/"
                    className="card ar _109-92 -oh -fs0 -h-50p_-m"
                  >
                    <img
                      data-lazy="true"
                      data-src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                      alt="JFORCE"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col16 -pvs">
              <section className="card -oh _fw -rad4">
                <div className="crs-w _main _thumb -fs0 _nav -tac _c-btn-on" data-crs-onView>
                  <div className="crs" tabIndex="0">
                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/mlp-awoof-of-the-month/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_AWOOF_OF_THE_HPAGE"
                        data-ga4-promotion_name="THN_AWOOF_OF_THE_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/awoof_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_1"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/awoof_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Awoof Deals"
                          />
                        </div>

                        <p className="-maxs -fs14 -elli2">Awoof Deals</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/mlp-clearance-sale/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_CLEARANCE_SALES_HPAGE"
                        data-ga4-promotion_name="THN_CLEARANCE_SALES_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/clearance_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_2"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/clearance_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Up to 80% Off"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Up to 80% Off</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/sp-jumia-delivery/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_JUMIA_DELIVERY_HPAGE"
                        data-ga4-promotion_name="THN_JUMIA_DELIVERY_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jumia-delivery_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_3"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jumia-delivery_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Send Packages Securely"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Send Packages Securely</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/mlp-global-new-arrival/?sort=newest#catalog-listing"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_NEW_ARRIVAL_HPAGE"
                        data-ga4-promotion_name="THN_NEW_ARRIVAL_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/new_arrival_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_4"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/new_arrival_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="New Arrival"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">New Arrival</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/sp-jforce/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_JUMIA_FORCE_HPAGE"
                        data-ga4-promotion_name="THN_JUMIA_FORCE_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jforce_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_5"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jforce_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Earn While You Shop"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Earn While You Shop</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/mlp-jumia-magic-deals/category-fashion-by-jumia/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_850_OFF_HPAGE"
                        data-ga4-promotion_name="THN_850_OFF_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/850.jpg"
                        data-ga4-creative_slot="thumbnails_1_6"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/850.jpg"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Unlock Your Deal"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Unlock Your Deal</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/mlp-banger-deals/?sort=newest"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_BANGA_DEALS_HPAGE"
                        data-ga4-promotion_name="THN_BANGA_DEALS_HPAGE"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/banga-deals_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_7"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/banga-deals_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Banger deals"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Banger deals</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/sporting-goods/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_CAT_SPORTING_GOODS"
                        data-ga4-promotion_name="THN_CAT_SPORTING_GOODS"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/sporting-goods_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_8"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/sporting-goods_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Sporting Goods"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Sporting Goods</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/video-games/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_CAT_VIDEO_GAMES"
                        data-ga4-promotion_name="THN_CAT_VIDEO_GAMES"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/video-games_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_9"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/video-games_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Video Games"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Video Games</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/toys-games/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_CAT_TOYS_GAMES"
                        data-ga4-promotion_name="THN_CAT_TOYS_GAMES"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/toys-games_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_10"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/toys-games_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Toys & Games"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Toys &amp; Games</p>
                      </a>
                    </div>

                    <div className="itm -pvs _v">
                      <a
                        className="-fw -rad4 -hov-e-2"
                        href="https://www.jumia.com.ng/groceries/"
                        data-track-onclick="eecPromo"
                        data-ga4-promotion_id="home_default_THN_GROCERIES"
                        data-ga4-promotion_name="THN_GROCERIES"
                        data-ga4-creative_name="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/groceries_220x220.png"
                        data-ga4-creative_slot="thumbnails_1_11"
                        data-track-onview="eecPromo"
                      >
                        <div className="ar _1-1">
                          <img
                            data-lazy="true"
                            data-src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/groceries_220x220.png"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                            className="-rad4"
                            alt="Groceries"
                          />
                        </div>
                        <p className="-maxs -fs14 -elli2">Groceries</p>
                      </a>
                    </div>
                  </div>

                  <button type="button" className="c-btn _prev _dis" aria-label="previous">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-left" />
                    </svg>
                  </button>

                  <button type="button" className="c-btn _next" aria-label="next">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-right" />
                    </svg>
                  </button>
                </div>
              </section>
            </div>

            <div class="col16 -pvs">
              <section class="card -oh _fw -rad4">       
                <header
                  className="row _no-g -fw-nw -j-bet -i-ctr -phm -mh-48px"
                  style={{ color: "#FFFFFF", background: "#e61601" }}
                >
                  <div className="ttl-w cola -df -i-ctr -oh col5">
                    <svg viewBox="0 0 24 24" className="ic -fsh0 -mrs" width="32" height="32">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-global.7c583f6c.svg#flash-sales" />
                    </svg>
                    <h2 className="-m -fs20 -elli">Flash Sales</h2>
                  </div>

                  <div className="col6 -mra -fs20 -tac">
                    Time Left:{" "}
                    <time
                      className="-b -ws-p"
                      dateTime="2025-08-08T09:59:59+01:00"
                      data-cd="true"
                    >
                      02h : 04m : 44s
                    </time>
                  </div>

                  <div className="col -df -j-end -fsh0">
                    <a href="/flash-sales/" className="-df -i-ctr -m -mls -pvxs">
                      <span>See All</span>
                      <svg style={{ fill: "#FFFFFF" }} viewBox="0 0 24 24" className="ic" width="24" height="24">
                        <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-right" />
                      </svg>
                    </a>
                  </div>
                </header>

                <div className="crs-w _main -phxs" data-crs-onView>
                  <div className="crs row _no-g -fw-nw _6cl-4cm -pvxs" tabIndex={0}>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/jiyue-flash-drive-3.0-64gb-metal-otg-micro-usb-type-c-338904807.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="GE779EA64SEQFNAFAMZ"
                          data-gtm-name="Flash Drive 3.0 64GB Metal OTG Micro USB Type-C"
                          data-gtm-price="2.60"
                          data-gtm-brand="JIYUE"
                          data-gtm-category="Computing/Computers & Accessories/Data Storage/USB Flash Drives"
                          data-gtm-dimension23="442384"
                          data-gtm-dimension26
                          data-gtm-dimension27
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="APWK|BLF|BLF_20|CFS|CP_12|CP_13|CP_29|CP_MT123|CP_MT21|CP_MT24|CP_UN11|Camp_59|JA|JA_20|JA_8|Merch_147|POD|TW|TW_04|TW_12"
                          data-gtm-dimension44="0"
                          data-gtm-position="1"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="JIYUE"
                          data-ga4-item_id="GE779EA64SEQFNAFAMZ"
                          data-ga4-item_name="Flash Drive 3.0 64GB Metal OTG Micro USB Type-C"
                          data-ga4-discount="2.51"
                          data-ga4-price="2.60"
                          data-ga4-tags="APWK|BLF|BLF_20|CFS|CP_12|CP_13|CP_29|CP_MT123|CP_MT21|CP_MT24|CP_UN11|Camp_59|JA|JA_20|JA_8|Merch_147|POD|TW|TW_04|TW_12"
                          data-ga4-item_category="Computing"
                          data-ga4-item_category2="Computers & Accessories"
                          data-ga4-item_category3="Data Storage"
                          data-ga4-item_category4="USB Flash Drives"
                          data-ga4-index="1"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/8409833/1.jpg?7650"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="JIYUE Flash Drive 3.0 64GB Metal OTG Micro USB Type-C"
                            />
                          </div>
                          <div className="name">
                            JIYUE Flash Drive 3.0 64GB Metal OTG Micro USB Type-C
                          </div>
                          <div className="prc" data-oprc="₦ 9,118">₦ 4,640</div>
                          <div className="bdg _dsct">49%</div>
                          <div className="stk">
                            48 items left
                            <div className="meter _s"
                              style={{
                                backgroundImage: "linear-gradient(to right,#f68b1e 60%,#c7c7cd 60%)",
                              }}>
                            </div>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/berrykey-mens-office-polos-shirts-casual-joggers-tshirt-66785055.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="FA203AA0WS3M6NAFAMZ"
                          data-gtm-name="Mens Office Polos Shirts Casual Joggers Tshirt"
                          data-gtm-price="4.78"
                          data-gtm-brand="Berrykey"
                          data-gtm-category="Fashion/Men's Fashion/Clothing/Shirts/Polos"
                          data-gtm-dimension23="88599"
                          data-gtm-dimension26
                          data-gtm-dimension27
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="APWK|BLF|BLF_06|BLF_20|CFS|COL_100|COL_30|CPR_621|CP_15|CP_24|CP_MT14|CP_MT143|CP_MT149|CP_MT24|CP_MT32|CP_MT35|CP_MT36|CP_MT42|CP_MT54|CP_MT57|CP_MT58|CP_MT59|CP_MT63|CP_MT99|CP_UN107|CP_UN109|Camp_59|DOW_103|DOW_53|JA|JA_20|JA_7|JF_14|JMALL|UNDA_16"
                          data-gtm-dimension44="0"
                          data-gtm-position="2"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Berrykey"
                          data-ga4-item_id="FA203AA0WS3M6NAFAMZ"
                          data-ga4-item_name="Mens Office Polos Shirts Casual Joggers Tshirt"
                          data-ga4-discount="2.62"
                          data-ga4-price="4.78"
                          data-ga4-tags="APWK|BLF|BLF_06|BLF_20|CFS|COL_100|COL_30|CPR_621|CP_15|CP_24|CP_MT14|CP_MT143|CP_MT149|CP_MT24|CP_MT32|CP_MT35|CP_MT36|CP_MT42|CP_MT54|CP_MT57|CP_MT58|CP_MT59|CP_MT63|CP_MT99|CP_UN107|CP_UN109|Camp_59|DOW_103|DOW_53|JA|JA_20|JA_7|JF_14|JMALL|UNDA_16"
                          data-ga4-item_category="Fashion"
                          data-ga4-item_category2="Men's Fashion"
                          data-ga4-item_category3="Clothing"
                          data-ga4-item_category4="Shirts"
                          data-ga4-item_category5="Polos"
                          data-ga4-index="2"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/058766/1.jpg?5846"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Berrykey Mens Office Polos Shirts Casual Joggers Tshirt"
                            />
                          </div>
                          <div className="name">Berrykey Mens Office Polos Shirts Casual Joggers Tshirt</div>
                          <div className="prc" data-oprc="₦ 8,980 - ₦ 13,200">₦ 8,528 - ₦ 8,575</div>
                          <div className="bdg _dsct">35%</div>
                          <div className="stk">
                            50 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage: "linear-gradient(to right,#f68b1e 62.5%,#c7c7cd 62.5%)",
                              }}
                            />
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/16-10watt-dc-standing-fan-with-remote-control-inverter-fan-cloud-energy-mpg8182042.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="OX980HL173918NAFAMZ"
                          data-gtm-name="16'' 10watt DC Standing Fan With Remote Control-INVERTER FAN"
                          data-gtm-price="27.19"
                          data-gtm-brand="Cloud Energy"
                          data-gtm-category="Home & Office/Home & Kitchen/Heating, Cooling & Air Quality/Household Fans/Standing Fans"
                          data-gtm-dimension23="107787"
                          data-gtm-dimension26
                          data-gtm-dimension27
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="APWK|Boost|CFS|COL_30|CP_1|CP_100|CP_11|CP_MT10|CP_MT101|CP_MT104|CP_MT119|CP_MT14|CP_MT144|CP_MT39|CP_MT73|CP_MT88|CP_MT90|CP_UN105|CP_UN109|CP_UN11|Camp_63|DOW_103|DOW_146|DOW_303|JA|JA_1|JA_20|JMALL|POD|xmas_04|xmas_13"
                          data-gtm-dimension44="0"
                          data-gtm-position="3"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Cloud Energy"
                          data-ga4-item_id="OX980HL173918NAFAMZ"
                          data-ga4-item_name="16'' 10watt DC Standing Fan With Remote Control-INVERTER FAN"
                          data-ga4-discount="0.84"
                          data-ga4-price="27.19"
                          data-ga4-tags="APWK|Boost|CFS|COL_30|CP_1|CP_100|CP_11|CP_MT10|CP_MT101|CP_MT104|CP_MT119|CP_MT14|CP_MT144|CP_MT39|CP_MT73|CP_MT88|CP_MT90|CP_UN105|CP_UN109|CP_UN11|Camp_63|DOW_103|DOW_146|DOW_303|JA|JA_1|JA_20|JMALL|POD|xmas_04|xmas_13"
                          data-ga4-item_category="Home & Office"
                          data-ga4-item_category2="Home & Kitchen"
                          data-ga4-item_category3="Heating, Cooling & Air Quality"
                          data-ga4-item_category4="Household Fans"
                          data-ga4-item_category5="Standing Fans"
                          data-ga4-index="3"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/375164/1.jpg?5204"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Cloud Energy 16'' 10watt DC Standing Fan With Remote Control-INVERTER FAN"
                            />
                          </div>
                          <div className="name">
                            Cloud Energy 16'' 10watt DC Standing Fan With Remote Control-INVERTER FAN
                          </div>
                          <div className="prc" data-oprc="₦ 50,000">₦ 48,500</div>
                          <div className="bdg _dsct">3%</div>
                          <div className="stk">
                            24 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage: "linear-gradient(to right,#f68b1e 48%,#c7c7cd 48%)",
                              }}
                            />
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/2l-industrial-8500w-food-crusher-blender-with-2-jar-silver-crest-mpg11072106.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="SI905HA6W7SC1NAFAMZ"
                          data-gtm-name="2L Industrial 8500W Food Crusher Blender With 2 Jar"
                          data-gtm-price="13.96"
                          data-gtm-brand="SILVER CREST"
                          data-gtm-category="Electronics/Home Appliances/Kitchen Appliances/Blenders, Mixers & Food Processors"
                          data-gtm-dimension23="493090"
                          data-gtm-dimension26
                          data-gtm-dimension27
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="CFS|CP_UN108|JMALL"
                          data-gtm-dimension44="0"
                          data-gtm-position="4"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="SILVER CREST"
                          data-ga4-item_id="SI905HA6W7SC1NAFAMZ"
                          data-ga4-item_name="2L Industrial 8500W Food Crusher Blender With 2 Jar"
                          data-ga4-discount="1.20"
                          data-ga4-price="13.96"
                          data-ga4-tags="CFS|CP_UN108|JMALL"
                          data-ga4-item_category="Electronics"
                          data-ga4-item_category2="Home Appliances"
                          data-ga4-item_category3="Kitchen Appliances"
                          data-ga4-item_category4="Blenders, Mixers & Food Processors"
                          data-ga4-index="4"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/9080814/1.jpg?9815"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="SILVER CREST 2L Industrial 8500W Food Crusher Blender With 2 Jar"
                            />
                          </div>
                          <div className="name">
                            SILVER CREST 2L Industrial 8500W Food Crusher Blender With 2 Jar
                          </div>
                        </a>
                      </article>
                    </div>
                      
                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a href="/syinix-2.2l-electric-kettle-silver-ske22u1-363941133.html" className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="SY201HA5IBT4ONAFAMZ"
                          data-gtm-name="2.2L Electric Kettle - Silver SKE22U1"
                          data-gtm-price="3.42"
                          data-gtm-brand="Syinix"
                          data-gtm-category="Home &amp; Office/Appliances/Small Appliances/Kettles"
                          data-gtm-dimension23="448872"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="APWK|BLF|Boost|CFS|CP_1|CP_MT73|CP_MT85|CP_MT88|CP_UN100|CP_UN108|Camp_63|JF_11|JMALL|TW"
                          data-gtm-dimension44="0"
                          data-gtm-position="5"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Syinix"
                          data-ga4-item_id="SY201HA5IBT4ONAFAMZ"
                          data-ga4-item_name="2.2L Electric Kettle - Silver SKE22U1"
                          data-ga4-discount="0.15"
                          data-ga4-price="3.42"
                          data-ga4-tags="APWK|BLF|Boost|CFS|CP_1|CP_MT73|CP_MT85|CP_MT88|CP_UN100|CP_UN108|Camp_63|JF_11|JMALL|TW"
                          data-ga4-item_category="Home &amp; Office"
                          data-ga4-item_category2="Appliances"
                          data-ga4-item_category3="Small Appliances"
                          data-ga4-item_category4="Kettles"
                          data-ga4-index="5"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct">
                          <div className="-fsh0 -pr -me-start -fw">
                            <img data-lazy="true" data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/1149363/1.jpg?4917"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img" width="185" height="185" alt="Syinix 2.2L Electric Kettle - Silver SKE22U1"/>
                          </div>
                          <div className="name">Syinix 2.2L Electric Kettle - Silver SKE22U1</div>
                          <div className="prc" data-oprc="₦ 6,369">₦ 6,100</div>
                          <div className="bdg _dsct">4%</div>
                          <div className="stk">50 items left
                            <div className="meter _s" style={{backgroundImage:"linear-gradient(to right,#f68b1e 100%,#c7c7cd 100%)"}}></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a href="/itel-city-100-7.65mm-slim-design-5200mah-android-12848gb-409243093.html" className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="IT724MP79E10YNAFAMZ"
                          data-gtm-name="City 100  7.65mm&quot; Slim Design 5200mah Android 128/4+8gb"
                          data-gtm-price="64.15"
                          data-gtm-brand="itel"
                          data-gtm-category="Phones &amp; Tablets/Mobile Phones/Smartphones/Android Phones"
                          data-gtm-dimension23="417702"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="CFS|CP_MT136|CP_MT34|JA|JMALL"
                          data-gtm-dimension44="0"
                          data-gtm-position="7"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="itel"
                          data-ga4-item_id="IT724MP79E10YNAFAMZ"
                          data-ga4-item_name="City 100  7.65mm&quot; Slim Design 5200mah Android 128/4+8gb"
                          data-ga4-discount="20.80"
                          data-ga4-price="64.15"
                          data-ga4-tags="CFS|CP_MT136|CP_MT34|JA|JMALL"
                          data-ga4-item_category="Phones &amp; Tablets"
                          data-ga4-item_category2="Mobile Phones"
                          data-ga4-item_category3="Smartphones"
                          data-ga4-item_category4="Android Phones"
                          data-ga4-index="7"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct">
                          <div className="-fsh0 -pr -me-start -fw">
                            <img data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/0342904/1.jpg?1756"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img" width="185" height="185"
                              alt="itel City 100  7.65mm&quot; Slim Design 5200mah Android 128/4+8gb" />
                          </div>
                          <div className="name">itel City 100  7.65mm" Slim Design 5200mah Android 128/4+8gb</div>
                          <div className="prc" data-oprc="₦ 151,503">₦ 114,411</div>
                          <div className="bdg _dsct">24%</div>
                          <div className="stk">46 items left
                            <div className="meter _s"
                              style={{backgroundImage:"linear-gradient(to right,#f68b1e 92%,#c7c7cd 92%)"}}></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a href="/xiaomi-redmi-14c-6.88-8gb-ram256gb-rom-android-14-starry-sky-blue-413926492.html" className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="XI363MP73OVPVNAFAMZ"
                          data-gtm-name="Redmi 14C 6.88'' 8GB RAM/256GB ROM Android 14 - Starry Sky Blue"
                          data-gtm-price="93.32"
                          data-gtm-brand="XIAOMI"
                          data-gtm-category="Phones &amp; Tablets/Mobile Phones/Smartphones/Android Phones"
                          data-gtm-dimension23="471346"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="CFS|CP_MT34"
                          data-gtm-dimension44="0"
                          data-gtm-position="8"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="XIAOMI"
                          data-ga4-item_id="XI363MP73OVPVNAFAMZ"
                          data-ga4-item_name="Redmi 14C 6.88'' 8GB RAM/256GB ROM Android 14 - Starry Sky Blue"
                          data-ga4-discount="6.48"
                          data-ga4-price="93.32"
                          data-ga4-tags="CFS|CP_MT34"
                          data-ga4-item_category="Phones &amp; Tablets"
                          data-ga4-item_category2="Mobile Phones"
                          data-ga4-item_category3="Smartphones"
                          data-ga4-item_category4="Android Phones"
                          data-ga4-index="8"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct">
                          <div className="-fsh0 -pr -me-start -fw">
                            <img data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/4629314/1.jpg?6422"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img" width="185" height="185"
                              alt="XIAOMI Redmi 14C 6.88'' 8GB RAM/256GB ROM Android 14 - Starry Sky Blue" />
                          </div>
                          <div className="name">XIAOMI Redmi 14C 6.88'' 8GB RAM/256GB ROM Android 14 - Starry Sky Blue</div>
                          <div className="prc" data-oprc="₦ 178,000">₦ 166,437</div>
                          <div className="bdg _dsct">6%</div>
                          <div className="stk">5 items left
                            <div className="meter _s"
                              style={{backgroundImage:"linear-gradient(to right,#b81a0a 10%,#c7c7cd 10%)"}}></div>
                          </div>
                        </a>
                      </article>
                    </div>
                    
                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/absolut-vodka-raspberri-100cl-228337457.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="AB055DB4K0CMENAFAMZ"
                          data-gtm-name="Vodka Raspberri 100cl"
                          data-gtm-price="9.29"
                          data-gtm-brand="Absolut"
                          data-gtm-category="Grocery/Drinks/Beer, Wine & Spirits/Spirits & Liquors/Vodka"
                          data-gtm-dimension23=""
                          data-gtm-dimension26=""
                          data-gtm-dimension27=""
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="BLF|BLF_08|CFS|CP_22|CP_24|CP_25|CP_27|CP_39|CP_MT103|CP_MT139|CP_MT14|CP_MT73|CP_MT76|CP_MT80|CP_MT88|CP_UN11|Camp_71|JA|JA_20|JA_9|JMALL|Merch_51|NORET_02|TW_13"
                          data-gtm-dimension44="0"
                          data-gtm-position="9"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Absolut"
                          data-ga4-item_id="AB055DB4K0CMENAFAMZ"
                          data-ga4-item_name="Vodka Raspberri 100cl"
                          data-ga4-discount="0.93"
                          data-ga4-price="9.29"
                          data-ga4-tags="BLF|BLF_08|CFS|CP_22|CP_24|CP_25|CP_27|CP_39|CP_MT103|CP_MT139|CP_MT14|CP_MT73|CP_MT76|CP_MT80|CP_MT88|CP_UN11|Camp_71|JA|JA_20|JA_9|JMALL|Merch_51|NORET_02|TW_13"
                          data-ga4-item_category="Grocery"
                          data-ga4-item_category2="Drinks"
                          data-ga4-item_category3="Beer, Wine & Spirits"
                          data-ga4-item_category4="Spirits & Liquors"
                          data-ga4-item_category5="Vodka"
                          data-ga4-index="9"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/4733822/2.jpg?1376"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Absolut Vodka Raspberri 100cl"
                            />
                          </div>
                          <div className="name">Absolut Vodka Raspberri 100cl</div>
                          <div className="prc" data-oprc="₦ 18,228">
                            ₦ 16,571
                          </div>
                          <div className="bdg _dsct">9%</div>
                          <div className="stk">
                            21 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#f68b1e 42%,#c7c7cd 42%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/oraimo-watch-es-2-1.95-amoled-ip68-smart-watch-279416053.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="OR537EA3VY6M1NAFAMZ"
                          data-gtm-name="Watch ES 2 1.95″ AMOLED IP68 Smart Watch"
                          data-gtm-price="30.48"
                          data-gtm-brand="Oraimo"
                          data-gtm-category="Phones & Tablets/Accessories/Smart Watches"
                          data-gtm-dimension23="270115"
                          data-gtm-dimension26=""
                          data-gtm-dimension27=""
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="APWK|BLF|BLF_01|BLF_05|CFS|CP_12|CP_13|CP_18|CP_19|CP_23|CP_28|CP_MT103|CP_MT136|CP_MT14|CP_MT142|CP_MT143|CP_MT34|CP_MT63|CP_MT65|CP_MT73|CP_MT87|CP_MT88|CP_UN300|Camp_72|JMALL"
                          data-gtm-dimension44="0"
                          data-gtm-position="10"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Oraimo"
                          data-ga4-item_id="OR537EA3VY6M1NAFAMZ"
                          data-ga4-item_name="Watch ES 2 1.95″ AMOLED IP68 Smart Watch"
                          data-ga4-discount="31.46"
                          data-ga4-price="30.48"
                          data-ga4-tags="APWK|BLF|BLF_01|BLF_05|CFS|CP_12|CP_13|CP_18|CP_19|CP_23|CP_28|CP_MT103|CP_MT136|CP_MT14|CP_MT142|CP_MT143|CP_MT34|CP_MT63|CP_MT65|CP_MT73|CP_MT87|CP_MT88|CP_UN300|Camp_72|JMALL"
                          data-ga4-item_category="Phones & Tablets"
                          data-ga4-item_category2="Accessories"
                          data-ga4-item_category3="Smart Watches"
                          data-ga4-index="10"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/0614972/1.jpg?9444"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Oraimo Watch ES 2 1.95″ AMOLED IP68 Smart Watch"
                            />
                          </div>
                          <div className="name">
                            Oraimo Watch ES 2 1.95″ AMOLED IP68 Smart Watch
                          </div>
                          <div className="prc" data-oprc="₦ 110,462">
                            ₦ 54,354
                          </div>
                          <div className="bdg _dsct">51%</div>
                          <div className="stk">
                            47 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#f68b1e 94%,#c7c7cd 94%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/qsonic-elevate-2.4-hometheater-cinematic-soundbar-with-subwoofer-touch-sensitive-hdmi-65771694.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="TE796EL0TJHB0NAFAMZ"
                          data-gtm-name="Elevate 2.4 Hometheater Cinematic SoundBar With SubWoofer, Touch sensitive, HDMI"
                          data-gtm-price="54.86"
                          data-gtm-brand="Qsonic"
                          data-gtm-category="Electronics/Home Audio/Home Theater Systems/Sound Bars"
                          data-gtm-dimension23="36456"
                          data-gtm-dimension26=""
                          data-gtm-dimension27=""
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="APWK|Boost|CFS|CP_11|CP_23|CP_MT95|DOW_321|JA|TW|TW_07"
                          data-gtm-dimension44="0"
                          data-gtm-position="11"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Qsonic"
                          data-ga4-item_id="TE796EL0TJHB0NAFAMZ"
                          data-ga4-item_name="Elevate 2.4 Hometheater Cinematic SoundBar With SubWoofer, Touch sensitive, HDMI"
                          data-ga4-discount="12.42"
                          data-ga4-price="54.86"
                          data-ga4-tags="APWK|Boost|CFS|CP_11|CP_23|CP_MT95|DOW_321|JA|TW|TW_07"
                          data-ga4-item_category="Electronics"
                          data-ga4-item_category2="Home Audio"
                          data-ga4-item_category3="Home Theater Systems"
                          data-ga4-item_category4="Sound Bars"
                          data-ga4-index="11"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/617756/1.jpg?3564"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Qsonic Elevate 2.4 Hometheater Cinematic SoundBar With SubWoofer, Touch sensitive, HDMI"
                            />
                          </div>
                          <div className="name">
                            Qsonic Elevate 2.4 Hometheater Cinematic SoundBar With SubWoofer,
                            Touch sensitive, HDMI
                          </div>
                          <div className="prc" data-oprc="₦ 120,000">
                            ₦ 97,840
                          </div>
                          <div className="bdg _dsct">18%</div>
                          <div className="stk">
                            20 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#f68b1e 40%,#c7c7cd 40%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    {/* Dettol Soap Pink Glow */}
                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/dettol-soap-pink-glow-70g-92728337.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="DE111ST17OUH5NAFAMZ"
                          data-gtm-name="Soap Pink Glow - 70g"
                          data-gtm-price="0.42"
                          data-gtm-brand="Dettol"
                          data-gtm-category="Health & Beauty/Beauty & Personal Care/Personal Care/Skin Care/Body/Cleansers/Soaps"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="BLF|BLF_09|Boost|CARR|CFS|CP_23|CP_24|CP_MT103|CP_MT140|CP_MT75|CP_MT88|CP_UN103|CP_UN109|JA|JA_10|JMALL|NORET_02|TW_21"
                          data-gtm-dimension44="0"
                          data-gtm-position="12"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Dettol"
                          data-ga4-item_id="DE111ST17OUH5NAFAMZ"
                          data-ga4-item_name="Soap Pink Glow - 70g"
                          data-ga4-price="0.42"
                          data-ga4-tags="BLF|BLF_09|Boost|CARR|CFS|CP_23|CP_24|CP_MT103|CP_MT140|CP_MT75|CP_MT88|CP_UN103|CP_UN109|JA|JA_10|JMALL|NORET_02|TW_21"
                          data-ga4-item_category="Health & Beauty"
                          data-ga4-item_category2="Beauty & Personal Care"
                          data-ga4-item_category3="Personal Care"
                          data-ga4-item_category4="Skin Care"
                          data-ga4-item_category5="Body"
                          data-ga4-item_category6="Cleansers"
                          data-ga4-item_category7="Soaps"
                          data-ga4-index="12"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/382729/1.jpg?4324"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Dettol Soap Pink Glow - 70g"
                            />
                          </div>
                          <div className="name">Dettol Soap Pink Glow - 70g</div>
                          <div className="prc">₦ 747</div>
                          <div className="stk">
                            3 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#b81a0a 6%,#c7c7cd 6%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    {/* HITHIUM Power Station */}
                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/hithium-1kwh-power-station-solar-charge-power-for-tvfanwifi-409182554.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="HI059GP7D97R2NAFAMZ"
                          data-gtm-name="1kWh Power Station - Solar charge + Power for TV/Fan/Wifi"
                          data-gtm-price="151.39"
                          data-gtm-brand="HITHIUM"
                          data-gtm-category="Garden & Outdoors/Generators & Portable Power/Rechargeable Power Supplies"
                          data-gtm-dimension23="484568"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="CFS|CP_41|CP_UN104|CP_UN109|JA|JA_20|JA_4|JMALL|UND_16"
                          data-gtm-dimension44="0"
                          data-gtm-position="13"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="HITHIUM"
                          data-ga4-item_id="HI059GP7D97R2NAFAMZ"
                          data-ga4-item_name="1kWh Power Station - Solar charge + Power for TV/Fan/Wifi"
                          data-ga4-discount="12.89"
                          data-ga4-price="151.39"
                          data-ga4-tags="CFS|CP_41|CP_UN104|CP_UN109|JA|JA_20|JA_4|JMALL|UND_16"
                          data-ga4-item_category="Garden & Outdoors"
                          data-ga4-item_category2="Generators & Portable Power"
                          data-ga4-item_category3="Rechargeable Power Supplies"
                          data-ga4-index="13"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/5281904/1.jpg?1278"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="HITHIUM 1kWh Power Station - Solar charge + Power for TV/Fan/Wifi"
                            />
                          </div>
                          <div className="name">
                            HITHIUM 1kWh Power Station - Solar charge + Power for TV/Fan/Wifi
                          </div>
                          <div className="prc" data-oprc="₦ 292,994">
                            ₦ 270,000
                          </div>
                          <div className="bdg _dsct">8%</div>
                          <div className="stk">
                            50 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#f68b1e 100%,#c7c7cd 100%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    {/* Hikers TV */}
                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/hikers-50-inch-frameless-android-smart-4k-led-tv-blackwallmount-one-year-warranty-385175460.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="HI613EA52GFUUNAFAMZ"
                          data-gtm-name="50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT - One Year Warranty"
                          data-gtm-price="179.42"
                          data-gtm-brand="Hikers"
                          data-gtm-category="Electronics/Television & Video/Televisions/Large screen TV"
                          data-gtm-dimension23="475527"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="CFS|CP_1|CP_11|CP_14|CP_23|CP_37|CP_42|CP_MT70|CP_MT73|CP_MT88|CP_MT95|CP_UN101|CP_UN106|CP_UN108|CP_UN109|INV_CLEAR|JA|JA_20|JA_3|JMALL|TW|TW_05|TW_22|TW_25"
                          data-gtm-dimension44="0"
                          data-gtm-position="14"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Hikers"
                          data-ga4-item_id="HI613EA52GFUUNAFAMZ"
                          data-ga4-item_name="50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT - One Year Warranty"
                          data-ga4-discount="32.92"
                          data-ga4-price="179.42"
                          data-ga4-tags="CFS|CP_1|CP_11|CP_14|CP_23|CP_37|CP_42|CP_MT70|CP_MT73|CP_MT88|CP_MT95|CP_UN101|CP_UN106|CP_UN108|CP_UN109|INV_CLEAR|JA|JA_20|JA_3|JMALL|TW|TW_05|TW_22|TW_25"
                          data-ga4-item_category="Electronics"
                          data-ga4-item_category2="Television & Video"
                          data-ga4-item_category3="Televisions"
                          data-ga4-item_category4="Large screen TV"
                          data-ga4-index="14"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4571583/1.jpg?6283"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt="Hikers 50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT - One Year Warranty"
                            />
                          </div>
                          <div className="name">
                            Hikers 50'' Inch Frameless Android Smart 4K LED TV-Black+WALLMOUNT - One Year Warranty
                          </div>
                          <div className="prc" data-oprc="₦ 378,720">
                            ₦ 319,999
                          </div>
                          <div className="bdg _dsct">16%</div>
                          <div className="stk">
                            22 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#f68b1e 44%,#c7c7cd 44%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                    {/* Infinix Hot 60i */}
                    <div className="itm col">
                      <article className="prd _box _hvr">
                        <a
                          href="/infinix-hot-60i-6.78-4gb-ram128gb-rom-android-15-silver-418472838.html"
                          className="core"
                          data-track-onclick="eecProduct"
                          data-track-providers="gtm|ga4"
                          data-gtm-id="IN717MP8023O9NAFAMZ"
                          data-gtm-name='Hot 60i 6.78" 4GB RAM/128GB ROM Android 15- Silver'
                          data-gtm-price="81.21"
                          data-gtm-brand="Infinix"
                          data-gtm-category="Phones & Tablets/Mobile Phones/Smartphones"
                          data-gtm-dimension23="337213"
                          data-gtm-dimension28="1"
                          data-gtm-dimension37="0"
                          data-gtm-dimension43="CFS|JMALL"
                          data-gtm-dimension44="0"
                          data-gtm-position="15"
                          data-gtm-list="flashsale_1"
                          data-ga4-item_brand="Infinix"
                          data-ga4-item_id="IN717MP8023O9NAFAMZ"
                          data-ga4-item_name='Hot 60i 6.78" 4GB RAM/128GB ROM Android 15- Silver'
                          data-ga4-discount="0.00"
                          data-ga4-price="81.21"
                          data-ga4-tags="CFS|JMALL"
                          data-ga4-item_category="Phones & Tablets"
                          data-ga4-item_category2="Mobile Phones"
                          data-ga4-item_category3="Smartphones"
                          data-ga4-index="15"
                          data-ga4-is_second_chance="false"
                          data-ga4-list="flashsale_1"
                          data-track-onview="eecProduct"
                        >
                          <div className="-fsh0 -pr -me-start -fw">
                            <img
                              data-lazy="true"
                              data-src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/8274814/1.jpg?7949"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
                              className="img"
                              width="185"
                              height="185"
                              alt='Infinix Hot 60i 6.78" 4GB RAM/128GB ROM Android 15- Silver'
                            />
                          </div>
                          <div className="name">
                            Infinix Hot 60i 6.78" 4GB RAM/128GB ROM Android 15- Silver
                          </div>
                          <div className="prc" data-oprc="₦ 144,842">
                            ₦ 144,841
                          </div>
                          <div className="bdg _dsct">1%</div>
                          <div className="stk">
                            4 items left
                            <div
                              className="meter _s"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#b81a0a 8%,#c7c7cd 8%)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </article>
                    </div>

                  </div>

                  <button type="button" className="c-btn _prev _dis" aria-label="previous">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-left"></use>
                    </svg>
                  </button>

                  <button type="button" className="c-btn _next" aria-label="next">
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                      <use xlinkHref="https://www.jumia.com.ng/assets_he/images/i-icons.85419111.svg#arrow-right"></use>
                    </svg>
                  </button>

                </div>
              </section>
            </div>

            <FAQs />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
export default Ads1;
