import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div`
  margin: 0 -15px -15px -15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopSubhead = styled.div`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: ${({ lightSubhead }) => (lightSubhead ? "#a9b3c1" : "#4b59f7")};
`;
export const Heading = styled.h1`
  font-size: 18px;
  line-height: 16px;
  margin-bottom: 16px;
  color: ${({ lightHeading }) => (lightHeading ? "#f7f8fa" : "#1c2237")};
`;

export const Body = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  max-width: 440px;
  color: ${({ lightBody }) => (lightBody ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  max-width: 555px;
`;

export const Img = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 500px;
  border: 0;
  vertical-align: middle;
  padding-right: 0;
`;
