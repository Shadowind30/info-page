import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	view: string = localStorage.getItem('view') || 'full';

	toggleView() {
		if (this.view === 'full') {
			this.view = 'tabs';
		} else {
			this.view = 'full';
		}

		localStorage.setItem('view', this.view);
	}
}
