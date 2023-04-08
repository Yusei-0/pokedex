import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { throwError } from 'rxjs';

export const errorsHttp = (error: HttpErrorResponse) => {
  if (error.status === HttpStatusCode.Conflict) {
    return throwError(() => 'Error: Conflict');
  }
  if (error.status === HttpStatusCode.NotFound) {
    return throwError(() => 'Error: Not Found');
  }
  if (error.status === HttpStatusCode.BadRequest) {
    return throwError(() => 'Error: BadRequest ');
  }
  return throwError(() => 'Error: Something is wrong');
};
