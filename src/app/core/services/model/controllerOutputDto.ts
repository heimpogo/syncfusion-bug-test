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
import { ControllerStatus } from './controllerStatus';
import { ControllerTypeEnum } from './controllerTypeEnum';

export interface ControllerOutputDto { 
    /**
     * UUID of the Controller
     */
    uuid?: string;
    /**
     * Name of the Controller
     */
    name?: string;
    /**
     * Serial Number of the Controller
     */
    serialNumber?: string;
    /**
     * Remark of the Controller
     */
    remark?: string;
    /**
     * Last Maintenance Timestamp of the Controller
     */
    lastMaintenanceTimestamp?: Date;
    /**
     * Maintenance Interval of the Controller
     */
    maintenanceInterval?: string;
    /**
     * Managed By User UUID
     */
    managedByUserUUID?: string;
    controllerStatus?: ControllerStatus;
    /**
     * Controller Point UUID
     */
    controllerPoint_UUID?: string;
    /**
     * IP Address of a Controller
     */
    ipAddress?: string;
    /**
     * MAC Address of a Controller
     */
    macAddress?: string;
    controllerType?: ControllerTypeEnum;
    /**
     * Rauc software version of the controller
     */
    softwareRevision?: string;
    /**
     * uuid != GlobalDataMgr.CurrentControllerUuid
     */
    readonly isRemoteController?: boolean;
}