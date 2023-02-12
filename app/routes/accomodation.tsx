import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Tile from "~/components/Tile";

import { userCookie } from "~/utils/cookie.server";
import { getIndex } from "~/utils/language";
import { hotelTile, pensionTile } from "~/utils/mockedDB";

export const meta: MetaFunction = () => ({
  title: "Accomodation 🏨",
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty("language");

  return json({
    hotelTile: hotelTile[getIndex(condition ? cookie.language : "en")],
    pensionTile: pensionTile[getIndex(condition ? cookie.language : "en")],
  });
}

export default function Index() {
  const { hotelTile, pensionTile } = useLoaderData<typeof loader>();

  return (
    <>
      <Tile {...hotelTile} />
      <Tile {...pensionTile} />
    </>
  );
}
