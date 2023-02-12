import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Banner from "~/components/Banner";

import { userCookie } from "~/utils/cookie.server";
import { contactBanner } from "~/utils/mockedDB";
import { getIndex } from "~/utils/language";

export const meta: MetaFunction = () => ({
  title: "Contact 👌",
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await userCookie.parse(cookieHeader);

  const condition = cookie !== null && cookie.hasOwnProperty("language");

  return json({
    contactBanner: contactBanner[getIndex(condition ? cookie.language : "en")],
  });
}

export default function Index() {
  const { contactBanner } = useLoaderData<typeof loader>();

  return (
    <>
      <Banner {...contactBanner} height="h-[88vh]" />
    </>
  );
}
