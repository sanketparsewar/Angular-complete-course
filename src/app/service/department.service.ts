import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Constant } from '../constant/constants';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  http = inject(HttpClient);
  constructor() {}

  // apiURL: string = 'https://projectapi.gerasim.in/api/Complaint/';

  getApi() {
    return this.http.get(Constant.API_URL + Constant.DEPARTMENT_METHOD.GET_ALL);
  }
  postApi(obj: any) {
    return this.http.post(
      `${Constant.API_URL}${Constant.DEPARTMENT_METHOD.POST_NEW}`,
      obj
    );
  }
  putApi(obj: any) {
    return this.http.post(
      Constant.API_URL + Constant.DEPARTMENT_METHOD.PUT_UPDATE,
      obj
    );
  }
  deleteApi(depId: number) {
    return this.http.delete(
      `${Constant.API_URL}${Constant.DEPARTMENT_METHOD.DELETE_BY_ID}?departmentId=` +
        depId
    );
  }
}
