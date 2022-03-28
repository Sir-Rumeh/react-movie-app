import React from 'react';

export default function Footer() {
	const background = {
		backgroundColor: 'rgba(3, 37, 65, 1)',
	};
	return (
		<section
			style={background}
			class="p-5 text-center text-white position-relative"
		>
			<div class="container">
				<p class="lead">Sir_Rumeh &copy; 2022</p>
				<a
					href="#header"
					class="position-absolute bottom-0 end-0 h1 p-5 footer"
				>
					<i class="bi bi-arrow-up-circle"></i>
				</a>
			</div>
		</section>
	);
}
