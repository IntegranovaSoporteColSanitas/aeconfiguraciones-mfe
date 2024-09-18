import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

export class CuestionarioMedIIUuCuestionarioMedComponent extends AbstractIIU {

    /** Display Set elements */
    public dseNombre: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1431633526784077UIInst_1';
        this.className = ModelConstants.Cuestionariomed.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_CuestionarioMed_iiu_IIU_CuestionarioMed',
            'Cuestionario médico');
        this.queryURL = '/api/CuestionarioMedApi/GetPopulationDynamic';

        this.dseNombre = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseNombre.nameInRequest = 'nombre';
        this.dseNombre.alias = this.langMng.translateText(
            'cls_CuestionarioMed_ds_DS_CuestionarioMed_IIU_item_Clas_1431633526784077CjtoVis_3ICtjoVis_1',
            'Nombre');
        this.dseNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431633526784077CjtoVis_3ICtjoVis_1', ['Admin', 'SuperAdmin']);
        this.dseNombre.enabled = false;
        this.dseNombre.mandatory = false;
        this.dseNombre.dataType = Field.dtString;
        this.dseNombre.maxLength = 100;
        this.dseNombre.assignCSS();
        this.fields.push(this.dseNombre);

    }
}
