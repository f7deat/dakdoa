declare namespace API {
    type Catalog = {
        id: string;
        name: string;
        description: string;
        thumbnail: string;
        modifiedDate: string;
        viewCount: number;
        normalizedName: string;
    }
}

type HomeSectionItemProps = {
    active: boolean;
    brands?: any[]
}