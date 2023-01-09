import { colors } from "~/common/constants";
import { contactBanner } from "~/common/mocks";
import Banner from "~/components/molecules/Banner";

export default function Index() {
  return (
    <>
      <Banner {...contactBanner} />
      <div
        style={{
          height: "800px",
          width: "100%",
          backgroundColor: `${colors.offWhite}`,
          textAlign: "center",
          verticalAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
        }}
      >
        MIX OF PICTURES AND TEXT
      </div>
    </>
  );
}
