import { colors } from '~/common/constants';
import { info } from '~/common/mocks';
import Info from '~/components/molecules/Info';

export default function Index() {
  return (
    <>
      <Info {...info} />
      <div
        style={{
          height: '800px',
          width: '100%',
          backgroundColor: `${colors.offWhite}`,
          textAlign: 'center',
          verticalAlign: 'center',
          fontSize: '36px',
          fontWeight: '700',
        }}
      >
        MIX OF PICTURES AND TEXT
      </div>
    </>
  );
}
