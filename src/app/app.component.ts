import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { DashboardComponent } from './page/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Employee_Management_Frontend';
  ngOnInit(): void {
    initFlowbite();
  }
}
