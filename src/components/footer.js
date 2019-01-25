import React from 'react';
import pico from '../images/winis.jpg';

const Footer = () => {
  return(
<div className=" row mt-5 x-footer">
<div className="col-md-4 mt-10">

<img  src={pico} alt="logoo" width = "200" className = "footer_pic"/>
</div>
<div className="col-md-4 mt-10">
<h2 className="title"><i className="fa fa-envelope"></i> Contact</h2>
				<hr className="footerstress"/>
				<dl>
					<dt>2536 kampala, Uganda, 74C</dt>
					<dd><span>Telephone:</span>+256 348 271 9483</dd>
					<dd>E-mail: <a href="more.html">mail@wnis.org</a></dd>
				</dl>
				<ul className="social-links" style={{marginTop:'15px'}}>
					<li className="twitter-link smallrightmargin">
					<a href="#" className="twitter has-tip" target="_blank" title="Follow Us on Twitter">Twitter</a>
					</li>
					<li className="facebook-link smallrightmargin">
					<a href="#" className="facebook has-tip" target="_blank" title="Join us on Facebook">Facebook</a>
					</li>
					<li className="google-link smallrightmargin">
					<a href="#" className="google has-tip" title="Google +" target="_blank">Google</a>
					</li>
					<li className="linkedin-link smallrightmargin">
					<a href="#" className="linkedin has-tip" title="Linkedin" target="_blank">Linkedin</a>
					</li>

				</ul>
</div>
<div className="col-md-4"></div>
</div>

  )
}
export default Footer;
