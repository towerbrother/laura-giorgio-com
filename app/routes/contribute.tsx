import { bankDetails } from '~/common/mocks';
import BankDetails from '~/components/molecules/BankDetails';

export default function Index() {
  return (
    <>
      <BankDetails {...bankDetails} />
      <div
        style={{
          backgroundColor: 'red',
          color: 'white',
          textAlign: 'center',
          fontSize: '32px',
          padding: '30px 0px',
        }}
      >
        PHOTOS
      </div>
    </>
  );
}
