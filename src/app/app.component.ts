import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'blog';

	color = "orange";
	updateColor() {
		this.color = "skyblue";
	}

	userData: any = {};
	getData(data: NgForm) {
		console.warn(data);
		this.userData = data;
	}

	display = true;
	toggle() {
		this.display = !this.display;
	}

	list: any[] = [];
	addTask(item: string) {
		this.list.push({ id: this.list.length, name: item });
		console.warn(this.list);
	}

	removeTask(id: number) {
		this.list = this.list.filter(item => item.id !== id);
	}

}
