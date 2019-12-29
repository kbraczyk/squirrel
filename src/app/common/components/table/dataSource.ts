import { BehaviorSubject, } from 'rxjs';
import { finalize, } from 'rxjs/operators/';
import { RestService, SortModel } from '../../service/rest.service';
import { MatTableDataSource, } from '@angular/material';

export class SquirrelDataSource extends MatTableDataSource<any> {


    private data$ = new BehaviorSubject<any[]>([]);
    public length$ = new BehaviorSubject<number>(0);
    public isLoading$ = new BehaviorSubject<boolean>(true);
    public hasData: boolean = false;
    public defaultPaginator = {
        pageSize: 5,
        page: 1
    };
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
                    this.length$.next(10);
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
