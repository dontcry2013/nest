import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;

    console.log(`Request URL: ${url}, Method: ${method}`);

    const now = Date.now();

    return next.handle().pipe(
      map((data) => {
        console.log(
          `After response... Time taken: ${Date.now() - now}ms`,
          data
        );
        return {
          success: true,
          data,
        };
      }),
      catchError((err) => {
        console.error('Error intercepted:', err.message);
        return throwError(
          () =>
            new BadRequestException({
              success: false,
              message: err.message || 'An error occurred',
            })
        );
      })
    );
  }
}
