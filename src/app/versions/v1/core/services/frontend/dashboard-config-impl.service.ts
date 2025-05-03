import { DashboardConfig } from "@v1/core/interfaces/frontend/dashboard-config.interface";
import { IDashboardConfigService } from "@v1/core/interfaces/frontend/i-dashboard-config.service";
import { BehaviorSubject, Observable } from "rxjs";

export class DashboardConfigImplService implements IDashboardConfigService {

  _config: BehaviorSubject<DashboardConfig>;

  config$: Observable<DashboardConfig>;

  configSnapshot: DashboardConfig;

  constructor() {
    this._config = new BehaviorSubject<DashboardConfig>({} as DashboardConfig);
    this.config$ = this._config.asObservable();
    this.configSnapshot = this._config.getValue();
  }

  setConfig(config: DashboardConfig): void {
    this._config.next(config);
    this.configSnapshot = config;
  }

  getConfig(): Observable<DashboardConfig> {
    return this.config$;
  }

  updateConfig(config: DashboardConfig): void {
    this._config.next(config);
    this.configSnapshot = config;
  }

  resetConfig(): void {
    this._config.next({} as DashboardConfig);
    this.configSnapshot = {} as DashboardConfig;
  }

}
