import { info, photos } from '~/common/mocks';
import Info from '~/components/molecules/Info';
import Photos from '~/components/molecules/Photos';

export default function Index() {
  return (
    <>
      <Info {...info} />
      <Photos {...photos} />
    </>
  );
}
