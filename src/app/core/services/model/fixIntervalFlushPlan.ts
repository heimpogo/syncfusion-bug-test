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

export interface FixIntervalFlushPlan { 
    /**
     * The flush is starting at this point in time, e.g. 05.06.19 08:32
     */
    startDateUtc: string;
    /**
     * Waiting time between two flushes
     */
    intervalHours: number;
}