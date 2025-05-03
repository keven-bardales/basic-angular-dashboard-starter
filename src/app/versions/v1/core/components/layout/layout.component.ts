import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IDashboardConfigService } from '@v1/core/interfaces/frontend/i-dashboard-config.service';
import { CoreTokensConstant } from '@v1/core/tokens/core.tokens';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {

  unsuscribe$ = new Subject<void>();

  constructor(
    @Inject(CoreTokensConstant.DASHBOARD_CONFIG) private  _dashboardConfigService: IDashboardConfigService
  ) {}

  ngOnInit(): void {
    this._dashboardConfigService.getConfig().pipe(takeUntil(this.unsuscribe$)).subscribe((config) => {
      console.log(config);
    });
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

}
