import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DashboarViewComponent } from './page/dashboard/dashboar-view/dashboar-view.component';

export const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "",
        component: DashboardComponent,
        children: [
            {
                path:"dashboardview",
                component:DashboarViewComponent
            }, {
                path:"",
                component:DashboarViewComponent
            }
        ]
    }
];
