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
 * data transfer object for creating a new controller point in frontend representation
 */
export interface ControllerPointCreateInput { 
    /**
     * Name of a Controller Point
     */
    name: string;
    /**
     * Remark of Device Point
     */
    remark?: string;
    /**
     * UUID of PointAddress
     */
    pointAddressUUID: string;
}