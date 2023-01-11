import { contactBanner, contributionBanner, photos } from '~/common/mocks';
import Banner from '~/components/molecules/Banner';
import Photos from '~/components/molecules/Photos';

export default function Index() {
  return (
    <>
      <Banner {...contactBanner} />
      <Photos {...photos} />
      <Banner {...contributionBanner} />
    </>
  );
}
