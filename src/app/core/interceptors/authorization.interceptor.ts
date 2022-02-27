import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get token from token service
    const token = undefined;

    if (token) {
      const headers = req.headers.set('Authorization', `Bearer ${token}`);
      const authReq = req.clone({ headers });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
