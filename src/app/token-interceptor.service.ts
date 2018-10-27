import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let idToken = localStorage.getItem('token')
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + idToken)
      }
    )
    return next.handle(tokenizedReq)
  }

}