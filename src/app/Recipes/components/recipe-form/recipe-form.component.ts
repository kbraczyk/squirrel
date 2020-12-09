import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'squirrel-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent extends AbstractComponent {
  public Editor = ClassicEditor;

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    prep_time: new FormControl(),
    portions: new FormControl(1)

  });

  constructor() {
    super();
    this.headerIcon = 'add';
    this.headerTitle = 'Dodawanie nowego przepisu';
    this.headerSubtitle = 'Dodaj przepis i udostępnij go dla innych';
  }

}
