import request from "./request";

export async function apiGetCatalog(id: string) {
    return request.get(`catalog/${id}`);
}

export async function apiGetCatalogByName(id: string) {
    return request.get(`catalog/name/${id}`);
}

export async function apiGetStructure(id: string) {
    return request.get(`catalog/structure-by-id/${id}`);
}

export async function apiGetStructureNew(id: string) {
    return request.get(`catalog/structure/${id}`);
}

export async function apiCatalogList(params: any) {
    params.active = true;
    return request.get(`catalog/list`, {
        params
    });
}

export async function queryGetComponents(normalizedName: string, locale: string) {
    return request.get(`catalog/components`, {
        params: {
            normalizedName,
            locale
        }
    });
}