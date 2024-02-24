import request from "./request";

export async function apiAddContact(data: any) {
    return request.post(`contact/add`, data);
}