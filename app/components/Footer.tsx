import Name from '~/components/reusable/Name';

export type FooterProps = {
  name: string;
};

const Footer = ({ name }: FooterProps) => (
  <footer className="flex justify-center py-6 px-0 bg-neutral-100 mt-auto md:py-10">
    <Name text={name} />
  </footer>
);

export default Footer;
