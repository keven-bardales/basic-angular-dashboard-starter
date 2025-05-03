import { InjectionToken } from "@angular/core";
import { IDashboardConfigService } from "../interfaces/frontend/i-dashboard-config.service";
import { DashboardConfigImplService } from "../services/frontend/dashboard-config-impl.service";

export enum CoreTokensEnum {
  DASHBOARD_CONFIG = 'DASHBOARD_CONFIG',
}

interface CoreTokensConstantInterface {
  DASHBOARD_CONFIG: InjectionToken<IDashboardConfigService>
}

export const CoreTokensConstant: CoreTokensConstantInterface = {
  DASHBOARD_CONFIG: new InjectionToken<IDashboardConfigService>(CoreTokensEnum.DASHBOARD_CONFIG)
}

export const CoreTokensProvider = [
  {
    provide: CoreTokensConstant.DASHBOARD_CONFIG,
    useClass: DashboardConfigImplService
  }
]
