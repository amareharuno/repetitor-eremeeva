import {Component, OnInit} from '@angular/core';
import {
  BUTTON,
  googleFormLink,
  introItems,
  introText,
  landingSections,
  name,
  projects,
  socialNetworks
} from "mocks";
import {headerNavigationItems} from "../../mocks/shared";
import {NavigationEnd, Router, Scroll} from "@angular/router";
import {ANCHOR} from "../../models/navigation";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.less'
})
export class LandingComponent implements OnInit {

  protected readonly _title = name;
  protected readonly _sections = landingSections;
  protected readonly _anchorEnum = ANCHOR;
  protected readonly _introText = introText;
  protected readonly _introItems = introItems;
  protected readonly _buttons = BUTTON;
  protected readonly _googleFormLink = googleFormLink;
  protected readonly _projects = projects;
  protected readonly _navigationItems = headerNavigationItems;
  protected readonly _socialNetworks = socialNetworks;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      let anchor = "";

      if (event instanceof NavigationEnd) {
        let fragmentIdx = event.urlAfterRedirects.lastIndexOf('#');
        if (fragmentIdx >= 0 && fragmentIdx < event.urlAfterRedirects.length - 1) {
          anchor = event.urlAfterRedirects.substring(fragmentIdx + 1);
        }
      } else if (event instanceof Scroll && event.anchor) {
        anchor = event.anchor
      }

      document?.getElementById(anchor)?.scrollIntoView({behavior: "smooth"});
    })
  }

  _navigateToAnchor(anchor: ANCHOR): void {
    this.router.navigate([], {fragment: anchor});
  }
}
