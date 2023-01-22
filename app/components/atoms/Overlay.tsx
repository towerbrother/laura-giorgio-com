type OverlayProps = {
  onClick: () => void;
  showOverlay: boolean;
};

const Overlay = ({ onClick, showOverlay }: OverlayProps) => {
  return <div onClick={onClick} className={showOverlay ? 'show' : ''} />;
};

export default Overlay;

/**
 * background: transparent
 * 
 * 
 * export const Element = styled.div<OverlayElementProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: none;
  position: fixed;
  z-index: 30;
  inset: 0;

  &.show {
    display: block;
  }
`;
 */
