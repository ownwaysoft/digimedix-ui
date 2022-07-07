import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IApplicationResponse } from "../utils";
@Injectable({ providedIn: "root" })
export class CrudService {
  apiPrefixEnvironmentUrl: string = environment.API_URL;
  constructor(private httpClient: HttpClient) { }


  create(url: any, body: object | Array<object>,
  ): Observable<IApplicationResponse> {
    return this.httpClient.post<any>(
      this.apiPrefixEnvironmentUrl + url,
      body
    );
  }

  fileUpload(url: any,
    body: object | Array<object>,
  ): Observable<IApplicationResponse> {
    return this.httpClient.post<any>(
      this.apiPrefixEnvironmentUrl,
      body
    );
  }

  get(url: any,
    retrievableId?: string | number | undefined | null,
    params?: HttpParams,
  ): Observable<IApplicationResponse> {
    if (retrievableId) {
      let finalParams: string;
      let URL: string;
      if (params) {
        // finalParams = params ? params.toString().replace('%20', ' ') : null;
        // finalParams = params ? params.toString().replace('%2520', ' ') : null;
        URL = this.apiPrefixEnvironmentUrl + "/" + url + retrievableId + "?" + params;
      }
      else {
        URL = this.apiPrefixEnvironmentUrl + "/" + url + retrievableId;
      }
      if (params) {
        return this.httpClient.get<IApplicationResponse>(
          URL
        );
      } else {
        return this.httpClient.get<IApplicationResponse>(
          this.apiPrefixEnvironmentUrl + "/" + url + retrievableId
        );
      }
    }
    else {
      let finalParams: string;
      let URL: string;
      if (params) {
        // finalParams = params ? params.toString().replace('%20', ' ') : null;
        // finalParams = params ? params.toString().replace('%2520', ' ') : null;
        URL = this.apiPrefixEnvironmentUrl + url + "?" + params;
      }
      else {
        URL = this.apiPrefixEnvironmentUrl + url;
      }

      return this.httpClient.get<IApplicationResponse>(
        URL
      );

    }
  }


  update(url: any,
    body: object | Array<object>,
    apiVersion = 0
  ): Observable<IApplicationResponse> {
    return this.httpClient.put<IApplicationResponse>(
      this.apiPrefixEnvironmentUrl,
      body
    );
  }

  enableDisable(url: any,
    body: object | Array<object>,
    apiVersion: Number = 0

  ): Observable<IApplicationResponse> {
    return this.httpClient.put<IApplicationResponse>(
      this.apiPrefixEnvironmentUrl + '/enable-disable',
      body
    );
  }

  delete(url: any,
    selectedIds: string,
    params?: HttpParams,
    apiVersion = 0
  ): Observable<IApplicationResponse> {

    return this.httpClient.delete<IApplicationResponse>(
      this.apiPrefixEnvironmentUrl,
      {
        params: selectedIds ? { ids: selectedIds } : params
      }
    );
  }

  deleteByParams(url: any,
    body: object,
    apiVersion = 0
  ): Observable<IApplicationResponse> {

    return this.httpClient.delete<IApplicationResponse>(
      this.apiPrefixEnvironmentUrl,
      body
    );
  }


  downloadFile(url: any,
    body?: object,
    apiVersion = 0,
    params?: HttpParams | string,
  ): Observable<any> {
    if (params)
      return this.httpClient.get(this.apiPrefixEnvironmentUrl + params, {
        responseType: 'blob',
        withCredentials: false,
        headers: new HttpHeaders({
          'Content-Type': 'application/octet-stream'
        })
      })
    else
      return this.httpClient.get(this.apiPrefixEnvironmentUrl, {
        responseType: 'blob',
        withCredentials: false,
        headers: new HttpHeaders({
          'Content-Type': 'application/octet-stream'
        })
      })
  }
}
