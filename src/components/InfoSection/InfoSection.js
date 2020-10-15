import React from "react";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopSubhead,
  Heading,
  Body,
  Img,
  ImgWrapper,
} from "./InfoSection.elements";

const InfoSection = ({
  primary,
  lightBg,
  lightSubhead,
  lightHeading,
  lightBody,
  topSubhead,
  heading,
  body,
  buttonLabel,
  imgStart,
  img,
  alt,
  start,
}) => {
  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopSubhead lightSubhead={lightSubhead}>{topSubhead}</TopSubhead>
              <Heading lightHeading={lightHeading}>{heading}</Heading>
              <Body lightBody={lightBody}>{body}</Body>
              <Link to="/sign-up">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
