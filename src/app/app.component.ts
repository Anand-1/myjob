import { Component , OnInit} from '@angular/core';
import { DataloaderService } from './dataloader.service';
import { first } from 'rxjs/operators';
import { FilterPipe} from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataloaderService]
})
export class AppComponent implements OnInit  {
  resultData = [];
  constructor(private Dataloader: DataloaderService) {
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
      this.Dataloader.getData().pipe()
      .subscribe(
        result => {
        this.resultData.push(result);
        this.resultData = this.resultData[0];
        console.log(this.resultData);
    });
  }
}
