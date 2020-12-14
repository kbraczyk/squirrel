import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeRestService extends RestService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resource = Resource.recipe;
  }

  public createRecipe(data) {
    return this.http.post(this.baseUrl + this.resource, data);
  }

  public uploadImage(fileToUpload: File, recipeId) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.baseUrl + this.resource + `/${recipeId}/image`, formData);
  }
}
