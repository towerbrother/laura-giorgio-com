import { useFetcher, useLocation } from '@remix-run/react';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Overlay from '~/components/atoms/Overlay';
import * as S from './styles';

export type LanguageProps = {
  options: Array<string>;
};

const Language = ({ options }: LanguageProps) => {
  const fetcher = useFetcher();
  const { pathname, search } = useLocation();

  const [show, setShow] = useState(false);

  const formWrapperRef = useRef(null);

  const handleDelayedCloseFormWrapper = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  return (
    <S.Container>
      <S.ButtonIcon onClick={() => setShow((prev) => !prev)}>
        <S.Icon />
      </S.ButtonIcon>
      <S.FormWrapper ref={formWrapperRef} className={show ? 'active' : ''}>
        {options.map((option) => (
          <fetcher.Form
            key={uuidv4()}
            method="post"
            action="/set-user-language"
          >
            <input
              type="hidden"
              name="redirectUrl"
              value={pathname + search}
              readOnly
            />
            <S.Option type="submit" onClick={handleDelayedCloseFormWrapper}>
              <>
                <input type="hidden" name="language" value={option} readOnly />
                {option}
              </>
            </S.Option>
          </fetcher.Form>
        ))}
      </S.FormWrapper>
      <Overlay onClick={() => setShow(false)} showOverlay={show} />
    </S.Container>
  );
};

export default Language;
