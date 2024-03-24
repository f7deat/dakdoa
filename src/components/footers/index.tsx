const Footer2 : React.FC = () => {
    return (
        <div>

<footer id="site-footer" className="site-footer">
  <div className="site-footer-wrap container-fluid p-0">
    <div className="insta-footer-wrap">
      <div className="container">
        <div className="row">
          <aside className="footer-insta-widget col-12">
            <div className="widget widget_block"><div className="widget-content">
                <div className="wp-block-columns are-vertically-aligned-center footer-top-widget is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '66.66%'}}>
                    <h2 className="footer-hero-title">We Care <span> Your Garden </span>Landscaping</h2>
                  </div>
                  <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style={{flexBasis: '33.33%'}}>
                    <p className="contact-phone mb-4 text-right"><span className="bi bi-headset theme-color" /><span><a href="tel:+(528)456-7592">+(528) 456-7592</a></span></p>
                    <div className="wp-block-buttons is-content-justification-right is-layout-flex wp-container-core-buttons-layout-1 wp-block-buttons-is-layout-flex">
                      <div className="wp-block-button has-custom-width wp-block-button__width-100 footer-hero-btn"><a className="wp-block-button__link wp-element-button" href="https://wordpress.zozothemes.com/garland/contact/" target="_blank" rel="noreferrer noopener">Ask Feel Free Question here?</a></div>
                    </div>
                  </div>
                </div>
              </div></div>                  </aside>
        </div>
      </div>
    </div>
    <div className="footer-widgets-wrap">
      <div className="container">
        <div className="row">
          <aside className="footer-widget-2 col-md-3">
            <div className="widget widget_block"><div className="widget-content"><h4 className="footer-bottom-sub-title"><span className="theme-color">New York</span></h4>
                <p className="contact-address"><span>USA —
                    33 Road Broklyn Street,
                    600 New York 81566</span></p>
                <p className="contact-email"><span><a href="mailto:info@email.com">info@email.com</a></span></p>
                <p className="contact-phone"><span><a href="tel:+(528)456-7592">+(528) 456-7592</a></span></p></div></div>					</aside>
          <aside className="footer-widget-2 col-md-3">
            <div className="widget widget_block"><div className="widget-content"><h4 className="footer-bottom-sub-title"><span className="theme-color">Toronto</span></h4>
                <p className="contact-address"><span>2750 Quadra Street Victoria Road, New York, USA</span></p>
                <p className="contact-email"><span><a href="mailto:info@email.com">info@email.com</a></span></p>
                <p className="contact-phone"><span><a href="tel:+(528)456-7593">+(528) 456-7593</a></span></p></div></div>					</aside>
          <aside className="footer-widget-2 col-md-6">
            <div className="widget garland_mailchimp_widget"><div className="widget-content"><h3 className="widget-title subheading heading-size-3">Subscribe to our latest insights</h3>	
                <div className="mailchimp-wrapper">
                  <form className="zozo-mc-form" id="zozo-mc-form" method="post">
                    <p className="zozo-mc-subtitle">Subscribe to our Newsletter Event right now to be updated on special offers Gardening and Landscaping.</p>
                    <input type="hidden" name="garland_mc_listid" />
                    <div className="input-group">
                      <input type="text" className="form-control zozo-mc-email" required id="zozo-mc-email" placeholder="Email Address" name="zozo_mc_email" />
                      <button className="input-group-addon zozo-mc btn btn-default"><span className="bi bi-send" /></button>
                    </div>
                  </form>
                  {/*Mailchimp Custom Script*/}
                  <div className="mc-notice-group" data-success="Success." data-fail="Failure.">
                    <span className="mc-notice-msg" />
                  </div>{/* .mc-notice-group */}
                </div>{/* .mailchimp-wrapper */}
              </div></div>					</aside>
        </div>{/* .row */}
      </div>{/* .container */}
    </div>{/* .footer-widgets-wrap */}
    <div className="footer-bottom-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav copyright-bar-ul pull-center justify-content-center">											<li>
                <p className="footer-copyright">© Copyright 2024. All rights reserved. <a href="https://wordpress.zozothemes.com/garland/" target="_blank">Garland</a>. 
                  Designed by 
                  <a href="https://zozothemes.com/" target="_blank">Zozothemes</a></p>
              </li>
            </ul>			</div>{/* .col-12 */}
        </div>{/* .row */}
      </div>{/* .container */}
    </div>{/* .footer-bottom-wrap */}
  </div>{/* .container */}
</footer>


        </div>
    )
}

export default Footer2;