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
import { Area } from './area';
import { ItemPoint } from './itemPoint';

export interface Building { 
    areas?: Array<Area>;
    items?: Array<ItemPoint>;
    name: string;
    pointAddressUuid?: string;
}