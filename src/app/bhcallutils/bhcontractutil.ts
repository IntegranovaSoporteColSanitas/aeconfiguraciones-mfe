import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Util } from '../common/app.utils';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Utility class for Contract Api REST service
 */
@Injectable({providedIn: 'root'})
export class BHContractUtil {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly util: Util
    ) { }

    public buscarContrato(codLegalProducto: string, codLegalPlan: string, numContrato: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            // Localizamos los parámetros de configuración necesarios para la llamada
            this.buscarParametrosConfiguracion('').then( (valores: any) => {
                this.buscarContratoAux(valores, codLegalProducto, codLegalPlan, numContrato).then( (response: any) => {
                    resolve(response);
                }).catch( (err: Error) => {
                    reject(err);
                });
            }).catch( (err: Error) => {
                reject(err);
            })
        });
    }

    public buscarContratoAux(valores: any, codLegalProducto: string, codLegalPlan: string, numContrato: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            // Obtenemos el token
            const param = {
                pftipo: ''
            }
            this.util.callUserFunctionInBackEnd('fuGetToken', param, true).then( (token: any) => {

                if (token) {
                    // Llamar al REST de Contract Api
                    this.callContractCover(token, valores, codLegalProducto, codLegalPlan, numContrato).then( (response: any) => {
                        resolve(response);
                    }).catch( (err: Error) => {
                        reject(err);
                    });
                } else {
                    reject( new Error('Estamos teniendo fallas técnicas. C-INT-0100'));
                }
            }).catch( (err: ErrorInformation) => {
                reject(err);
            });

        });
    }


    /**
     * Auxiliar to generic post call
     * @param url URL
     * @param data Data
     */
     private callContractCover(token: string, valoresConf: any, codLegalProducto: string, codLegalPlan: string, numContrato: string): Promise<any> {

        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        headers = headers.set('codAplicacion', valoresConf['com.keralty.integraciones.contract.codAplicacion']);
        headers = headers.set('funcionNegocio', valoresConf['com.keralty.integraciones.contract.funcionNegocio']);
        headers = headers.set('fechaPeticion', formatDate(new Date(), 'YYYY-MM-dd', 'ES-es'));
        headers = headers.set('tipoConsulta', '2');
        headers = headers.set('usuario', '234');
        headers = headers.set('idPeticion', '234');

        const url = valoresConf['com.keralty.integraciones.contract.URL'];
        const peticion = {
            "lastValid": true,
            "planType": "PLAN",
            "swFamily": true,
            "coverage": {
              "insurancePlan": {
                "type": "CODIGO_PRODUCTO",
                "value": codLegalProducto
              },
              "contract": [
                {
                  "type": "PLAN",
                  "value": codLegalPlan
                },
                {
                  "type": "CONTRATO",
                  "value": numContrato
                }
              ]
            }
        };
        const options = { headers, observe: 'response' as 'body',  withCredentials: true };
        const startTime = new Date();
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe({
                next: (res: any) => {
                    resolve(res.body);
                },
                error: (err: Error) => {
                    reject(err);
                }
            });
        });

     }
    

    public buscarParametrosConfiguracion(listaParametros: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {

            // DE MOMENTO LOS PONEMOS A PIÑON
            const result = {
                "com.keralty.integraciones.contract.URL": 'https://papi.colsanitas.com/osi/api/assurance/affiliations/affiliationsAndNewsManagements/contract/v1.0.0/cover',
                "com.keralty.integraciones.contract.codAplicacion": 'SIE000000013',
                "com.keralty.integraciones.contract.funcionNegocio": 'Afiliaciones MP'
            };
            resolve(result);
            // const param = {
            //     pftipo: ''
            // }
            // this.util.callUserFunctionInBackEnd('fuGetToken', param).then( (token: any) => {
    
            // });
        });
    }
}

