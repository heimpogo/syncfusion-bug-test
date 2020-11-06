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

import { DriveInfoObject } from '../model/driveInfoObject';
import { EmailConfiguration } from '../model/emailConfiguration';
import { EmailSecurityError } from '../model/emailSecurityError';
import { ForbiddenResponse } from '../model/forbiddenResponse';
import { InvalidModelStateResponse } from '../model/invalidModelStateResponse';
import { SftpConfiguration } from '../model/sftpConfiguration';
import { SftpSecurityError } from '../model/sftpSecurityError';
import { SystemConfigDto } from '../model/systemConfigDto';
import { SystemConfigInput } from '../model/systemConfigInput';
import { SystemInfo } from '../model/systemInfo';
import { UnauthorizedResponse } from '../model/unauthorizedResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SystemService {

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
     * Checks the SFTP configuration for security
     * 
     * @param body SFTP configuration
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkSftpConfiguration(body?: SftpConfiguration, observe?: 'body', reportProgress?: boolean): Observable<Array<SftpSecurityError>>;
    public checkSftpConfiguration(body?: SftpConfiguration, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SftpSecurityError>>>;
    public checkSftpConfiguration(body?: SftpConfiguration, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SftpSecurityError>>>;
    public checkSftpConfiguration(body?: SftpConfiguration, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<Array<SftpSecurityError>>('post',`${this.basePath}/v1/System/checkSftpConfiguration`,
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
     * Checks the SMTP configuration for security
     * 
     * @param body Email configuration
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkSmtpConfiguration(body?: EmailConfiguration, observe?: 'body', reportProgress?: boolean): Observable<Array<EmailSecurityError>>;
    public checkSmtpConfiguration(body?: EmailConfiguration, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<EmailSecurityError>>>;
    public checkSmtpConfiguration(body?: EmailConfiguration, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<EmailSecurityError>>>;
    public checkSmtpConfiguration(body?: EmailConfiguration, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<Array<EmailSecurityError>>('post',`${this.basePath}/v1/System/checkSmtpConfiguration`,
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
     * Get info about all drives (internal flash, external usb-drive)
     * 
     * @param uuid Uuid of the controller point
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDrivesInfo(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<Array<DriveInfoObject>>;
    public getDrivesInfo(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DriveInfoObject>>>;
    public getDrivesInfo(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DriveInfoObject>>>;
    public getDrivesInfo(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getDrivesInfo.');
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

        return this.httpClient.request<Array<DriveInfoObject>>('get',`${this.basePath}/v1/System/drives/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get rest api version
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRestApiVersion(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getRestApiVersion(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getRestApiVersion(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getRestApiVersion(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<string>('get',`${this.basePath}/v1/System/restApiVersion`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the saved configuration of the system from the database  To get the actual network parameters from the system use GetSystemInfo
     * 
     * @param uuid Uuid of the controller point
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSystemConfig(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<SystemConfigDto>;
    public getSystemConfig(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SystemConfigDto>>;
    public getSystemConfig(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SystemConfigDto>>;
    public getSystemConfig(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getSystemConfig.');
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

        return this.httpClient.request<SystemConfigDto>('get',`${this.basePath}/v1/System/file/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get info about system (e.g. network information, controller status)
     * 
     * @param uuid Uuid of the controller point
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSystemInfo(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<SystemInfo>;
    public getSystemInfo(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SystemInfo>>;
    public getSystemInfo(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SystemInfo>>;
    public getSystemInfo(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getSystemInfo.');
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

        return this.httpClient.request<SystemInfo>('get',`${this.basePath}/v1/System/general/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a system preference
     * 
     * @param applicationKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSystemPreference(applicationKey: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getSystemPreference(applicationKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getSystemPreference(applicationKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getSystemPreference(applicationKey: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (applicationKey === null || applicationKey === undefined) {
            throw new Error('Required parameter applicationKey was null or undefined when calling getSystemPreference.');
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

        return this.httpClient.request<string>('get',`${this.basePath}/v1/System/preference/${encodeURIComponent(String(applicationKey))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Generate and Relaod Emico Config
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reloadConfig(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public reloadConfig(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public reloadConfig(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public reloadConfig(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<string>('post',`${this.basePath}/v1/System/reloadconfig`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set the configuration of the system
     * 
     * @param uuid Uuid of the controller point
     * @param body Configuration parameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setSystemConfig(uuid: string, body?: SystemConfigInput, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setSystemConfig(uuid: string, body?: SystemConfigInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setSystemConfig(uuid: string, body?: SystemConfigInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setSystemConfig(uuid: string, body?: SystemConfigInput, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling setSystemConfig.');
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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/v1/System/file/${encodeURIComponent(String(uuid))}`,
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
     * Set a system preference
     * 
     * @param applicationKey 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setSystemPreference(applicationKey: string, body?: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public setSystemPreference(applicationKey: string, body?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public setSystemPreference(applicationKey: string, body?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public setSystemPreference(applicationKey: string, body?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (applicationKey === null || applicationKey === undefined) {
            throw new Error('Required parameter applicationKey was null or undefined when calling setSystemPreference.');
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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<string>('post',`${this.basePath}/v1/System/preference/${encodeURIComponent(String(applicationKey))}`,
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
     * Uploads the private key
     * 
     * @param ContentType 
     * @param ContentDisposition 
     * @param Headers 
     * @param Length 
     * @param Name 
     * @param FileName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadPrivateKeyForSftpForm(ContentType?: string, ContentDisposition?: string, Headers?: { [key: string]: Array<string>; }, Length?: number, Name?: string, FileName?: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public uploadPrivateKeyForSftpForm(ContentType?: string, ContentDisposition?: string, Headers?: { [key: string]: Array<string>; }, Length?: number, Name?: string, FileName?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public uploadPrivateKeyForSftpForm(ContentType?: string, ContentDisposition?: string, Headers?: { [key: string]: Array<string>; }, Length?: number, Name?: string, FileName?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public uploadPrivateKeyForSftpForm(ContentType?: string, ContentDisposition?: string, Headers?: { [key: string]: Array<string>; }, Length?: number, Name?: string, FileName?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (ContentType !== undefined) {
            formParams = formParams.append('ContentType', <any>ContentType) as any || formParams;
        }
        if (ContentDisposition !== undefined) {
            formParams = formParams.append('ContentDisposition', <any>ContentDisposition) as any || formParams;
        }
        if (Headers !== undefined) {
            formParams = formParams.append('Headers', <any>Headers) as any || formParams;
        }
        if (Length !== undefined) {
            formParams = formParams.append('Length', <any>Length) as any || formParams;
        }
        if (Name !== undefined) {
            formParams = formParams.append('Name', <any>Name) as any || formParams;
        }
        if (FileName !== undefined) {
            formParams = formParams.append('FileName', <any>FileName) as any || formParams;
        }

        return this.httpClient.request<string>('post',`${this.basePath}/v1/System/uploadPrivateKey`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}