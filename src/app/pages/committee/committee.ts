import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-committee',
  standalone: true,
    imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './committee.html',
  styleUrl: './committee.css',
})
export class CommitteeComponent {

}
