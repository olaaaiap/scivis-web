import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewer',
  imports: [],
  templateUrl: './viewer.html',
  styleUrl: './viewer.css',
})
export class Viewer implements OnInit {
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const paraviewUrl = 'http://localhost:8080/index.html';
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(paraviewUrl);
  }
}