import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import {
  GiCutDiamond,
  GiRock,
  GiCrystalBars,
  GiFloatingCrystal,
} from "react-icons/gi";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  CardInfo,
  CardIcon,
  CardPlan,
  CardCost,
  CardLength,
  CardFeatures,
  CardFeature,
} from "./Pricing.elements";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <CardInfo>
                <CardIcon>
                  <GiRock />
                </CardIcon>
                <CardPlan>Starter Pack</CardPlan>
                <CardCost>$99.99</CardCost>
                <CardLength>per month</CardLength>
                <CardFeatures>
                  <CardFeature>100 New Users</CardFeature>
                  <CardFeature>$10,000 Budget</CardFeature>
                  <CardFeature>Retargeting analytics</CardFeature>
                </CardFeatures>
                <Button primary>Choose Plan</Button>
              </CardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <CardInfo>
                <CardIcon>
                  <GiCrystalBars />
                </CardIcon>
                <CardPlan>Gold Rush</CardPlan>
                <CardCost>$299.99</CardCost>
                <CardLength>per month</CardLength>
                <CardFeatures>
                  <CardFeature>1000 New Users</CardFeature>
                  <CardFeature>$50,000 Budget</CardFeature>
                  <CardFeature>Lead Gen Analytics</CardFeature>
                </CardFeatures>
                <Button primary>Choose Plan</Button>
              </CardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <CardInfo>
                <CardIcon>
                  <GiCutDiamond />
                </CardIcon>
                <CardPlan>Diamond Kings</CardPlan>
                <CardCost>$999.99</CardCost>
                <CardLength>per month</CardLength>
                <CardFeatures>
                  <CardFeature>Unlimited Users</CardFeature>
                  <CardFeature>Unlimited Budget</CardFeature>
                  <CardFeature>24/7 Support</CardFeature>
                </CardFeatures>
                <Button primary>Choose Plan</Button>
              </CardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
