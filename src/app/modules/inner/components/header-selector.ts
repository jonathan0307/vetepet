import {
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { User } from '../../../../../backend';

@Component({
  selector: 'app-header-selector',
  template: `

  `,
})
export default class HeaderSelector implements OnInit, OnDestroy {
  showMenu = signal(false);

  users = input.required<User[]>();

  userChanged = output<User>();

  currentUser = input<User | null>();

  logout = output();

  private closeMenu = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.menu')) {
      this.showMenu.set(false);
    }
  };

  ngOnInit() {
    document.addEventListener('click', this.closeMenu);
  }

  emitUser(user: User) {
    this.userChanged.emit(user);
    this.showMenu.set(false);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.closeMenu);
    this.showMenu.set(false);
  }
}
