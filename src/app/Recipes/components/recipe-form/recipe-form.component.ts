import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { RecipeRestService } from '@app/shared/resource/recipe/recipe.service';
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

  @ViewChild('cke', { static: false }) cke: any;

  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    prep_time: new FormControl(null, [Validators.required]),
    portions: new FormControl(null, [Validators.required]),
    energy: new FormControl(null, [Validators.required]),
    carbo: new FormControl(null, [Validators.required]),
    fat: new FormControl(null, [Validators.required]),
    protein: new FormControl(null, [Validators.required]),
    ingredient: new FormControl(null)
  });

  constructor(private resource: RecipeRestService) {
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

  updateData() {
    this.isLoading = true;
    const formValue = this.form.value;
    const description = this.cke.editorInstance.getData();
    formValue.preparation = description;
    this.resource.createRecipe(formValue).subscribe(data => {
      this.resource.uploadImage(this.fileToUpload, data['id']).subscribe(image => { console.log(image, 'QWE'); });
    });
  }

}