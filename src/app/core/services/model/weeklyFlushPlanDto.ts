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
import { WeekDays } from './weekDays';

/**
 * WeeklyFlushPlan with next flush times
 */
export interface WeeklyFlushPlanDto { 
    /**
     * Timestamps for the next flush (pwc and pwh)
     */
    nextFlushTimes?: { [key: string]: string; };
    weekDays: WeekDays;
}