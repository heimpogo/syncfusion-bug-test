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

export interface ControllerCreateInput { 
    /**
     * Controller name
     */
    name: string;
    /**
     * SerialNumber of Controller
     */
    serialNumber: string;
    /**
     * remark of Controller
     */
    remark: string;
    /**
     * Last Maintenance Timestamp of Controller
     */
    lastMaintenanceTimestamp: string;
    /**
     * Last Maintenance Timestamp of Controller
     */
    maintenanceInterval: string;
}