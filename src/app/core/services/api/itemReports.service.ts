import { ReportFileParametersDto } from '../model/reportFileParametersDto';
/**
 * TWMS REST API
 * TWMS REST API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ForbiddenResponse } from '../model/forbiddenResponse';
import { ProblemDetails } from '../model/problemDetails';
import { ReportLiveviewObject } from '../model/reportLiveviewObject';
import { UnauthorizedResponse } from '../model/unauthorizedResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ItemReportsService {

    protected basePath = '/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Read/import files/reports from the usb-drive.
     * 
     * @param uuid user uuid
     * @param fileName report/file created by user uuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsbfile(uuid: string, fileName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsbfile(uuid: string, fileName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsbfile(uuid: string, fileName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsbfile(uuid: string, fileName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling deleteUsbfile.');
        }

        if (fileName === null || fileName === undefined) {
            throw new Error('Required parameter fileName was null or undefined when calling deleteUsbfile.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/Reports/usbfile/${encodeURIComponent(String(uuid))}/${encodeURIComponent(String(fileName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Download file/report from the local filesystem (usb-drive).
     * 
     * @param uuid user uuid
     * @param fileName report/file created by user uuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public downloadUsbfile(uuid: string, fileName: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public downloadUsbfile(uuid: string, fileName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public downloadUsbfile(uuid: string, fileName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public downloadUsbfile(uuid: string, fileName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling downloadUsbfile.');
        }

        if (fileName === null || fileName === undefined) {
            throw new Error('Required parameter fileName was null or undefined when calling downloadUsbfile.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Blob>('get',`${this.basePath}/v1/Reports/usbfile/${encodeURIComponent(String(uuid))}/${encodeURIComponent(String(fileName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get data from a running liveview
     * 
     * @param devicePointId devicePointId
     * @param channelFunc channelFunc e.g. Get_Temperature
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLiveview(devicePointId: string, channelFunc: string, observe?: 'body', reportProgress?: boolean): Observable<ReportLiveviewObject>;
    public getLiveview(devicePointId: string, channelFunc: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportLiveviewObject>>;
    public getLiveview(devicePointId: string, channelFunc: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportLiveviewObject>>;
    public getLiveview(devicePointId: string, channelFunc: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (devicePointId === null || devicePointId === undefined) {
            throw new Error('Required parameter devicePointId was null or undefined when calling getLiveview.');
        }

        if (channelFunc === null || channelFunc === undefined) {
            throw new Error('Required parameter channelFunc was null or undefined when calling getLiveview.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ReportLiveviewObject>('get',`${this.basePath}/v1/Reports/liveview/${encodeURIComponent(String(devicePointId))}/${encodeURIComponent(String(channelFunc))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Show the files names/reports from the signed in user on the usb-drive.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsbfiles(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: Array<ReportFileParametersDto>; }>;
    public getUsbfiles(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: Array<ReportFileParametersDto>; }>>;
    public getUsbfiles(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: Array<ReportFileParametersDto>; }>>;
    public getUsbfiles(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<{ [key: string]: Array<ReportFileParametersDto>; }>('get',`${this.basePath}/v1/Reports/usbfile`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}