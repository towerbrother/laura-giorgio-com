import { v4 as uuidv4 } from 'uuid';

export type ContributionProps = {
  headline: string;
  paragraphs: Array<string>;
};

const Contribution = ({ headline, paragraphs }: ContributionProps) => (
  <div className="flex flex-col items-center py-8 px-4 bg-neutral-300 md:py-6 md:px-6 lg:py-20">
    <h2 className="text-center font-bold text-neutral-800 text-4xl mb-8 md:text-5xl lg:text-6xl">
      {headline}
    </h2>
    {paragraphs?.map((paragraph) => (
      <p
        key={uuidv4()}
        className="text-center text-neutral-800 max-w-xs text-sm mb-4 md:text-lg md:max-w-md lg:text-2xl lg:max-w-2xl lg:mb-8"
      >
        {paragraph}
      </p>
    ))}
  </div>
);

export default Contribution;
