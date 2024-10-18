import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .server { 
            padding: 10px;
            width: 15%;
            border: 1px solid #2c2c2c;
            border-radius: 10px;
            text-align: center;
        }
        .online {
            color: green;
        }
        .offline {
            color: maroon;
        }
        .fifthLog {
            background-color: lightblue;
        }
    `],
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    details = 'Passed 2/2 checks';
    showDetails = false;
    buttonClickLog = [];

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }
    
    getServerStatus() {
        return this.serverStatus
    }

    getColor() {
        return this.getServerStatus() === 'online' ? 'lightgreen' : 'pink';
    }

    onButtonClick() {
        this.showDetails = !this.showDetails;
        this.buttonClickLog.push(new Date);
    }

}
