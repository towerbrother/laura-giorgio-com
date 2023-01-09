import { accomodationTile, transportationTile } from "~/common/mocks";
import Tile from "~/components/molecules/Tile";

export default function Index() {
  return (
    <>
      <Tile {...transportationTile} />
      <Tile {...accomodationTile} />
    </>
  );
}
