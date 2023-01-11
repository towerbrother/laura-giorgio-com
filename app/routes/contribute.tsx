import { bankDetails, photos } from '~/common/mocks';
import BankDetails from '~/components/molecules/BankDetails';
import Photos from '~/components/molecules/Photos';

export default function Index() {
  return (
    <>
      <BankDetails {...bankDetails} />
      <Photos {...photos} />
    </>
  );
}
