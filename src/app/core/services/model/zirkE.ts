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

export interface ZirkE { 
    /**
     * Device UUID
     */
    uuid: string;
    /**
     * Funktionstest ausführen
     */
    functionTestExecutionStart?: number;
    /**
     * Funktionstest beendet
     */
    functionTestFinished?: number;
    /**
     * Thermische Desinfektion \\\"Offen\\\" oder \\\"Geschlossen\\\" auslösen
     */
    thermalDisinfectionSwitchMode?: number;
    /**
     * Selbstreinigungsfunktion auslösen
     */
    startSelfCleaning?: number;
    /**
     * Solltemperatur PWH-C
     */
    targetTemperaturePWHC?: number;
    /**
     * Solltemperatur PWC-C
     */
    targetTemperaturePWCC?: number;
    /**
     * Auswahl Warmwasserzirkulation PWH-C
     */
    selectWarmWaterCirculationPWHC?: number;
    /**
     * Auswahl Kaltwasserzirkulation PWC-C
     */
    selectColdWaterCirculationPWCC?: number;
    /**
     * Temperatur PWH-C
     */
    temperaturePWHC?: number;
    /**
     * Temperatur PWC-C
     */
    temperaturePWCC?: number;
    /**
     * Stellgröße PWH-C
     */
    variablePWHC?: number;
    /**
     * Stellgröße PWC-C
     */
    variablePWCC?: number;
    /**
     * Unteres Limit Stellgröße PWH-C
     */
    lowerLimitVariablePWHC?: number;
    /**
     * Oberes Limit Stellgröße PWH-C
     */
    upperLimitVariablePWHC?: number;
    /**
     * Unteres Limit Stellgröße PWC-C
     */
    lowerLimitVariablePWCC?: number;
    /**
     * Oberes Limit Stellgröße PWC-C
     */
    upperLimitVariablePWCC?: number;
    /**
     * Parameter Neutrale Zone PWH-C
     */
    parameterNeutralZonePWHC?: number;
    /**
     * Parameter Neutrale Zone PWC-C
     */
    parameterNeutralZonePWCC?: number;
    /**
     * Parameter Proportionalanteil PWH-C
     */
    parameterProportionalPartPWHC?: number;
    /**
     * Parameter Proportionalanteil PWC-C
     */
    parameterProportionalPartPWCC?: number;
    /**
     * Parameter Nachstellzeit PWH-C
     */
    parameterPostTimePWHC?: number;
    /**
     * Parameter Nachstellzeit PWC-C
     */
    parameterPostTimePWCC?: number;
    /**
     * Parameter Vorhaltezeit PWH-C
     */
    parameterPreTimePWHC?: number;
    /**
     * Parameter Vorhaltezeit PWC-C
     */
    parameterPreTimePWCC?: number;
    /**
     * Aufrufintervall PWH-C Regler
     */
    callingIntervallPWHCController?: number;
    /**
     * Aufrufintervall PWC-C Regler
     */
    callingIntervallPWCCController?: number;
    /**
     * Parameter Anti-Windup PWH-C
     */
    parameterAntiWindupPWHC?: number;
    /**
     * Parameter Anti-Windup PWC-C
     */
    parameterAntiWindupPWCC?: number;
    /**
     * Auswahl Automatischer/Manueller Betrieb PWH-C
     */
    switchAutomaticManualModePWHC?: number;
    /**
     * Auswahl Automatischer/Manueller Betrieb PWC-C
     */
    switchAutomaticManualModePWCC?: number;
    /**
     * Manuelle Stellgröße PWH-C
     */
    manualVariablePWHC?: number;
    /**
     * Manuelle Stellgröße PWC-C
     */
    manualVariablePWCC?: number;
}