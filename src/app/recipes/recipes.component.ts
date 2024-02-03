import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent   implements OnInit{
  RECIPES: Recipe[] = [
    new Recipe(" Recipe name ", "this is description of recipe", "trtyrt")
  ];

  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
}
