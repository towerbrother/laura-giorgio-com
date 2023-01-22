import { useFetcher, useLocation } from '@remix-run/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaLanguage } from 'react-icons/fa';

import Overlay from '~/components/atoms/Overlay';
import Button from '~/components/atoms/Button';
import Input from '~/components/atoms/Input';

export type LanguageProps = {
  options: Array<string>;
};

const Language = ({ options }: LanguageProps) => {
  const fetcher = useFetcher();
  const { pathname, search } = useLocation();

  const [show, setShow] = useState(false);

  const handleDelayedCloseFormWrapper = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  return (
    <div>
      <Button onClick={() => setShow((prev) => !prev)}>
        <FaLanguage />
      </Button>
      <div className={show ? 'active' : ''}>
        {options.map((option) => (
          <fetcher.Form
            key={uuidv4()}
            method="post"
            action="/set-user-language"
          >
            <Input
              type="hidden"
              name="redirectUrl"
              value={pathname + search}
              readOnly
            />
            <Button type="submit" onClick={handleDelayedCloseFormWrapper}>
              <>
                <Input type="hidden" name="language" value={option} readOnly />
                {option}
              </>
            </Button>
          </fetcher.Form>
        ))}
      </div>
      <Overlay onClick={() => setShow(false)} showOverlay={show} />
    </div>
  );
};

export default Language;

/*
 * export const Container = styled.div`
  position: relative;
  top: 4px;
  right: 50px;

  @media ${devices.laptop} {
    right: 0px;
  }
`;

export const ButtonIcon = styled(Button)`
  position: relative;
  z-index: 32;
`;

export const Icon = styled(FaLanguage)`
  font-size: 48px;
`;

export const FormWrapper = styled.div`
  opacity: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
  z-index: 32;
  right: -8px;
  padding: 10px 15px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: ${colors.offWhite};
  transition: opacity 0.3s ease-in;

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    height: auto;
  }
`;

export const Option = styled(Button)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
`;
 */
