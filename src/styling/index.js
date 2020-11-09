import styled from "styled-components"
import bg from '../assets/photo-1555099962-4199c345e5dd.jpg'

const AppStyles = styled.div`

display: flex;
flex-flow: column;
justify-content: center;
font-family: 'Roboto Mono', monospace;
background-color: whitesmoke;
width: 80%;
margin: auto;
color: #262626;

.sticky-wrapper {
	position: relative;
	background-color: whitesmoke;
	height: 2rem;
}

.sticky .nav-wrapper {
	position: fixed;
	width: 80%;
	top: 0;
	background-color: whitesmoke;
	opacity: 0.9;
}

@media(max-width: 1024px) {
		.sticky-wrapper {
			height:1.5rem;
		}
	}

@media(max-width: 768px) {
		.sticky-wrapper {
			height:1.5rem;
		}
	}

@media(max-width: 480px) {
		.sticky .nav-wrapper {
			position: absolute;
			opacity: 1.0;
		}

		.sticky-wrapper {
			display: flex;
			justify-content: center;
			height:9rem;
		}
	}
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

	.nav-wrapper {
		position: fixed;
		display: flex;
		justify-content: space-around;
		color: #262626;
		top: 0;
		width: 80%;
		margin: auto;
	}

	.site-header {
		font-size: 1.8rem;
		margin: 0% 1%;
		padding: 0.5% 1%;
	}

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
		transform: translateY(-5px);
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
		transform: translateY(-5px);
		color: #a1251b;
	  }

	i.fas {
		font-size: 2rem;
	}

	@media(max-width: 1200px) {
		.nav-link {
			font-size: 1.3rem;
		}
	}

	@media(max-width: 1024px) {
		.site-header {
			font-size: 1.3rem;
		}

		.nav-link {
			font-size: 1rem;
		}

		i.fas {
			font-size: 1rem;
		}
	}

	@media(max-width: 768px) {
		.site-header {
			font-size: 1rem;
		}

		.nav-link {
			font-size: 1rem;
		}

		i.fas {
			font-size: 1rem;
		}
	}

	@media(max-width: 480px) {
		.site-header {
			font-size: 1.5rem;
			margin: 3% 0%;
		}

		.nav-wrapper {
			position: absolute;
			display: flex;
			flex-flow: column;
			justify-content: flex-start;
			align-items: center;
		}
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
	height: 90vh;
	font-weight: 600;

	#page-header {
		font-size: 5rem;
	}

	.landing-p {
		font-size: 2rem;
	}

	@media(max-width: 1024px) {
		height: 60vh;

		#page-header {
			font-size: 3rem;
		}
	}

	@media(max-width: 1024px) {
		height: 50vh;

		#page-header {
			font-size: 3rem;
		}
	}

	@media(max-width: 480px) {
		height: 40vh;

		#page-header {
			font-size: 2rem;
		}

		.landing-p {
			font-size: 1rem;
	}
}

`

const AboutStyles = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 60%;
	padding: 2%;
	margin: 2% auto;
	border-radius: 5%;
	box-shadow: 0 0 5px #888888;

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

	.profile {
		width: 40%;
		box-shadow: 0 0 5px #888888;
		border-radius: 5%;
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

	@media(max-width: 1200px) {
		width: 70%;
		padding: 10%;
	}

	@media(max-width: 1024px) {
		padding: 5%;

		.about-p {
			font-size: 1.1rem;
		}

		#ps {
			font-size: 0.8rem;
		}
	}

	@media(max-width: 768px) {
		border-radius: 2%;
		width: 80%;

		.about-p {
			font-size: 1rem;
		}

		#ps {
			font-size: 0.8rem;
		}
	}

	@media(max-width: 480px) {
		width: 80%;

		.about-p {
			font-size: 1rem;
		}

		#ps {
			font-size: 0.9rem;
		}

		i.fas {
			font-size: 1rem;
		}
	}
	
`
const PortfolioStyles = styled.section`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	margin: 3% 0%;

	.project-img {
		width: 50%;
		border: 1px solid #262626;
		border-radius: 5%;
		margin-top: 3%;
	}

	.project-header {
		font-size: 2.5rem;
		margin: 3% 0%;
	}

	.project-subheader {
		font-size: 1.3rem;
		text-decoration: underline;
		margin: 2% auto;
	}

	h3 {
		font-size: 1.2rem;
	}

	.project {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 25%;
		padding: 2%;
		border-radius: 5%;
		margin: 0% 2%;
		transition: all 0.3s ease 0s;
		box-shadow: 0 0 5px #888888;
	}

	.project-link {
		color: #a1251b;
		text-decoration: none;
		font-weight: 600;
	}

	.project-wrapper {
		display: flex;
		justify-content: center;
		margin: 2% 0%;
	}

	.desc {
		font-size: 1rem;
		width: 75%;
		margin: 2% 0%;
	}

	.tech-header {
		font-size: 1.3rem;
		margin: 2% 0%;
	}

	.stack {
		font-size: 1.1rem;
		margin: 2% 0%;
	}

	@media(max-width: 1200px) {
		.project {
			width: 33%;
		}
	}

	@media(max-width: 1024px) {
		.project {
			width: 40%;
		}
	}

	@media(max-width: 768px) {
		.project-wrapper {
			display: flex;
			flex-flow: column;
			align-items: center;
			margin: 2% 0%;
	}

		.project {
			margin: 2% 0%;
			width: 50%;
		}
	}

	@media(max-width: 480px) {
		h3 {
			font-size: 1rem;
			margin: 1% 8%;
		}

		.project {
			width: 70%;
		}
	}
`

const ContactStyles = styled.footer`
	display: flex;
	flex-flow: column;
	align-items: center;
	border-top: 3px solid black;
	width: 90%;
	margin: auto;

	.attribution {
		font-size: 0.8rem;
		margin: 1% 0%;
	}

	.attribution a {
		text-decoration: none;
	}

	.contact-link {
		margin: 0% 1%;
	}

	.contact-header {
		font-size: 2.5rem;
		margin: 3% 0%;
	}

	.contact-wrapper {
		width: 50%;
		display: flex;
		justify-content: center;
		margin: 1% auto;
	}

	i.fab {
		font-size: 4rem;
		color: #262626;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
	}

	i.fab:hover {
		color: #a1251b;
		transform: translateY(-5px);
	}

	i.fas {
		font-size: 4rem;
		color: #262626;
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
		margin: 0% 1%;
	}

	i.fas:hover {
		color: #a1251b;
		transform: translateY(-5px);
	}

	.tooltip {
		position: relative;
		display: flex;
	}

	.tooltip-text {
		font-size: 1.3rem;
		visibility: hidden;
  		background-color: #262626;
  		color: whitesmoke;
		text-align: center;
		padding: 10%;
  		border-radius: 5%;
  		position: absolute;
		z-index: 1;
		bottom: 100%;
  		left: 50%;
	}

	.tooltip:hover .tooltip-text {
  		visibility: visible;
	}

	@media(max-width: 480px) {
	.attribution {
		font-size: 1rem;
		margin: 1% 2%;
	}
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

