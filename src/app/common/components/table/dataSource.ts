import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import {finalize, catchError} from 'rxjs/operators/';
import { HttpClient } from '@angular/common/http';
import { RestService, Resource } from '../../service/rest.service';

export class SquirrelDataSource implements DataSource<any> {

    private data$ = new BehaviorSubject<Array<any>>([]);
    private isLoading$ = new BehaviorSubject<boolean>(true);

    public loading$ = this.isLoading$.asObservable();

    constructor(  private rest: RestService) {

     }

    connect(collectionViewer: CollectionViewer): Observable<any[] | readonly any[]> {
        return this.data$.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.data$.complete();
        this.isLoading$.complete();
    }
    public loadData() {
        this.isLoading$.next(true);
        this.rest.getAll().pipe(
            catchError(() => of([])),
            finalize(() => this.isLoading$.next(false))
        ).subscribe(data => this.data$.next(data[`data`]));
    }
}
