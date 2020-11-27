import { AfterViewInit, Component, HostListener } from '@angular/core';
import { AbstractComponent } from '@app/shared/components/abstract.component';
import { CalorieDemandModel } from '@app/shared/resource/calorie-demand/calorie-demand.interface';
import { CalorieDemandResourceService } from '@app/shared/resource/calorie-demand/calorie-demand.service';
import { DemandKcalService } from '@shared/service/demand-kcal.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'squirrel-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent extends AbstractComponent {
  public result: CalorieDemandModel;
  public resultChar: Array<{ name: string, value: number }>;
  public colorScheme = { domain: ['rgb(149, 0, 255)', 'rgb(255, 214, 1)', 'rgb(231, 0, 0)'] };
  public view = [0, 0];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 700) {
      this.view = [300, 0];
    } else if (event.target.innerWidth > 1000 && event.target.innerWidth < 1200) {
      this.view = [650, 0];
    } else if (event.target.innerWidth < 1200) {
      this.view = [600, 0];
    }
  }

  constructor(private demand: CalorieDemandResourceService) {
    super();
    this.isLoading = true;
    this.demand.getAll().pipe(finalize(() => this.isLoading = false)).subscribe(data => {
      this.result = data;
      this.resultChar = this.mapData(data);

      setTimeout(() => {
        this.drawProgresBar();
      }, 0);
    });
  }

  drawProgresBar() {
    document.getElementById('progresProtein').style.width = '32%';
    document.getElementById('progresFat').style.width = '22%';
    document.getElementById('progresCarbs').style.width = '45%';
  }

  mapData(data) {
    return [
      { name: 'Białka', value: data.protein },
      { name: 'Tłuszcze', value: data.fat },
      { name: 'Węglowoadny', value: data.carbo }];
  }
}
