import styled from 'styled-components';

export const Box = styled.div`
padding: 90px 0px;
background: #D7D7D7;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;	
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const LogoContacts = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  
  svg {
    fill: #000;
    width: 40px;
    height: 40px;
    padding: 10px;
  }
`;

export const Phone = styled.a`
  color: var(--grey, #4D5E6F);
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 10px 0px;
  text-decoration: none;
`;

export const WorkSchedule = styled.div`
color: var(--grey, #4D5E6F);
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%;
`;

export const Copyring = styled.div`
  color: var(--light, #95B2CE);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%;
`;


export const FooterLink = styled.a`
margin-bottom: 15px;
text-decoration: none;
color: var(--black, #0F0E0E);
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 140%;

&:hover {
	color: grey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
color: var(--black, #0F0E0E);
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 140%;
`;

export const LogoPay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  svg {
    fill: #000;
    width: 90px;
    height: 30px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    svg {
      width: 110px;
      height: 40px;
      margin: 0 auto;
      
    }
  }
`;