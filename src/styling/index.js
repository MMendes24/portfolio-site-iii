import styled from "styled-components"

const AppStyles = styled.div`

display: flex;
flex-flow: column;
align-items: center;
font-family: 'Roboto Mono', monospace;
background-color: whitesmoke;
width: 90%;
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

	.page-header {
		font-size: 2rem;
		width: 50%;
	}

	.nav-link {
		color: #262626;
		text-decoration: none;
		font-size: 1.5rem;
		margin: 0% 1%;
		padding: 0% 1%;
		border: 3px solid #262626;
		border-radius: 10%;
	}

	.social-link {
		margin: 0% 1%
	}

	i.fab {
		color: #a1251b;
		font-size: 3rem;
	}
`

const ColorSpan = styled.span`
	color: #a1251b;
`

export {
	AppStyles,
	Container,
	Nav,
	ColorSpan,
}