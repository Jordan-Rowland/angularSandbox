import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
    this.route.params.subscribe(params => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    this.serversService.serverUpdated.subscribe((server: {id: number, name: string, status: string}) => {
      this.server = server;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  onUpdateServer() {
    if (this.route.snapshot.queryParams['allowEdit'] === '1') {
      this.serversService.updateServer(
          this.server.id, {name: this.serverName, status: this.serverStatus});
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

}
