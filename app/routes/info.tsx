import { info } from '~/common/mocks';
import Info from '~/components/molecules/Info';

export default function Index() {
  return (
    <>
      <Info {...info} />
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
