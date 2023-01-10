import { contactBanner, contributionBanner } from '~/common/mocks';
import Banner from '~/components/molecules/Banner';

export default function Index() {
  return (
    <>
      <Banner {...contactBanner} />
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
      <Banner {...contributionBanner} />
    </>
  );
}
