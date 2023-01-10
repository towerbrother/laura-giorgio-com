import Stage from '~/components/molecules/Stage';
import Tile from '~/components/molecules/Tile';

import { stage, homeTile } from '~/common/mocks';

export default function Index() {
  return (
    <>
      <Stage {...stage} />
      <Tile {...homeTile} />
    </>
  );
}
