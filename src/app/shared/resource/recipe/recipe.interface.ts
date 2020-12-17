export interface RecipeModel {
    id?: number;
    isFavorite?: boolean;
    name: string;
    preparation: string;
    prep_time: number;
    prep_difficulty: DifficultyRecipeEnum;
    portions: number;
    energy: number;
    carbo: number;
    fat: number;
    proteins: number;
    created_date: string;
    photo: string;
}

export interface FavoriteRecipeModel {
    id: number;
    recipe: RecipeModel;
}

export enum DifficultyRecipeEnum {
    easy = 0,
    medium,
    hard
}
