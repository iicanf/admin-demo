import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GlobalProperties {
  private _pageType: any;

  constructor() {
    this._pageType = 'pc';
  }


  get pageType(): any {
    return this._pageType;
  }

  set pageType(value: any) {
    this._pageType = value;
  }
}
