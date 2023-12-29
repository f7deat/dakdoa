declare namespace API {
    type Catalog = {
        id: string;
        name: string;
        description: string;
        thumbnail: string;
        modifiedDate: string;
        viewCount: number;
    }
}

type HomeSectionItemProps = {
    active: boolean
}