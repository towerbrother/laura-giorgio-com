import Name from '~/components/reusable/Name';

export type FooterProps = {
  name: string;
};

const Footer = ({ name }: FooterProps) => (
  <footer className="flex justify-center items-center bg-neutral-100 mt-auto h-[10vh]">
    <Name text={name} />
  </footer>
);

export default Footer;
