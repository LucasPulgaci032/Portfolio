
import React from "react";
import styled from "styled-components";
import { B} from "@/components/ui/background-beams-with-collision";

const Title = styled.h2`
  font-size: 2rem;
  position: relative;
  z-index: 20;
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const GradientWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: inline-block;
  width: max-content;
  filter: drop-shadow(0px 1px 3px rgba(27, 37, 80, 0.14));
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 1px;
  left: 0;
  background-clip: text;
  background-repeat: no-repeat;
  color: transparent;
  background-image: linear-gradient(to right, #a855f7, #8b5cf6, #ec4899);
  text-shadow: 0 0 rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

const GradientText = styled.div`
  position: relative;
  background-clip: text;
  color: transparent;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #a855f7, #8b5cf6, #ec4899);
  padding: 1rem 0;
`;

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <Title>
        What's cooler than Beams?{" "}
        <GradientWrapper>
          <GradientOverlay>
            <span>Exploding beams.</span>
          </GradientOverlay>
          <GradientText>
            <span>Exploding beams.</span>
          </GradientText>
        </GradientWrapper>
      </Title>
    </BackgroundBeamsWithCollision>
  );
}
