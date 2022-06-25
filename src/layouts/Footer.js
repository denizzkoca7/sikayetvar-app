import React from "react";
import { Flex, Text, Link } from "rebass/styled-components";
import styled from "styled-components";
import github from "../images/github.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import dribble from "../images/dribble.png";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: twitter,
      alt: "twitter",
    },
    {
      id: 2,
      icon: facebook,
      alt: "facebook",
    },
    {
      id: 3,
      icon: dribble,
      alt: "dribble",
    },
    {
      id: 4,
      icon: github,
      alt: "github",
    },
  ];
  return (
    <Container>
      <Flex width={1} justifyContent="space-between" alignItems="flex-start">
        <Flex>
          <Text>
            <span className="footer-text">Thank you for supporting us!</span>
            Let's get in touch on any of these platforms.
          </Text>
        </Flex>
        <Flex>
          {socialMedia.map((social) => (
            <Link href="#" key={social.id} width={38} height={38}>
              <img src={social.icon} alt={social.alt} />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)`
  max-width: 1012px;
  margin: 0 auto;
  margin-top: 120px;
  .footer-text {
    font-size: 24px;
    color: #00cdac;
    font-height: 32px;
    display: block;
    margin-bottom: 20px;
  }
`;

export default Footer;
