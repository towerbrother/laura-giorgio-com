import { contribution, photos } from '~/common/mocks';
import Contribution from '~/components/molecules/Contribution';
import Photos from '~/components/molecules/Photos';

export default function Index() {
  return (
    <>
      <Contribution {...contribution} />
      <Photos {...photos} />
    </>
  );
}
