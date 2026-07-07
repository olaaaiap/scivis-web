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
        // const url = `http://novaviz.org/:${port}`;
        // const url = `http://novaviz.org:${port}/index.html`;
        const url = `http://56.228.47.203:${port}/index.html`;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    });

  }
}