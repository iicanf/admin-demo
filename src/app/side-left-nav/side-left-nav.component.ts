import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-side-left-nav',
  templateUrl: './side-left-nav.component.html',
  styleUrls: ['./side-left-nav.component.css']
})
export class SideLeftNavComponent implements OnInit, OnDestroy {

  @Input()
  selfOpened: boolean;

  private _mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this._mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeListener(this._mobileQueryListener);
  }


  get mobileQuery(): MediaQueryList {
    return this._mobileQuery;
  }

  get mobileQueryListener(): () => void {
    return this._mobileQueryListener;
  }
}
