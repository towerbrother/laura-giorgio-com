import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '~/components/atoms/Button';
import Overlay from '~/components/atoms/Overlay';
import * as S from './styles';

export type LanguageProps = {
  options: Array<string>;
};

const Language = ({ options }: LanguageProps) => {
  const [show, setShow] = useState(false);

  return (
    <S.Container>
      <Button onClick={() => setShow((prev) => !prev)}>
        <S.Icon />
      </Button>
      <S.Form className={show ? 'active' : ''}>
        {options.map((option) => (
          <S.Option key={uuidv4()} type="submit" onClick={() => setShow(false)}>
            {option}
          </S.Option>
        ))}
      </S.Form>
      <Overlay onClick={() => setShow(false)} showOverlay={show} />
    </S.Container>
  );
};

export default Language;
