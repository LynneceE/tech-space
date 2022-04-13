import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px 30px 0px;
  `;
  
  const SocialMediaContainer = styled.div`
    display: flex;
  `;
  
  const SocialMediaIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const StripeLogo = styled.img`
      width: 60%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Tech Space</Logo>
          <Desc>
            Our new online shop is here for all your computer hardware needs. Offering a variety of desktops, laptops, tablets, and other accessories, we'll keep you connected, at home or on-the-go. 
          </Desc>
          <SocialMediaContainer>
            <SocialMediaIcon color="3B5999">
              <Facebook />
            </SocialMediaIcon>
            <SocialMediaIcon color="E4405F">
              <Instagram />
            </SocialMediaIcon>
            <SocialMediaIcon color="55ACEE">
              <Twitter />
            </SocialMediaIcon>
            <SocialMediaIcon color="E60023">
              <Pinterest />
            </SocialMediaIcon>
          </SocialMediaContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>My Cart</ListItem>
            <ListItem>Desktop Computers</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Laptops</ListItem>
            <ListItem>Track My Order</ListItem>
            <ListItem>Tablets</ListItem>
            <ListItem>My Wishlist</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 1600 Pennsylvania Avenue, N.W. Washington, DC 20500
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1-555-5555
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> helpdesk@tech-space.com
          </ContactItem>
          <StripeLogo src="https://paymentsplugin.com/assets/blog-images/stripe-badge-transparent.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  