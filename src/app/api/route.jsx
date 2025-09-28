import { linkCategories, popularPortals, Miscellaneous } from '@/constants/constants';

export const dynamic = 'force-static';

export async function GET() {
    const removeIconField = (data) => data.map(item => 
        item.links ? { ...item, links: item.links.map(({icon, ...rest}) => rest) } : 
        (({icon, ...rest}) => rest)(item)
    );
    
    return Response.json({ 
        popularPortals: removeIconField(popularPortals),
        linkCategories: removeIconField(linkCategories),
        miscellaneous: removeIconField(Miscellaneous)
    });
}