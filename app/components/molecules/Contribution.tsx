import { v4 as uuidv4 } from 'uuid';

export type ContributionProps = {
  headline: string;
  paragraphs: Array<string>;
};

const Contribution = ({ headline, paragraphs }: ContributionProps) => (
  <div>
    <h2>{headline}</h2>
    {paragraphs?.map((paragraph) => (
      <p key={uuidv4()}>{paragraph}</p>
    ))}
  </div>
);

export default Contribution;

/*
 * export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  background-color: ${colors.offGray};

  @media ${devices.tablet} {
    padding: 120px 30px;
  }

  @media ${devices.laptop} {
    padding: 60px 30px;
  }
`;

export const Headline = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    font-size: 46px;
  }

  @media ${devices.laptop} {
    font-size: 56px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 320px;
  font-size: 14px;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    font-size: 20px;
    max-width: 450px;
  }

  @media ${devices.laptop} {
    font-size: 28px;
    max-width: 650px;
    margin-bottom: 40px;
  }
`;

 */
