import { AfterViewInit, Component } from '@angular/core';
import { WorksComponent } from './works.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorksComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  year = new Date().getFullYear();
  menuOpen = false;
  activeSection = 'works';

  ngAfterViewInit(): void {
    const track = document.querySelector('.marquee__track');
    if (track) track.innerHTML += track.innerHTML;

    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => observer.observe(el));

      const navIds = ['works', 'manifesto', 'capabilities', 'journal'];
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      navIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) navObserver.observe(el);
      });
    } else {
      revealEls.forEach((el) => el.classList.add('visible'));
    }
  }
}
