type OverlayProps = {
  onClick: () => void;
  show: boolean;
};

const Overlay = ({ onClick, show }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={`${show ? 'fixed' : 'hidden'} bg-transparent inset-0 z-40`}
    />
  );
};

export default Overlay;
