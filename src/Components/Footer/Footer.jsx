import React from 'react';
import './Footer.scss';

function Footer({ content, lang }) {
	return (
		<>
			<footer>
				<section className="footer">
					<div className='container'>
						<h4 className='footer__headding'>{content[lang].footer.headding}</h4>
						<span>{content[lang].footer.text}</span>
					</div>
				</section>
			</footer>
		</>
	);
}

export default Footer;
