import { useState } from 'react';
import Button from '~/components/atoms/Button';
import ConditionalWrapper from '~/components/atoms/ConditionalWrapper';
import * as S from './styles';

export type BankDetailsItemProps = {
  type: 'iban' | 'bic' | 'name' | 'reference';
  value: string;
};

const BankDetailsItemm = ({ value }: BankDetailsItemProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setIsError] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(value)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(() => {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 1500);
      });
  };

  return (
    <S.ClipboardCopy>
      <ConditionalWrapper condition={isError}>
        <S.Text type="text" value="Oh no! Something went wrong!" readOnly />
      </ConditionalWrapper>
      <ConditionalWrapper condition={!isError}>
        <S.Text type="text" value={value} readOnly />
      </ConditionalWrapper>
      <Button onClick={handleCopyClick}>
        <S.ButtonText>{isCopied ? 'Done' : 'Copy'}</S.ButtonText>
      </Button>
    </S.ClipboardCopy>
  );
};

export default BankDetailsItemm;
