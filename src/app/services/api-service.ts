import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DisorderResponse } from '../types';

export class ApiService {
    private baseUrl: string = "http://localhost:9090";

    constructor(baseUrl: string, private http: HttpClient) {
        this.baseUrl += baseUrl;
    }

    protected get(endpoint: string = "") {
        return this.http.get(`${this.baseUrl}${endpoint}`);
    }

    protected post(endpoint: string = "", body: any) {
        return this.http.post(`${this.baseUrl}${endpoint}`, body)
    }
}
