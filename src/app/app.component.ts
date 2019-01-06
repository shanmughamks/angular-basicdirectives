import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-directives';
  showPassword = false;
  logs = [];

  onToggleDetails() {
    this.showPassword = ! this.showPassword;
    this.logs.push(this.logs.length + 1);
  }
}
