import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Work {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

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

      <div class="works__grid">
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
export class WorksComponent {
  works: Work[] = [
    { id: '01', title: 'The Tailored Still Life',  category: 'Fashion object',   year: '2026', image: 'works/6339054988402823842.jpg' },
    { id: '02', title: 'Evidence of Texture',      category: 'Material study',   year: '2026', image: 'works/6339054988402823843.jpg' },
    { id: '03', title: 'The Pleading in Red',      category: 'Editorial',        year: '2025', image: 'works/6339054988402823844.jpg' },
    { id: '04', title: 'Verdant Testimony',        category: 'Art commission',   year: '2025', image: 'works/6339054988402823845.jpg' },
    { id: '05', title: 'Field Notes, Harvest',     category: 'Editorial',        year: '2025', image: 'works/6339054988402823846.jpg' },
    { id: '06', title: 'A Quiet Objection',        category: 'Design',           year: '2025', image: 'works/6339054988402823847.jpg' },
    { id: '07', title: 'The Mira Studies',         category: 'Fashion campaign', year: '2025', image: 'works/6339054988402823848.jpg' },
    { id: '08', title: 'Counsel of the Coast',     category: 'Art',              year: '2024', image: 'works/6339054988402823849.jpg' },
    { id: '09', title: 'Two Witnesses, One Frame', category: 'Collaboration',    year: '2024', image: 'works/6339054988402823850.jpg' },
    { id: '10', title: 'Sundown, Brown County',    category: 'Editorial',        year: '2024', image: 'works/6339054988402823851.jpg' },
    { id: '11', title: 'An Honest Corner',         category: 'Design',           year: '2024', image: 'works/6339054988402823852.jpg' },
    { id: '12', title: 'Notes on Flesh',           category: 'Material study',   year: '2024', image: 'works/6339054988402823853.jpg' },
    { id: '13', title: 'Marginalia',               category: 'Creative culture', year: '2024', image: 'works/6339054988402823854.jpg' },
  ];
}
