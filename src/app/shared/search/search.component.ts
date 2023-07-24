import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModuleDto} from '../../models/module.model';
import {Router} from '@angular/router';
import {ModuleService} from '../../services/module.service';
import {AlertService} from '../../services/alert.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl();
  searchResults!: ModuleDto[];
  isProf: boolean = false;

  constructor(private router: Router,
              private moduleService: ModuleService,
              private alertService: AlertService,
              private authService: AuthService,
              private renderer: Renderer2,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    this.search();
    this.detectClickOutside();
    this.isProf = this.authService.isProf();
  }

  public goToModule(id: number) {
    if (this.isProf) {
      window.location.href = `/module/${id}/manage`;
    } else {
      window.location.href = `/module/${id}`;
    }
    this.resetSearch();
  }


  public resetSearch() {
    this.searchResults = [];
    this.searchControl.setValue('');
  }

  private search() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((keyword: string) => this.moduleService.findAllByKeyword(keyword.toLowerCase()))
    ).subscribe({
      next: (res) => {
        this.searchResults = res;
      }
    });

  }

  private detectClickOutside() {
    this.renderer.listen('document', 'click', (event: Event) => {
      const targetElement = event.target as HTMLElement;
      const searchResultsElement = this.el.nativeElement.querySelector('.results');
      if(!searchResultsElement) return;
      const isClickedInside = searchResultsElement.contains(targetElement);

      if (!isClickedInside) {
        this.resetSearch();
      }
    });
  }

}
