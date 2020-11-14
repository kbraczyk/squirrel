import { BehaviorSubject, } from 'rxjs';
import { finalize, map, } from 'rxjs/operators/';
import { RestService, SortModel, PageModel } from '@shared/service/rest.service';
import { MatTableDataSource, PageEvent, } from '@angular/material';

export class SquirrelDataSource<T> extends MatTableDataSource<T> {

    private data$ = new BehaviorSubject<Array<T>>([]);
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
        this.rest.getAll(pager, sort).pipe(
            finalize(() => this.isLoading$.next(false))
        ).subscribe(data => {
            if (data) {
                this.hasData = true;
                this.length$.next(25);
                this.data$.next(data);
            } else {
                this.hasData = false;
            }
        },
            (err) => {
                this.data$.next([]);
                this.hasData = false;
            });

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
        this.loadData(pager, null);
    }

    setDefaultSort = (): SortModel => {
        return { direction: null, field: null };
    }
}
