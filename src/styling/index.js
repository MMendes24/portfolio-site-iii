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

	.nav-link {
		color: #262626;
		text-decoration: none;
		font-size: 1.5rem;
		margin: 0% 1%;
		padding: 0.5% 1%;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	.nav-link:hover {
		transform: translateY(-10px);
		color:#a1251b;
	}

	.social-link {
		margin: 0% 2%
	}

	i.fab {
		color: #262626;
		font-size: 3rem;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	i.fab:hover {
		transform: translateY(-10px);
		color: #a1251b;
	  }

	i.fas {
		font-size: 2rem;
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
	font-weight: 600;

	#page-header {
		font-size: 5rem;
	}

	.landing-p {
		font-size: 2rem;
	}

`

const AboutStyles = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 60%;
	margin: auto;

	.about-header {
		font-size: 2.5rem;
		margin: 3% 0%;
	}

	.about-p {
		font-size: 1.3rem;
		margin: 2% 0%;
	}

	#ps {
		font-size: 1.2rem;
		margin: 3% 0%;
	}

	i.fas {
		font-size: 1.2rem;
		color: #a1251b;
	}

	#user-i {
		margin-top: 2%;
		font-size: 5rem;
	}
`
const PortfolioStyles = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;

	.project-img {
		width: 50%;
		border: 2px solid #262626;
		border-radius: 5%;
		margin-top: 3%;
	}

	.project-header {
		font-size: 2.5rem;
		margin: 3% 0%;
	}

	.project-subheader {
		font-size: 1.5rem;
		margin: 2% auto;
	}

	.project {
		width: 60%;
		padding: 2%;
		border-bottom: 3px solid #262626;
	}

	.project-link {
		color: #a1251b;
		text-decoration: none;
		font-weight: 600;
	}

	.desc {
		font-size: 1.2rem;
		margin: 1% 0%;
	}

	.stack {
		font-size: 1.2rem;
		margin: 3% 0%;
	}

	.bullet {
		font-size: 1.2rem;
		margin: 2% 0%;
	}
`

const ContactStyles = styled.footer`
	display: flex;
	flex-flow: column;
	align-items: center;

	.contact-header {
		font-size: 2.5rem;
		margin: 1% 0%;
	}

	.contact-wrapper {
		display: flex;
		justify-content: center;
		padding: 1%;
	}

	.contact-link {
		margin: 0% 3%;
	}

	i.fab {
		font-size: 6rem;
		color: #a1251b;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	i.fas {
		font-size: 6rem;
		color: #a1251b;
		margin: 0% 3%;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	
	i.fab:hover {
		transform: translateY(-10px);
	}

	i.fas:hover {
		transform: translateY(-10px);
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
	PortfolioStyles,
	ContactStyles,
	ColorSpan,
}