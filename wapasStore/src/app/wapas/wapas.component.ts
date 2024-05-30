import { Component } from '@angular/core';
import { ClothesListComponent } from '../clothes-list/clothes-list.component';

@Component({
  selector: 'app-wapas',
  standalone: true,
  imports: [ClothesListComponent],
  templateUrl: './wapas.component.html',
  styleUrl: './wapas.component.scss'
})
export class WapasComponent {

}
