import request from "./request";

export async function apiGetCatalog(id: string) {
    return request.get(`catalog/${id}`);
}

export async function apiGetStructure(id: string) {
    return request.get(`catalog/structure/${id}`);
}

export async function apiCatalogList(params: any) {
    return request.get(`catalog/list`, {
        params
    });
}