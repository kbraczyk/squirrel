import { BehaviorSubject, } from 'rxjs';
import { finalize, } from 'rxjs/operators/';
import { RestService, SortModel, PageModel } from '../../service/rest.service';
import { MatTableDataSource, PageEvent, } from '@angular/material';

export class SquirrelDataSource extends MatTableDataSource<any> {

    private data$ = new BehaviorSubject<any[]>([]);
    public length$ = new BehaviorSubject<number>(0);
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

    public loadData(pager?: PageModel, sort?: SortModel) {
        this.isLoading$.next(true);
        setTimeout(() => {
            this.rest.getAll(pager, sort).pipe(
                finalize(() => this.isLoading$.next(false))
            ).subscribe(data => {
                if (data) {
                    this.hasData = true;
                    this.length$.next(data.total);
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
        this.loadData(null, sortActive);
    }

    changePage(event: PageEvent) {
        this.isLoading$.next(true);
        const pager: PageModel = {
            perPage: event.pageSize,
            offset: event.pageIndex,
        };
        console.log(event, ' QWE')
        this.loadData(pager, null);
    }

    setDefaultSort = (): SortModel => {
        return { direction: null, field: null };
    }
}
