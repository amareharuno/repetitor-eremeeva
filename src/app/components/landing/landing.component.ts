import {Component} from '@angular/core';
import {
  BUTTON,
  googleFormLink,
  introItems,
  introText,
  landingSections,
  name,
  projects,
  socialNetworks
} from "../../mocks";
import {headerNavigationItems} from "../../mocks/shared";
import {Router} from "@angular/router";
import {ANCHOR} from "../../models/navigation";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.less'
})
export class LandingComponent {

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

  _navigateToSection(anchorLink: ANCHOR) {
    this.router.navigate([], {fragment: anchorLink});
    document.getElementById(anchorLink)?.scrollIntoView({
      // behavior: "smooth", // FIXME: doesn't work
      block: "center",
    });

    // const timer = setTimeout(() => {
    //
    //   this.router.navigate([], {fragment: anchorLink});
    //   console.log("anchorLink", anchorLink);
    //   document.getElementById(anchorLink)?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "center",
    //   });
    // }, 500);
    //
    // clearTimeout(timer);
  }
}
