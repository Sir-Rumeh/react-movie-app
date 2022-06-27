import React from 'react';

// Styles
import { Wrapper, Content } from './Grid.Styles';

export default function Grid({ header, children }) {
	return (
		<Wrapper>
			<h1 className="bg-blac">{header}</h1>
			<Content>{children}</Content>
		</Wrapper>
	);
}
