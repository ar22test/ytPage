import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import './title.css';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 6rem;
  color: #000;
  z-index: 1;
  margin-top: auto;
  text-align: center;
  user-select: none !important;
  strong {
    font-size: 1em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
    font-weight: 100;
    
    .main {
      font-size: 35px;
      margin-bottom: 0px !important;
    }
    
  }
`;

const Title = () => {

	return (
		<MyTitleMessage>
			<div className="titleMessage">
				<Row className="heading">
					<Col lg={12} className="name-font">
						<span>
							<strong>La Guagua TV</strong>
						</span>
					</Col>
					<div style={{display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
						<Col lg={12} className="main text-center mb-3 parag1">
							La Gua Gua Tv is more than just a dance video outlet; it is a place where dreams come alive and the true essence of Latin dance is experienced. With passionate expression and a seamless flow, La Gua Gua empowers aspiring dancers to become champions, showcasing to the world the undeniable beauty and soul of Latin dance.
						</Col>						
					</div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Col lg={12} className="main text-center mb-3 parag1">
						At La Gua Gua, we believe that dance is not just about perfecting technical movements; it is about creating a connection with the music, embracing the rich cultural heritage, and expressing oneself with authenticity and passion. Our Dance Videos experiences are designed to build a strong foundation while nurturing individual creativity.
						</Col>						
					</div>		
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Col lg={12} className="main text-center mb-3 parag1">
						Every Upload Videos at La Gua Gua is infused with energy, rhythm, and a deep appreciation for Latin dance. From the sensual moves of salsa to the fiery footwork of tango, students are immersed in a world of vibrant music and intricate choreography. Technique, musicality, and style are combined to shape well-rounded dancers who can confidently dominate any dance floor.
						</Col>						
					</div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Col lg={12} className="main text-center mb-3 parag1">
						But it's not just about competitions and performances; La Gua Gua fosters a supportive community where dance teachera and students can grow together, driven by a shared love for Latin music and dance. Collaboration, encouragement, and friendship are the pillars of our dance family. Students find themselves surrounded by like-minded individuals who inspire and push each other to reach new heights.
						</Col>						
					</div>
					
				</Row>
			</div>
		</MyTitleMessage>
	)
}

Title.propTypes = {

}

export default Title
