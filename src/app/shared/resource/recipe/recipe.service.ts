import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';
import { Observable } from 'rxjs';
import { RecipeModel } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeRestService extends RestService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resource = Resource.recipe;
  }

  public getOwnRecipe() {
    return this.http.get<RecipeModel>(this.baseUrl + this.resource + '/own');
  }

  public createRecipe(data) {
    return this.http.post<RecipeModel>(this.baseUrl + this.resource, data);
  }

  public uploadImage(fileToUpload: File, recipeId) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.baseUrl + this.resource + `/${recipeId}/image`, formData);
  }
}
