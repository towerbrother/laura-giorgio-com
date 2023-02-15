import { useFetcher, useLocation } from '@remix-run/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Overlay from '~/components/reusable/Overlay';
import Button from '~/components/reusable/Button';
import ConditionalWrapper from './reusable/ConditionalWrapper';

export type LanguageProps = {
  currentLanguage: string;
  options: Array<string>;
};

const Language = ({ currentLanguage, options }: LanguageProps) => {
  const fetcher = useFetcher();
  const { pathname, search } = useLocation();

  const [show, setShow] = useState(false);

  const handleDelayedCloseFormWrapper = () => {
    setTimeout(() => {
      setShow(false);
    }, 200);
  };

  return (
    <div className="relative top-1 lg:right-0">
      <Button
        className="relative z-50"
        onClick={() => setShow((prev) => !prev)}
      >
        <ConditionalWrapper condition={currentLanguage === 'en'}>
          <img src="/uk.png" alt="English" className="w-12" />
        </ConditionalWrapper>
        <ConditionalWrapper condition={currentLanguage === 'de'}>
          <img src="/de.png" alt="Deutsch" className="w-12" />
        </ConditionalWrapper>
        <ConditionalWrapper condition={currentLanguage === 'it'}>
          <img src="/it.png" alt="Italiano" className="w-12" />
        </ConditionalWrapper>
      </Button>
      <div
        className={`${
          show
            ? 'opacity-100 height-auto'
            : 'opacity-0 height-0 overflow-hidden'
        } absolute z-50 flex flex-col items-center p-2 bg-neutral-100 shadow-lg transition-opacity ease-in-out duration-300`}
      >
        {options.map((option) => (
          <fetcher.Form
            key={uuidv4()}
            method="post"
            action="/utils/set-user-language"
          >
            <Button type="submit" onClick={handleDelayedCloseFormWrapper}>
              <>
                <input
                  type="hidden"
                  name="redirectUrl"
                  value={pathname + search}
                  readOnly
                />
                <input type="hidden" name="language" value={option} readOnly />
                <ConditionalWrapper condition={option === 'en'}>
                  <img src="/uk.png" alt="English" />
                </ConditionalWrapper>
                <ConditionalWrapper condition={option === 'de'}>
                  <img src="/de.png" alt="Deutsch" />
                </ConditionalWrapper>
                <ConditionalWrapper condition={option === 'it'}>
                  <img src="/it.png" alt="Italiano" />
                </ConditionalWrapper>
              </>
            </Button>
          </fetcher.Form>
        ))}
      </div>
      <Overlay onClick={() => setShow(false)} show={show} />
    </div>
  );
};

export default Language;
