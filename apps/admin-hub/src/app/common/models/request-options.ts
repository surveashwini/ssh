export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
export type RequestOptions = {
    method: HttpMethod;
    headers?: Record<string, any>;
    body?: any;
}
