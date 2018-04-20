import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'ptt-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent
  implements OnInit, AfterContentInit {

  @ContentChildren(TabPanelComponent)
  tabPanels: QueryList<TabPanelComponent>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.tabPanels.length < 1) {
      return;
    }
    const tabsActive = this.tabPanels
      .filter(tab => tab.active === true);
    if (tabsActive.length === 0) {
      this.tabPanels.first.active = true;
    } else if (tabsActive.length > 1) {
      for (let i = 1; i < tabsActive.length; ++i) {
        tabsActive[i].active = false;
      }
    }
  }

  selectTab(event, tab) {
    event.preventDefault();
    if (tab.active) {
      return;
    }
    const tabs = this.tabPanels
      .filter(t => t.id !== tab.id);
    // chon ptu hien tai
    tab.active = true;
    // bo chon cac ptu khac
    tabs.forEach(t => t.active = false);
  }

}
