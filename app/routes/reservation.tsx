import {
  accomodationTile,
  contributionBanner,
  transportationTile,
} from "~/common/mocks";
import Banner from "~/components/molecules/Banner";
import Tile from "~/components/molecules/Tile";

export default function Index() {
  return (
    <>
      <Tile {...transportationTile} />
      <Tile {...accomodationTile} />
      <Banner {...contributionBanner} />
    </>
  );
}
