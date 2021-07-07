import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;

	h1 {
		color: ${(pr) => pr.theme.primaryColor};
	}
	Link {
		text-decoration: none;
	}

	nav {
		display: flex;
		width: 30%;
		justify-content: space-between;
	}
`;

export default function Header() {
	return (
		<>
			<StyledHeader>
				<Link to='/'>
					<h1>Lambda Eats</h1>
				</Link>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/help'>Help</Link>
				</nav>
			</StyledHeader>
		</>
	);
}
