"use client";
import TeamCard from "@/component/teamCard/TeamCard";
import { teamMembers } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHammer, FaHandshake, FaHeart, FaTimes } from "react-icons/fa";
import styled from "styled-components";

// Define your styled components below

const Container = styled.div``;

const FirstSection = styled.div`
  background: var(--color2-20);
  padding: 8%;
  padding-top: 20vh;
  margin-bottom: 20px;
  display: flex;
  margin-bottom: 3%;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  .text {
    flex: 1;
  }

  .title {
    font-size: 36px;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    line-height: 130%;
    text-align: justify;
  }

  .image {
    flex: 1;
    width: 300px;
    height: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    img {
      width: 100%;
      height: 100%;
      margin: auto;
      object-fit: contain;
      /* border-radius: 15px; */
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SecondSection = styled.div`
  padding: 5% 8%;
  text-align: center;

  .desc {
    width: 85%;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .desc {
      width: 100%;
      margin: auto;
    }
  }
`;
const ThreeColumnSection = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); */
  gap: 20px; /* Adjust the gap as needed */
  margin: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 698px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
  border-radius: 6px;
  display: grid;
  gap: 10px;
  transition: all 0.3s ease-in-out;

  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color2-20);
    border-radius: 6px;
    font-size: 24px;
   color: var(--color2);
  }

  p {
    font-size: 14px;
  }

  &:hover {
    background: var(--color2-20);
  }
`;
const ColumnTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;

  &.diff{
    margin-top: 70px;
  }

  .colored {
    .primary {
      color: var(--primary);
    }
    .color2 {
      color: var(--color2);
    }
    .color3 {
      color: var(--color3);
    }
    .color4 {
      color: var(--color4);
    }
  }
`;
const SectionSubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  .colored {
    .primary {
      color: var(--primary);
    }
    .color2 {
      color: var(--color2);
    }
    .color3 {
      color: var(--color3);
    }
    .color4 {
      color: var(--color4);
    }
  }
`;

const ThirdSection = styled.div`
  text-align: center;
  padding: 5% 8%;
  /* background-color: var(--color2-20); */

  .header {
    width: 80%;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .header {
      width: 100%;
      margin: auto;
    }
  }
`;

const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 130%;
`;

const FourthSection = styled.div`
  padding: 5% 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  /* Style for the left column */
  width: 40%;
  button {
    padding: 10px 25px;
    background: var(--primary);
    color: #fff;
    outline: none;
    border: none;
    border-radius: 50px;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Background = styled.div`
  /* Style for the background with Join Us button */
`;

const RightColumn = styled.div`
  width: 500px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: contain;
  }
`;

const TeamMemberList = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  text-align: center;
  justify-content: center; /* Center the grid items within the container */
  margin-top: 20px;
  grid-auto-rows: minmax(100px, auto);
  
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));

  @media (min-width: 767px) { 
    grid-template-columns: repeat(4, 1fr); 
  }
`;


const AboutUsPage: React.FC = () => {
  return (
    <Container>
      <FirstSection>
        <div className="text">
          <h3 className="title">About Diboruwa Home Services</h3>
          <p>
          Diboruwa makes life easier by offering personalized home service 
          subscriptions - including laundry, cleaning, food delivery, 
          and moving services. Our mission is to digitize 
          the home services industry in northern Nigeria, 
          bringing innovation and convenience to every home.
          </p>
        </div>

        <div className="image">
          <Image src="/ourteam.png" fill={true} alt="...." />
        </div>
      </FirstSection>
      <SecondSection>
        <SectionTitle>Who We Are</SectionTitle>
        <ParagraphText className="desc">
          We are a team of techies, entrepreneurs, professionals, and students. Unable to find a 
          suitable home services solution, we decided to build one. By working with local service providers, 
          we&#39;re on a mission to digitize home services one service at a time—laundry, 
          food delivery, cleaning, and logistics/moving services.
        </ParagraphText>

        <SectionTitle className="diff">Why We Are Different - Because we get the hustle.</SectionTitle>
        <ParagraphText className="desc">        
          We&#39;re like your tech-savvy friend who understands your busy life. 
          Our services are made for people like us – techies, entrepreneurs, professionals, 
          and students. We&#39;re here to make your life a bit easier with services that fit right into your hectic schedule.

        </ParagraphText>

        <ThreeColumnSection>
        <SectionTitle>How Diboruwa fits into your schedule</SectionTitle>
          <Column>
            <div className="icon">
              <FaTimes />
            </div>
            <ColumnTitle>Step One: Your Time, Your Way</ColumnTitle>
            <ParagraphText>
              Pick when our services fit into your schedule. It&#39;s all about giving you control over your time.
            </ParagraphText>
          </Column>

          <Column>
            <div className="icon">
              <FaHandshake />
            </div>
            <ColumnTitle> Step Two: Personalized service</ColumnTitle>
            <ParagraphText>
              Choose from a range of services and subscription plans designed just for you. It&#39;s all about putting the power of choice right at your fingertips
            </ParagraphText>
          </Column>

          <Column>
            <div className="icon">
              <FaHeart />
            </div>
            <ColumnTitle>Step three: Hands free maintenance</ColumnTitle>
            <ParagraphText>
              Whether you&#39;re coding, closing deals, attending meetings, or acing exams, once scheduled, 
              our team takes care of the rest. It&#39;s about letting you focus on what matters most.
            </ParagraphText>
          </Column>
        </ThreeColumnSection>

        {/* <ParagraphText style={{ fontStyle: "italic", fontSize: "14px" }}>
          In entrusting us with your laundry, cleaning, and food delivery needs,
          you&#39;re choosing a partner that values excellence, efficiency, and
          environmental responsibility.
        </ParagraphText> */}
      </SecondSection>

      
      <ThirdSection>
        <div className="header">
          <SectionTitle>Our Team</SectionTitle>
          <SectionSubTitle>The Pillars of Excellence.</SectionSubTitle>
          <ParagraphText>
            Behind every wrinkle-free shirt, every gleaming floor, and every
            satisfied bite, is a team that&#39;s passionate about delivering the
            best. Meet the stalwarts who&#39;ve made Dibo Ruwa synonymous with
            trust and quality.
          </ParagraphText>
        </div>

        <TeamMemberList>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamMemberList>
      </ThirdSection>
      <FourthSection>
        <LeftColumn>
          <SectionTitle>Join Us</SectionTitle>
          <ParagraphText>
          Are you passionate about making a difference? We&#39;re looking for people who share our values of compassion, responsibility, and growth. At Dibo Ruwa, we strive to make a positive impact on the world through our commitment to sustainability and our dedication to our employees&#39; development. If you&#39;re ready to join a team that&#39;s passionate about making life easier, simpler, and more fulfilling, we&#39;d love to hear from you
          </ParagraphText>
          <Background></Background>

          <Link href="mailto:info@diboruwa.com">  <button>Apply Now</button></Link>
        
        </LeftColumn>
        <RightColumn>
          <Image src="/join hands.png" fill={true} alt="joining hands " />
        </RightColumn>
      </FourthSection>
    </Container>
  );
};

export default AboutUsPage;
