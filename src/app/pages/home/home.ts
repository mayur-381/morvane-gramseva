import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  animations: [
    trigger('heroAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('businessTrack') track!: ElementRef<HTMLDivElement>;

  autoScrollInterval: any;
  scrollSpeed = 2;
  scrollInterval = 20;

  selectedImage: string | null = null;

  ngAfterViewInit() {
    if (window.innerWidth < 768) {
      this.scrollSpeed = 1;
      this.scrollInterval = 35;
    }
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const el = this.track.nativeElement;
      el.scrollLeft += this.scrollSpeed;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      }
    }, this.scrollInterval);
  }

  pauseAutoScroll() {
    clearInterval(this.autoScrollInterval);
  }

  resumeAutoScroll() {
    this.startAutoScroll();
  }

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
