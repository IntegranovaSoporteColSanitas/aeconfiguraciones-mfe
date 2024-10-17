import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { CuestionarioMedIIUuCuestionarioMedComponent } from './iiu_cuestionariomed.component';
import { SeccionMDIUuSeccionComponent } from '../seccion/mdiu_seccion.component';


@Component({
    selector: 'imes-cuestionariomed-mdiu-cuestionariomed',
    templateUrl: './mdiu_cuestionariomed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuestionarioMedMDIUuCuestionarioMedComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: CuestionarioMedIIUuCuestionarioMedComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SeccionMDIUuSeccionComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(public override appGlobalInfo: AppGlobalInfo, public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1431633526784077UIMaDet_1';
        this.className = ModelConstants.Cuestionariomed.name;
        this.iuName = ModelConstants.Cuestionariomed.mdiuucuestionariomed;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_CuestionarioMed_mdiu_MDIU_CuestionarioMed',
            'Configuración');
        // Create the details and assign the master detail container
        this.master = new CuestionarioMedIIUuCuestionarioMedComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1431633526784077UIMaDet_1Det_1',
            ['Admin', 'SuperAdmin']);
        this.d0 = new SeccionMDIUuSeccionComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public override initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        if (this.d0Visible && this.d0 != null) {
            this.d0.order = 0;
            this.d0.iuId = this.iuId + 'D0';
            this.d0.initializeComponents();
            this.d0.title = this.langMng.translateText(
                'cls_CuestionarioMed_mdiu_MDIU_CuestionarioMed_detail_Clas_1431633526784077UIMaDet_1Det_1',
                'Secciones');
            this.d0.setExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Seccion',
                this.master.getContext(), null, 'Cuestionario', null, 'CuestionarioMed', ''));
        }
        super.initializeComponents();
    }

}
