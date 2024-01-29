import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'ivan';
  public nameUpper: string = 'IVAN';
  public fullName: string = 'iVaN ArAnA';

  public customDate: Date = new Date();
}
