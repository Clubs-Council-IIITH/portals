import {
  linkCategories,
  popularPortals,
  Miscellaneous,
} from "@/constants/constants";

export const dynamic = "force-static";

export async function GET() {
  const removeIconField = (data) =>
    data.map((item) =>
      item.links
        ? { ...item, links: item.links.map(({ icon, ...rest }) => rest) }
        : (({ icon, ...rest }) => rest)(item),
    );

  // filter out My IIIT app entries both
  let popularPortalsFiltered = popularPortals.filter(
    (portal) => !portal.name.startsWith("My IIIT App"),
  );

  return Response.json({
    popularPortals: removeIconField(popularPortalsFiltered),
    linkCategories: removeIconField(linkCategories),
    miscellaneous: removeIconField(Miscellaneous),
  });
}
