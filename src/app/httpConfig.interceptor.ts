import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }


        return next.handle(request).pipe(
            catchError(error => {
                if (error && error.error && !error.error.message) {
                    error.error.message = 'Błąd systemu';
                }
                return throwError(error);
            }),
            map((event: HttpEvent<any>) => {
                console.log(event);
                return event;
            }));
    }
}
