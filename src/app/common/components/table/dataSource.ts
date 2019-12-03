import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators/';
import { RestService } from '../../service/rest.service';

export class SquirrelDataSource implements DataSource<any> {

    private data$ = new BehaviorSubject<Array<any>>([]);
    public isLoading$ = new BehaviorSubject<boolean>(true);
    noContent = false;
    public loading$ = this.isLoading$.asObservable();

    constructor(private rest: RestService) {

    }

    connect(collectionViewer: CollectionViewer): Observable<any[] | readonly any[]> {
        return this.data$.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.data$.complete();
    }
    public loadData() {
        this.isLoading$.next(true);
        setTimeout(() => {
            this.rest.getAll().pipe(
                catchError(() => of([])),
                finalize(() => this.isLoading$.next(false))
            ).subscribe(data => {
                if (data) {
                    this.noContent = true;
                    this.data$.next(data[`data`]);
                }
            });
        }, 5000)
    }
}
