type OverlayProps = {
  onClick: () => void;
  show: boolean;
};

const Overlay = ({ onClick, show }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        show ? 'block' : 'hidden'
      } bg-transparent fixed inset-0 z-30`}
    />
  );
};

export default Overlay;
