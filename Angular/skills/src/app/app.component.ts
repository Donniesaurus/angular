import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './../app/home/home.component'; // Import the HomeComponent
//
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent], // Add HomeComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//
export class AppComponent {
  title = 'skills';
}
//
