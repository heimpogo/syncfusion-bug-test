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

export interface DriveInfoObject { 
    /**
     * Name of the Drive e.g. C:\\ on windows
     */
    name?: string;
    /**
     * File system like NTFS
     */
    driveFormat?: string;
    /**
     * This property indicates the amount of free space available on the drive. Note that this number may be different from the TotalFreeSpace number because this property takes into account disk quotas.  Size in bytes
     */
    availableFreeSpace?: number;
    /**
     * This property indicates the total amount of free space available on the drive, not just what is available to the current user.  Size in bytes
     */
    totalFreeSpace?: number;
    /**
     * Size in bytes
     */
    totalSize?: number;
    /**
     * /e.g. Fixed, Removable, Network
     */
    driveType?: string;
}