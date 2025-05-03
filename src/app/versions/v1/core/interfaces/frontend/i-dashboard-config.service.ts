import { BehaviorSubject, Observable } from "rxjs";
import { DashboardConfig } from "./dashboard-config.interface";

export interface IDashboardConfigService {

  _config: BehaviorSubject<DashboardConfig>;

  config$: Observable<DashboardConfig>;

  configSnapshot: DashboardConfig;

  setConfig(config: DashboardConfig): void;

  getConfig(): Observable<DashboardConfig>;

  updateConfig(config: DashboardConfig): void;

  resetConfig(): void;

}
