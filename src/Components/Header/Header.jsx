import React from 'react';
import './Header.scss';

function Header({lang, setLang, content}) {
	return (
		<>
				<section className='header'>
						<a className="header__link" href='#link'>
							{content[lang].header.link}
						</a>
						<nav className='nav'>
							<ul className='nav__list'>
								<li className='nav__item'>{content[lang].header.nav.item1}</li>
								<li className='nav__item'>{content[lang].header.nav.item2}</li>
								<li className='nav__item'>{content[lang].header.nav.item3}</li>
							</ul>
						</nav>

						<select
							className='header__select'
							value={lang}
							onChange={(evt) => {
								setLang(evt.target.value);
							}}>
							<option value='uz'>Uz</option>
							<option value='ru'>Ru</option>
							<option value='en'>En</option>
						</select>
				</section>
		</>
	);
}

export default Header;
