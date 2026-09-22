import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewer',
  imports: [RouterLink],
  templateUrl: './viewer.html',
  styleUrl: './viewer.css',
})
export class Viewer implements OnInit {
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute ) {}



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const port = params['port'];
      if (port) {
        const url = `http://localhost:${port}`;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    });

  }
}