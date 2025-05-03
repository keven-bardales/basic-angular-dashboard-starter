import { LayoutMode } from "@v1/core/enums/frontend/layout-modes.enum";
import { LayoutType } from "@v1/core/enums/frontend/layout-type.enum";

export interface DashboardConfig {
  layout: {
    mode: LayoutMode;
    type: LayoutType;
  }
}
