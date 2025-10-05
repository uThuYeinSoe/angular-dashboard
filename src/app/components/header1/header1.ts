import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ProfileModal } from '../../reUseableComponent/profile-modal/profile-modal';

@Component({
  selector: 'app-header1',
  imports: [ProfileModal, CdkOverlayOrigin, CommonModule],
  standalone: true,
  templateUrl: './header1.html',
  styleUrl: './header1.scss',
})
export class Header1 {
  isProfileOpen = false;
  profileUrl = 'assets/images/profile.jpg';
  profileTitle = 'Thu Yein Soe';
}
