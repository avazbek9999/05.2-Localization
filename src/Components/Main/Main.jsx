import React from 'react';
import './Main.scss';

function Main({ content, lang }) {
	return (
		<>
			<main>
				<section className='hero'>
					<div className='container'>
						<h2 className='hero__headding'>{content[lang].main.headding}</h2>
						<p className='hero__paragrf'>{content[lang].main.paragrf}</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default Main;
