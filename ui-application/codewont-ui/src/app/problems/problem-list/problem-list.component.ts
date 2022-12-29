import { DificultyLevel, ProblemDTO, StatusLevel } from './../problem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: ProblemDTO[] = [
    {id: 1, title: 'Two Sum', dificulty: DificultyLevel.EASY,descriptions: '', constraints: '', status: StatusLevel.SOLVED,category: 'two pointer'},
    {id: 5, title: 'Two Sum2', dificulty: DificultyLevel.EASY,descriptions: '', constraints: '', status: StatusLevel.SOLVED,category: 'Graph'},
    {id: 4, title: 'Two Sum3', dificulty: DificultyLevel.EASY,descriptions: '', constraints: ''},
    {id: 3, title: 'Two Sum4', dificulty: DificultyLevel.EASY,descriptions: '',},
    {id: 2, title: 'Two Sum5', dificulty: DificultyLevel.EASY,descriptions: '', constraints: '', status: StatusLevel.SOLVED,category: 'Array'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
