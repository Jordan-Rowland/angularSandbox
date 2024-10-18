import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = '';
  userName = '';
  servers = ['TestServer', 'ProdServer'];
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000)
  }
  
  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverCreationStatus = this.serverName && `Server was created: ${this.serverName}`
    this.servers.push(this.serverName);
  }

  onResetUsername() {
    this.userName = '';
  }
}
