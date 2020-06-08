import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
    @ViewChild('navMenu') navMenu: ElementRef;
    @ViewChild('navBar') navBar: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop  ||     
    document.documentElement.scrollTop ) {
      console.log('hi');
     this.navBar.nativeElement.classList.add('scrolled')
    }else{
      console.log('no')
      this.navBar.nativeElement.classList.remove('scrolled');
    }
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
}

}


