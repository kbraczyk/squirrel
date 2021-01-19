import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';
import { NotificationsService } from 'angular2-notifications';
import { catchError, finalize } from 'rxjs/operators';
import { ckeConfig } from 'src/environments/environment.js';
import Editor from '../.../../../../../assets/ckeditor.js';
@Component({
  selector: 'squirrel-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']

})
export class RecipeFormComponent extends AbstractComponent {
  public readonly editor = Editor;
  public readonly ckeConfig = ckeConfig;
  public fileToUpload: File = null;
  public avatarPreview = null;
  public readonly hardPrep = [{ value: 1, label: 'Łatwy' }, { value: 2, label: 'Średni' }, { value: 3, label: 'Trudny' }];
  public readonly categories = [{ value: 'breakfast', label: 'Śniadanie' },
  { value: 'dinner', label: 'Obiad' }, { value: 'dessert', label: 'Deser' },
  { value: 'supper', label: 'Kolacja' }];

  @ViewChild('cke', { static: false }) cke: any;

  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    prep_time: new FormControl(null, [Validators.required]),
    portions: new FormControl(null, [Validators.required]),
    energy: new FormControl(null, [Validators.required]),
    carbo: new FormControl(null, [Validators.required]),
    fat: new FormControl(null, [Validators.required]),
    protein: new FormControl(null, [Validators.required]),
    ingredients: new FormArray([new FormControl('')]),
    categorie: new FormControl(null, [Validators.required]),
  });

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  constructor(private resource: RecipeRestService, private growl: NotificationsService) {
    super();
    this.headerIcon = 'add';
    this.headerTitle = 'Dodawanie nowego przepisu';
    this.headerSubtitle = 'Dodaj przepis i udostępnij go dla innych';
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.preview();
  }

  preview() {
    const mimeType = this.fileToUpload.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (_event) => {
      this.avatarPreview = reader.result as string;
    };
  }

  createRecipe() {
    if (this.form.valid) {
      this.isLoading = true;
      const formValue = this.form.value;
      const description = this.cke.editorInstance.getData();
      formValue.preparation = description;
      formValue.categorie = formValue.categorie.value;
      this.resource.createRecipe(formValue).pipe(finalize(() => this.isLoading = false)).subscribe(data => {
        this.resource.uploadImage(this.fileToUpload, data.id).pipe(finalize(() => this.isLoading = false)).subscribe(
          () => this.growl.success(null, 'Przepis został dodany poprawnie'),
          err => this.growl.error(null, 'Wystąpił błąd podczas dodawania przepisu')
        );
      },
        err => this.growl.error(null, 'Wystąpił błąd podczas dodawania przepisu'));
    }
  }

  public addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  remove = (controlName) => {
    this.ingredients.removeAt(controlName);
  }

}
