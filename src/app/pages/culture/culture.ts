import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-culture',
  imports: [CommonModule],
  templateUrl: './culture.html',
  styleUrl: './culture.css',
})
export class CultureComponent {

  // 🔹 fullscreen image variable
  selectedImage: string | null = null;

  // 🔹 image click → fullscreen
  openImage(img: string) {
    this.selectedImage = img;
  }

  // 🔹 close fullscreen
  closeImage() {
    this.selectedImage = null;
  }

  // 🔥 ADD THIS — SLIDER LOGIC
  scrollLeft(container: HTMLElement) {
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }


scrollVideo(track: HTMLElement, direction: number) {
  track.scrollBy({
    left: direction * 420,
    behavior: 'smooth'
  });
}
}
