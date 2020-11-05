import styled from "styled-components"
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const AppStyles = styled.div`

display: flex;
flex-flow: column;
align-items: center;
font-family: 'Roboto Mono', monospace;
background-color: whitesmoke;
width: 80%;
margin: auto;
line-height: 1.3;

`
const Container = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	flex-flow: column;
	justify-content: center;
`
const NavStyles = styled.nav`
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
const LandingStyles = styled.section`
	color: whitesmoke;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg});
	background-size: cover;
	height: 100vh;
	width: 95%;
	margin: auto;

	#page-header {
		font-size: 5rem;
	}

	.landing-p {
		font-size: 1.5rem;
	}

`

const AboutStyles = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 80%;
	margin: auto;

	.about-header {
		font-size: 2rem;
		margin: 2% 0%;
	}

	.about-p {
		font-size: 1.3rem;
		margin: 2% 0%;
	}

	#ps {
		font-size: 1.2rem;
		margin: 3% 0%;
	}
`

// resusable utility styling components
const ColorSpan = styled.span`
	color: #a1251b;
`

export {
	AppStyles,
	Container,
	NavStyles,
	LandingStyles,
	AboutStyles,
	ColorSpan,
}