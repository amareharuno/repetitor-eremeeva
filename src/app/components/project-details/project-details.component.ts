import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {projects} from "../../mocks";
import {Project} from "../../models/project";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.less'
})
export class ProjectDetailsComponent {
  _project$: Observable<Project | undefined>;

  constructor(private route: ActivatedRoute) {
    this._project$ = this.route.params.pipe(
        map(params => {
          console.log(params);
          return projects.find(project => project.id === params["projectId"])
        })
    )
  }
}
