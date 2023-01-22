import { v4 as uuidv4 } from 'uuid';
import type { InfoItemProps } from './InfoItem';
import InfoItem from './InfoItem';

export type InfoProps = {
  headline: string;
  items: Array<InfoItemProps>;
};

const Info = ({ headline, items }: InfoProps) => (
  <div className="flex flex-col justify-around items-center p-14 bg-neutral-300 lg:p-20">
    <h2 className="text-center font-bold text-3xl mb-6 md:text-5xl">
      {headline}
    </h2>
    <div className="flex flex-col justify-around items-center lg:flex-row">
      {items?.map((item: InfoItemProps) => (
        <InfoItem key={uuidv4()} {...item} />
      ))}
    </div>
  </div>
);

export default Info;
