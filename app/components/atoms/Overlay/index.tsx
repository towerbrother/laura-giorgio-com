import * as S from './styles';

type OverlayProps = {
  backgroundColor?: string;
  onClick: () => void;
  showOverlay: boolean;
};

const Overlay = ({ backgroundColor, onClick, showOverlay }: OverlayProps) => {
  return (
    <S.Element
      onClick={onClick}
      className={showOverlay ? 'show' : ''}
      $backgroundColor={backgroundColor ?? 'transparent'}
    />
  );
};

export default Overlay;
