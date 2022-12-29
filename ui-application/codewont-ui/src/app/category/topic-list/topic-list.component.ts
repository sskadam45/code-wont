import { TopicDTO } from './../topic';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topic: TopicDTO = new TopicDTO;
  tags : string = "";
  submitted = false;
  topics: TopicDTO[] = [
  {id: 1, title: 'Topic 1', tags: ['t1','t2']},
  {id: 2, title: 'Topic 2', tags: ['t1','t2']},
  {id: 3, title: 'Topic 3', tags: ['t1','t2']}
];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
  onSubmit(data: TopicDTO) { 
    data.tags = this.tags.split(',');
    this.submitted = true; 
    this.topics.push(data);
    this.modalService.dismissAll();
  }
}
