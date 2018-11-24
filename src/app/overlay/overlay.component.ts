import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  template: `
  
    <button 
      mat-icon-button (click)="showOverlay = !showOverlay"
      [class.active]="showOverlay" class="origin"
      #overlayOrigin="cdkOverlayOrigin"
      cdkOverlayOrigin>
      click me!
    </button>

    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="overlayOrigin"
      [cdkConnectedOverlayOpen]="showOverlay">
      <p class="dialog-container">hello</p>
    </ng-template>
      
  `,
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {
  showOverlay
}