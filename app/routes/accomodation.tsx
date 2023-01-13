import { hotelTile, pensionTile } from '~/common/mocks';
import Tile from '~/components/molecules/Tile';

export default function Index() {
  return (
    <>
      <Tile {...hotelTile} />
      <Tile {...pensionTile} />
    </>
  );
}
