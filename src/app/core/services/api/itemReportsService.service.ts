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
import { ReportServiceExecutionResultDto } from '../model/reportServiceExecutionResultDto';
import { ReportServiceInput } from '../model/reportServiceInput';
import { ReportServiceParametersDto } from '../model/reportServiceParametersDto';
import { UnauthorizedResponse } from '../model/unauthorizedResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ItemReportsServiceService {

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
     * Add report service
     * Example (see https://collab.cbb.de/confluence/display/CIT/CreateService+backend+endpoint+description for more details)  &lt;pre&gt;  {      \&quot;servicename\&quot;:\&quot;my Servüce\&quot;,      \&quot;filename\&quot;:\&quot;myServuece\&quot;,   \&quot;action\&quot;:\&quot;email\&quot;,   \&quot;emailAddress\&quot; :\&quot;me@cbb.de\&quot;   \&quot;cronJobTimeStr\&quot;:\&quot;3 * * * *\&quot;, // Execute action at the 3th minute every hour   \&quot;dateAdaptToNow\&quot;:\&quot;no\&quot;, //    \&quot;dataQueryParameters\&quot;:   {       \&quot;uuid\&quot;:\&quot;2b196a3513794cb054574d18c28d46e6\&quot;,       \&quot;typeName\&quot;:\&quot;Wall-E\&quot;,       \&quot;channelChannelNo\&quot;:\&quot;1\&quot;,       \&quot;dateUTCMin\&quot;:\&quot;2019-03-04T11:28:18.000000\&quot;,       \&quot;dateUTCMax\&quot;:\&quot;2019-03-04T11:29:39.000000\&quot;,       \&quot;offset\&quot;:\&quot;10\&quot;,       \&quot;limit\&quot;:\&quot;5\&quot;,       \&quot;order\&quot;:\&quot;asc\&quot;      }  }  &lt;/pre&gt;
     * @param body service object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createService(body?: ReportServiceInput, observe?: 'body', reportProgress?: boolean): Observable<ReportServiceParametersDto>;
    public createService(body?: ReportServiceInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportServiceParametersDto>>;
    public createService(body?: ReportServiceInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportServiceParametersDto>>;
    public createService(body?: ReportServiceInput, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ReportServiceParametersDto>('post',`${this.basePath}/v1/Reports/service`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete report service
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteService(serviceId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteService(serviceId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteService(serviceId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteService(serviceId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling deleteService.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/v1/Reports/service/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Execute report service
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public executeService(serviceId: number, observe?: 'body', reportProgress?: boolean): Observable<ReportServiceExecutionResultDto>;
    public executeService(serviceId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportServiceExecutionResultDto>>;
    public executeService(serviceId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportServiceExecutionResultDto>>;
    public executeService(serviceId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling executeService.');
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

        return this.httpClient.request<ReportServiceExecutionResultDto>('post',`${this.basePath}/v1/Reports/service/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get report service
     * 
     * @param serviceId service uuid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getService(serviceId: number, observe?: 'body', reportProgress?: boolean): Observable<ReportServiceParametersDto>;
    public getService(serviceId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportServiceParametersDto>>;
    public getService(serviceId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportServiceParametersDto>>;
    public getService(serviceId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getService.');
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

        return this.httpClient.request<ReportServiceParametersDto>('get',`${this.basePath}/v1/Reports/service/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all report services
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServices(observe?: 'body', reportProgress?: boolean): Observable<Array<ReportServiceParametersDto>>;
    public getServices(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportServiceParametersDto>>>;
    public getServices(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportServiceParametersDto>>>;
    public getServices(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<ReportServiceParametersDto>>('get',`${this.basePath}/v1/Reports/service`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}