import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from './app.cachedependencyrules';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { Util } from './app.utils';
import { StandardFunctions } from './standardFunctions';

/**
 * « Conditional navigation manager »
 * Handles all conditional navigation defined in the model
 */
@Injectable({providedIn: 'root'})
export class ConditionalNavigationMng {

    /** Cache for queries */
    private queriesCache: CacheDependencyRules;

    constructor(private appGlobalInfo: AppGlobalInfo, private util: Util, private stdFun: StandardFunctions) {
        this.queriesCache = new CacheDependencyRules(this.appGlobalInfo, this.util);
     }

    /**
     * Process the conditional navigation
     * @param className Class name
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    public processConditionalNavigation(className: string, serviceName: string, request: any, response: any, previousContext: any,
                                        comeBackContext: any): boolean {

        this.appGlobalInfo.appExchangeInfo.clearConditionalNavigation();

        switch (className) {
            case 'Dominio':
                return this.processCondNavdominio(serviceName, request, response, previousContext, comeBackContext);
            case 'PlantillaEmail':
                return this.processCondNavplantillaemail(serviceName, request, response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class Dominio
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavdominio(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'crear') {
            return this.condNavDominiocrear(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class PlantillaEmail
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavplantillaemail(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'dummyModificar') {
            return this.condNavPlantillaEmaildummyModificar(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TNEW') {
            return this.condNavPlantillaEmailTNEW(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }


    /**
     * Manages the conditional navigation of service crear of class Dominio
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavDominiocrear(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Dominio.name,
                ModelConstants.Dominio.mdiuudominio, previousContext, comeBackContext);
            exchInfo.selectedOidsClassName = ModelConstants.Dominio.name;
            exchInfo.selectedOids = [
                this.util.oidBuilder.buildOidDominio(response.ps_dominio.numero)];
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service dummyModificar of class PlantillaEmail
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavPlantillaEmaildummyModificar(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.p_thisplantillaemail_oid) {
            this.queriesCache.addQueryInstance(ModelConstants.Plantillaemail.name, request.p_thisplantillaemail_oid,
                'Codigo');
        }
        this.queriesCache.searchAll().then(() => {
        let varputhisplantillaemail!: InstanceCache;
        if (request.p_thisplantillaemail_oid) {
            varputhisplantillaemail = this.queriesCache.getInstance(ModelConstants.Plantillaemail.name,
                    request.p_thisplantillaemail_oid);
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // p_thisPlantillaEmail.Codigo < 100
            if (this.util.getInt(varputhisplantillaemail.get('Codigo')) < 100 &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Plantillaemail.name,
                    ModelConstants.Plantillaemail.siuumodificar, previousContext, comeBackContext);
                // p_thisPlantillasEmail
                exchInfo.customData.p_thisplantillasemail = request.p_thisplantillaemail_oid;
                this.util.navigateTo(exchInfo);
            }
            if (!conditionFulfilled && this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Plantillaemail.name,
                    ModelConstants.Plantillaemail.siuumodificartextomensaje, previousContext, comeBackContext);
                // p_thisPlantillaEmail
                exchInfo.customData.p_thisplantillaemail = request.p_thisplantillaemail_oid;
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service TNEW of class PlantillaEmail
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavPlantillaEmailTNEW(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let conditionFulfilled = false;
        let exchInfo: ExchangeInfo;
        // pt_p_atrCodigo < 100
        if (this.util.getInt(request.pt_p_atrcodigo) < 100 && this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin',
            'SuperAdmin'])) {
            conditionFulfilled = true;
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Plantillaemail.name,
                ModelConstants.Plantillaemail.siuumodificar, previousContext, comeBackContext);
            // p_thisPlantillasEmail
            exchInfo.customData.p_thisplantillasemail = this.util.oidBuilder.buildOidPlantillaEmail(response.psplantilla.idplantilla);
            this.util.navigateTo(exchInfo);
        }
        if (!conditionFulfilled && this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin'])) {
            conditionFulfilled = true;
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Plantillaemail.name,
                ModelConstants.Plantillaemail.siuumodificartextomensaje, previousContext, comeBackContext);
            // p_thisPlantillaEmail
            exchInfo.customData.p_thisplantillaemail = this.util.oidBuilder.buildOidPlantillaEmail(response.psplantilla.idplantilla);
            this.util.navigateTo(exchInfo);
        }
        return conditionFulfilled;
    }
}
