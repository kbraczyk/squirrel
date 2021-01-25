import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';

@Component({
  selector: 'squirrel-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent extends AbstractComponent implements OnInit {
  public recipe$ = null;

  constructor(private resource: RecipeRestService, private router: ActivatedRoute) {
    super();
    let id = null;
    this.router.params.subscribe(d => id = d.id);
    this.recipe$ = this.resource.getById(id);
  }

  ngOnInit() {
  }

}
