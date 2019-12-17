import { BehaviorSubject, of } from 'rxjs';
import { finalize, catchError, } from 'rxjs/operators/';
import { RestService, SortModel } from '../../service/rest.service';
import { MatTableDataSource, } from '@angular/material';
import { trigger, transition, style, sequence, animate } from '@angular/animations';

export class SquirrelDataSource extends MatTableDataSource<any> {


    private data$ = new BehaviorSubject<any[]>([]);
    public isLoading$ = new BehaviorSubject<boolean>(true);
    public hasData: boolean = false;
    constructor(private rest: RestService) {
        super();
    }

    connect() {
        this.data$.asObservable();
        return this.data$;
    }
    disconnect() {
        this.data$.complete();
    }
    public loadData(sort?: SortModel) {
        this.isLoading$.next(true);
        setTimeout(() => {
            this.rest.getAll(sort).pipe(
                finalize(() => this.isLoading$.next(false))
            ).subscribe(data => {
                console.log(data);
                if (data) {
                    this.hasData = true;
                    this.data$.next(data[`data`]);
                } else {
                    this.hasData = false;
                }
            },
            (err) => {
                this.data$.next([]);
                this.hasData = false;
            });
        }, 2000);
    }

    sortChange(event) {
        this.isLoading$.next(true);
        let sortActive: SortModel = {
            direction: event.direction,
            field: event.active
        };

        sortActive.field && !sortActive.direction ? sortActive = this.setDefaultSort() : sortActive = sortActive;
        this.loadData(sortActive);
    }

    setDefaultSort = (): SortModel => {
        return { direction: null, field: null };
    }

}
export const rowsAnimation =
    trigger('rowsAnimation', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        sequence([
          animate(".35s ease", style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ]);