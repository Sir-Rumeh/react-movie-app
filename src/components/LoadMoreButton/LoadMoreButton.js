import React from 'react';
// Styles
import { Wrapper } from './LoadMoreButton.Styles';
import './LoadMoreButton.css';

export default function LoadMoreButton({ text, callback }) {
	return (
		<div className="buttonBackground">
			<Wrapper type="button" onClick={callback}>
				{text}
			</Wrapper>
		</div>
	);
}
