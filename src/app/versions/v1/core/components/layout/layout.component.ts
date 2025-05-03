import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { LayoutType } from '@v1/core/enums/frontend/layout-type.enum';
import { DashboardConfig } from '@v1/core/interfaces/frontend/dashboard-config.interface';
import { IDashboardConfigService } from '@v1/core/interfaces/frontend/i-dashboard-config.service';
import { CoreTokensConstant } from '@v1/core/tokens/core.tokens';
import { Subject, takeUntil } from 'rxjs';
import { EmptyLayoutComponent } from "./layouts/empty-layout/empty-layout.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, EmptyLayoutComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {

  unsuscribe$ = new Subject<void>();

  config!: DashboardConfig;

  layoutTypes = LayoutType;

  constructor(
    @Inject(CoreTokensConstant.DASHBOARD_CONFIG) private  _dashboardConfigService: IDashboardConfigService
  ) {}

  ngOnInit(): void {
    this._dashboardConfigService.getConfig().pipe(takeUntil(this.unsuscribe$)).subscribe((config) => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

}
