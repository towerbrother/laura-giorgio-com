import { useFetcher, useLocation } from '@remix-run/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaLanguage } from 'react-icons/fa';

import Overlay from '~/components/atoms/Overlay';
import Button from '~/components/atoms/Button';

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
    <div className="relative top-1 lg:right-0">
      <Button
        className="relative z-50"
        onClick={() => setShow((prev) => !prev)}
      >
        <FaLanguage className="text-5xl text-neutral-800 hover:opacity-80 lg:text-6xl" />
      </Button>
      <div
        className={`${
          show
            ? 'opacity-100 height-auto'
            : 'opacity-0 height-0 overflow-hidden'
        } absolute z-50 -right-[4px] flex flex-col items-center py-2 px-3 bg-neutral-100 shadow-lg transition-opacity ease-in-out duration-300 lg:right-[2px]`}
      >
        {options.map((option) => (
          <fetcher.Form
            key={uuidv4()}
            method="post"
            action="/set-user-language"
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
                <span className="text-2xl font-bold text-neutral-800 uppercase">
                  {option}
                </span>
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
