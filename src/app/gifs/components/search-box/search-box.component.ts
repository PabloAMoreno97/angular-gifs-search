import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Sarch:</h5>
    <input type="text"
    class="form-control"
    placeholder="Search gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput>
  `
})

export class SearchBoxComponent {

  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor(
    private gifsService: GifsService
  ) { }

  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
