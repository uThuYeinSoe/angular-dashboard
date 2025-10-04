import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';

type RouteData = { title?: string; breadcrumb?: string[] };

@Component({
  selector: 'app-header2',
  imports: [],
  standalone: true,
  templateUrl: './header2.html',
  styleUrl: './header2.scss',
})
export class Header2 {
  private router = inject(Router);
  private route = inject(ActivatedRoute); // keep, but we’ll read from routerState.root

  // helper: deepest child route safely
  private getDeepestRoute(): ActivatedRoute {
    let r: ActivatedRoute | null = this.router.routerState.root;
    while (r?.firstChild) r = r.firstChild;
    // if still null (very early), fall back to injected route
    return (r ?? this.route)!;
  }

  // signal of current route data (always safe, with defaults)
  private routeData = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      startWith(null),
      map((): RouteData => {
        const deepest = this.getDeepestRoute();
        return (deepest?.snapshot?.data as RouteData) ?? {};
      })
    ),
    {
      // initial value before the first NavigationEnd
      initialValue: (() => {
        const deepest = this.getDeepestRoute();
        return (deepest?.snapshot?.data as RouteData) ?? {};
      })(),
    }
  );

  // UI bindings
  title = computed(() => this.routeData()?.title ?? this.fallbackTitle());
  breadcrumbText = computed(() =>
    (this.routeData()?.breadcrumb ?? this.fallbackBreadcrumb()).join(' / ')
  );

  // --- fallbacks when no route data provided ---
  private fallbackTitle(): string {
    const segs = this.router.url.split('/').filter(Boolean);
    const last = segs[segs.length - 1] ?? 'Home';
    return last.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private fallbackBreadcrumb(): string[] {
    const segs = this.router.url.split('/').filter(Boolean);
    if (segs.length === 0) return ['Home'];
    return ['Home', ...segs.slice(1).map((s) => s.replace(/-/g, ' '))];
  }
}
