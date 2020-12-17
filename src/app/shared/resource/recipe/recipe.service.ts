import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource, RestService } from '@app/shared/service/rest.service';
import { Observable } from 'rxjs';
import { FavoriteRecipeModel, RecipeModel } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeRestService extends RestService<any> {

  constructor(http: HttpClient) {
    super(http);
    this.resource = Resource.recipe;
  }

  public getRecipes() {
    return this.http.get<Array<RecipeModel>>(this.baseUrl + this.resource);
  }

  public getOwnRecipes() {
    return this.http.get<Array<RecipeModel>>(this.baseUrl + this.resource + '/own');
  }
  public getFavoriteRecipe() {
    return this.http.get<Array<FavoriteRecipeModel>>(this.baseUrl + this.resource + '/favorite');
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
