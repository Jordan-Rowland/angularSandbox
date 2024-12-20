import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'servers', component: ServersComponent, canActivateChild: [AuthGuard], children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ]},
    { path: 'users', component: UsersComponent, canActivateChild: [AuthGuard], children: [
      { path: ':id', component: UserComponent },
    ]},
    { path: '**', redirectTo: '/' },
];

@NgModule({ imports: [RouterModule.forRoot(appRoutes, { useHash: true })], exports: [RouterModule] })
export class AppRoutingModule { }
