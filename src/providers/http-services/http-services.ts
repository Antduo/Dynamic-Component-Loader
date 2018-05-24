import { Http, Response } from '@angular/http';
import { Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServicesProvider {

  //设置post的格式
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http,
    public jsonp: Jsonp) {

  }




  requestData(apiUrl, callback) {
    
    if (apiUrl.indexOf('?') == -1) {
      var api = apiUrl + '?callback=JSONP_CALLBACK'
    } else {
      // tslint:disable-next-line:no-duplicate-variable
      var api = apiUrl + '&callback=JSONP_CALLBACK'
    }
    console.log("接口: " + api);

    this.jsonp.get(api, { headers: this.headers }).subscribe(function (data) {
      // console.log(data);

      callback(data['_body']);
      /*回调函数*/

    }, function (err) {
      console.log(err);
    })
  }

  // post 提交数据
  doPost(apiUrl, json, callback) {
    var api = apiUrl;
    this.http.post(api, JSON.stringify(json), { headers: this.headers }).subscribe(function (res) {

      callback(res.json());
    })

  }


}
