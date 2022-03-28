import React from 'react';
// Styles
import { Wrapper, Image } from './Actor.Styles';

export default function Actor({ name, character, imageUrl }) {
	return (
		<Wrapper>
			<Image src={imageUrl} alt="actor-thumb" />
			<h3>{name}</h3>
			<p>{character}</p>
		</Wrapper>
	);
}
