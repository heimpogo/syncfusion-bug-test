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
import { DeviceTypeName } from './deviceTypeName';
import { DeviceUpdateStatusInternal } from './deviceUpdateStatusInternal';

/**
 * Device Point data transfer object for frontend representation
 */
export interface DevicePointOutputDto { 
    /**
     * UUID of device point
     */
    uuid?: string;
    /**
     * device point name
     */
    name?: string;
    /**
     * Controller ID of a device point
     */
    controllerId?: number;
    /**
     * Controller ID of a device point
     */
    nodeId?: number;
    /**
     * remark of device point
     */
    remark?: string;
    /**
     * Enabled timestamp of a device point
     */
    enabledTimestamp?: Date;
    /**
     * Disabled timestamp of a device point
     */
    disabledTimestamp?: Date;
    /**
     * Indicates whether a device point is pseudo-deleted
     */
    isDeleted?: boolean;
    /**
     * Point Address Building
     */
    building?: string;
    /**
     * Point Address Area
     */
    area?: string;
    /**
     * Point Address Room
     */
    room?: string;
    /**
     * Point Address Segment
     */
    segment?: string;
    /**
     * Device UUID
     */
    device_UUID?: string;
    /**
     * Managed By User UUID
     */
    managedByUserUUID?: string;
    /**
     * Clique Name
     */
    cliqueName?: string;
    /**
     * ControllerPoint UUID
     */
    controllerPoint_UUID?: string;
    deviceTypeName?: DeviceTypeName;
    /**
     * Assigned circulation function
     */
    assignedCirculationFunction?: string;
    deviceUpdateStatus?: DeviceUpdateStatusInternal;
    /**
     * IP Address of Hyplus
     */
    ipAddress?: string;
    /**
     * Indicates whether a device is remote connected
     */
    isRemoteDevice?: boolean;
}