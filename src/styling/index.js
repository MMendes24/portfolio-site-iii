import styled from "styled-components"

const AppStyles = styled.div`

display: flex;
flex-flow: column;
align-items: center;
font-family: 'Roboto Mono', monospace;
background-color: whitesmoke;
width: 80%;
margin: auto;

`
const Container = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	justify-content: center;
`
const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	color: #262626;
	text-decoration: none;
	padding: 1% 0%;

	.nav-link {
		color: #262626;
		text-decoration: none;
		font-size: 2rem;
		margin: 0% 1%
	}

	.social-link {
		margin: 0% 1%
	}

	i.fab {
		color: #a1251b;
		font-size: 3rem;
	}
`

export {
	AppStyles,
	Container,
	Nav
}