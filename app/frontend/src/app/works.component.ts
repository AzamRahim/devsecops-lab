import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksService, Work } from './works.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="works" class="works">
      <div class="section-head reveal">
        <span class="section-head__num">01 / Case files</span>
        <h2>Selected works</h2>
      </div>

      <p class="works__state" *ngIf="loading">Summoning the evidence…</p>
      <p class="works__state works__state--error" *ngIf="error">
        The case files could not be retrieved — is the API running?
      </p>

      <div class="works__grid" *ngIf="works.length">
        <article class="work" *ngFor="let work of works">
          <a href="#" class="work__media">
            <img [src]="work.image" [alt]="work.title" loading="lazy">
          </a>
          <div class="work__meta">
            <h3>{{ work.title }}</h3>
            <span>{{ work.category }} — {{ work.year }}</span>
          </div>
        </article>
      </div>
    </section>
  `,
})
export class WorksComponent implements OnInit {
  works: Work[] = [];
  loading = true;
  error = false;

  constructor(private service: WorksService) {}

  ngOnInit(): void {
    this.service.getWorks().subscribe({
      next: (data) => {
        this.works = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = true;
      },
    });
  }
}
