import { NavLink } from '@remix-run/react';
import { FaGift } from 'react-icons/fa';

import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';

export type BannerProps = {
  headline?: string;
  icon?: boolean;
  paragraph: string;
  link: { slug: string; text: string };
};

const Banner = ({
  headline,
  icon = true,
  paragraph,
  link: { slug, text },
}: BannerProps) => (
  <div>
    <ConditionalWrapper condition={Boolean(headline)}>
      <h2>{headline}</h2>
    </ConditionalWrapper>
    <ConditionalWrapper condition={icon}>
      <FaGift />
    </ConditionalWrapper>
    <p>{paragraph}</p>
    <NavLink to={slug}>{text}</NavLink>
  </div>
);

export default Banner;

/*
 * export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 80px 40px;
  background-color: ${colors.offGray};

  @media ${devices.tablet} {
    padding: 100px 40px;
  }

  @media ${devices.laptop} {
    padding: 140px 40px;
  }
`;

export const Headline = styled.h2`
  text-align: center;
  font-size: 26px;
  margin: 15px 0px;

  @media ${devices.laptop} {
    font-size: 36px;
    margin: 20px 0px;
  }
`;

export const Icon = styled(FaGift)`
  font-size: 64px;
  margin-bottom: 20px;
  color: ${colors.offBlack};
`;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 400px;

  @media ${devices.laptop} {
    max-width: 550px;
  }
`;

export const Link = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  background: ${colors.offBlack};
  color: ${colors.offWhite};
  width: max-content;
  font-size: 16px;
  padding: 8px 16px;
  margin: 30px 0px 0px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.offWhite};
    color: ${colors.offBlack};
  }

  @media ${devices.laptop} {
    font-size: 20px;
    padding: 8px 24px;
  }
`;
 */
