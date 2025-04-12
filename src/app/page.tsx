// app/page.tsx
"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(34, 34, 34, 1) 16%,
    rgba(108, 34, 22, 1) 100%
  );
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 32px 24px;
  overflow: hidden;
`;
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/bg.svg");
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  font-family: "DotGothic16", sans-serif;
  span {
    color: #ff4d4d;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin: 0.3rem 0;
  text-align: center;
  strong {
    font-weight: 700;
  }
`;

const ProfileCircle = styled.div`
  border: 2px dashed white;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 2rem 0;
`;

const Divider = styled.div`
  height: 8px;
  width: 80%;
  background-color: #7d2c2c;
  border-radius: 8px;
  margin: 2rem 0;
`;

const WorkSection = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const WorkBox = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SocialSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialButton = styled.a`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const COPY = {};

export default function Home() {
  return (
    <Container>
      <BackgroundImage />
      <Logo>
        cuongduong<span>.dev</span>
      </Logo>

      <Text>
        hi, i'm <strong>cuong</strong>
      </Text>
      <Text>
        i'm a software engineer based in <strong>tokyo</strong>
      </Text>
      <ProfileCircle />
      <Divider />
      <Text>I love being a part of projects that inspire people.</Text>

      <WorkSection>
        <WorkBox>
          <div>previous work</div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Image src="/google.svg" alt="Google" width={24} height={24} />
            <Image src="/zoom.svg" alt="Zoom" width={24} height={24} />
            <Image src="/target.svg" alt="Target" width={24} height={24} />
          </div>
        </WorkBox>
        <WorkBox>
          <div>current team</div>
          <Image src="/sn.svg" alt="SmartNews" width={24} height={24} />
        </WorkBox>
      </WorkSection>
      <Text style={{ marginTop: "2rem", fontWeight: "bold" }}>
        {`I'm passionate about...`}
      </Text>
      <Text style={{ maxWidth: "400px" }}>
        fostering a healthy learning culture and creating that space for
        everyone.
      </Text>
      <SocialSection>
        <SocialButton href="https://github.com">
          <Image src="/github.svg" alt="GitHub" width={24} height={24} />
        </SocialButton>
        <SocialButton href="https://linkedin.com">
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </SocialButton>
        <SocialButton href="https://youtu.be/dQw4w9WgXcQ">
          <Image src="/youtube.svg" alt="Youtube" width={24} height={24} />
        </SocialButton>
      </SocialSection>
    </Container>
  );
}
