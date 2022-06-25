import React from "react";
import { Flex, Text, Link } from "rebass/styled-components";
import styled from "styled-components";

const Footer = () => {
  const socialMedia = [
    {
      icon: "fa-brands fa-twitter-square bg-twitter",
    },
    {
      icon: "fa-brands fa-facebook-square bg-facebook",
    },
    {
      icon: "fa-brands fa-dribbble-square bg-dribbble",
    },
    {
      icon: "fa-brands fa-github-square bg-github",
    },
  ];
  return (
    <Container>
      <Flex
        width={1}
        justifyContent="space-between"
        alignItems="flex-start"
        pb="65px"
        sx={{ borderBottom: "1px solid #0000001A" }}
      >
        <Flex>
          <Text>
            <span className="footer-text">Thank you for supporting us!</span>
            Let's get in touch on any of these platforms.
          </Text>
        </Flex>
        <Flex>
          {socialMedia.map((social) => (
            <Link href="#" sx={{ marginX: "5px" }}>
              <i className={`${social.icon}`} style={{ fontSize: "38px" }} />
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex width={1} justifyContent="space-between" alignItems="center" mt="37px" pb="45px">
        <Flex>
          © 2018
          <span className="footer-text fs-14">Şikayetvar</span>
        </Flex>
        <Link href="/" className="footer-link">
          Posts
        </Link>
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)`
  max-width: 1012px;
  margin: 0 auto;
  margin-top: 120px;
  flex-direction: column;
  .footer-text {
    font-size: 24px;
    color: #00cdac;
    font-height: 32px;
    display: block;
    margin-bottom: 20px;
  }
  .fs-14 {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 500;
  }
  .bg-twitter {
    color: #00acee;
  }
  .bg-facebook {
    color: #3b5998;
  }
  .bg-dribbble {
    color: #ea4c89;
  }
  .bg-github {
    color: #333;
  }
  .footer-link {
    font-size: 18px;
    color: #8898aa;
    font-weight: 500;
    text-decoration: none;
  }
`;

export default Footer;
