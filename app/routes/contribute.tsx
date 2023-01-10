import { bankDetails } from '~/common/mocks';
import BankDetails from '~/components/molecules/BankDetails';

export default function Index() {
  return (
    <>
      <BankDetails {...bankDetails} />
    </>
  );
}
