import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class TemplatePropertyService {

  constructor(private http: HttpClient) { }

CreateApp(appMeta) {
  // const appMeta = '<scratchApplications>' +
  //                   '<application>' +
  //                     '<application_name><![CDATA[testdcm2]]></application_name>' +
  //                     '<application_type>0</application_type>' +
  //                     '<table>' +
  //                       '<table_name><![CDATA[Object 1]]></table_name>' +
  //                       '<fields></fields>' +
  //                       '<primary_key>id</primary_key>' +
  //                     '</table>' +
  //                     '<table>' +
  //                       '<table_name><![CDATA[Object 2]]></table_name>' +
  //                       '<fields></fields>' +
  //                       '<primary_key>id</primary_key>' +
  //                     '</table>' +
  //                 '</application>' +
  //                 '<tableRelationShip>' +
  //                   '<relationship>' +
  //                     '<masterTable><![CDATA[Object 1]]></masterTable>' +
  //                     '<detailTable><![CDATA[Object 2]]></detailTable>' +
  //                     '<cardinality>2</cardinality>' +
  //                   '</relationship>' +
  //                 '</tableRelationShip>' +
  //               '</scratchApplications>';
  const url = '/networking/Service?rdm=9876664';
  const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
  let paramObject = new HttpParams();
  paramObject = paramObject.set('s', '716');
  paramObject = paramObject.set('a', 'create_app_center');
  paramObject = paramObject.set('app_creator_mode', '1');
  paramObject = paramObject.set('app_xml', appMeta);
  paramObject = paramObject.set('done', 'Service?t=101&targetpage=CreateApplicationSuccess.jsp');
  paramObject = paramObject.set('fromCaseDynamics', '1');
  return this.http.post(url, paramObject, {headers: headers, responseType: 'text'});
}

}
