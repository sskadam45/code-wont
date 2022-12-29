import { Router } from '@angular/router';
import { ProblemDTO } from './../problem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  @Input() problem: ProblemDTO =  new ProblemDTO;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showProblem(){
    this.router.navigate(['/problemDetails'])
  }
}
