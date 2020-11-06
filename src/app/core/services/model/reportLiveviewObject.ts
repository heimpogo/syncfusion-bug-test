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
 */

/**
 * data object for the liveview function (used for output and internally).
 */
export interface ReportLiveviewObject { 
    /**
     * utc timestamp right after the emico call
     */
    timestampUtc?: string;
    /**
     * channel unit e.g. °C
     */
    channelUnit?: string;
    /**
     * channel value e.g. 35
     */
    channelValue?: string;
}