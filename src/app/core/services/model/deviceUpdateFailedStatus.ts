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

export type DeviceUpdateFailedStatus = 'EmicoIdentityObject' | 'EmicoSendToBootloader' | 'EmicoSendToApplication' | 'EmicoDeleteProgram' | 'EmicoScanAndMatchDeviceInBL' | 'EmicoScanAndMatchDeviceInApp' | 'EmicoConfigureNodeIDInBL' | 'EmicoConfigureNodeIDInApp' | 'EmicoDownload' | 'EmicoGeneralError' | 'FileCopy' | 'ExtractFile' | 'InvalidSignature' | 'Unknown' | 'NodeIdIsInvalidOrNull';

export const DeviceUpdateFailedStatus = {
    EmicoIdentityObject: 'EmicoIdentityObject' as DeviceUpdateFailedStatus,
    EmicoSendToBootloader: 'EmicoSendToBootloader' as DeviceUpdateFailedStatus,
    EmicoSendToApplication: 'EmicoSendToApplication' as DeviceUpdateFailedStatus,
    EmicoDeleteProgram: 'EmicoDeleteProgram' as DeviceUpdateFailedStatus,
    EmicoScanAndMatchDeviceInBL: 'EmicoScanAndMatchDeviceInBL' as DeviceUpdateFailedStatus,
    EmicoScanAndMatchDeviceInApp: 'EmicoScanAndMatchDeviceInApp' as DeviceUpdateFailedStatus,
    EmicoConfigureNodeIDInBL: 'EmicoConfigureNodeIDInBL' as DeviceUpdateFailedStatus,
    EmicoConfigureNodeIDInApp: 'EmicoConfigureNodeIDInApp' as DeviceUpdateFailedStatus,
    EmicoDownload: 'EmicoDownload' as DeviceUpdateFailedStatus,
    EmicoGeneralError: 'EmicoGeneralError' as DeviceUpdateFailedStatus,
    FileCopy: 'FileCopy' as DeviceUpdateFailedStatus,
    ExtractFile: 'ExtractFile' as DeviceUpdateFailedStatus,
    InvalidSignature: 'InvalidSignature' as DeviceUpdateFailedStatus,
    Unknown: 'Unknown' as DeviceUpdateFailedStatus,
    NodeIdIsInvalidOrNull: 'NodeIdIsInvalidOrNull' as DeviceUpdateFailedStatus
};