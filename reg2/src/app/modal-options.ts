import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-options',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Oops!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Oops, something went wrong</p>
    </div>
    <div class="modal-footer">
      <a href="/" class="btn btn-outline-dark">Back to form!</a>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class NgbdModalContentComponent {
  constructor(public activeModal: NgbActiveModal) {
  }
}
@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalOptionsComponent {

  constructor(private modalService: NgbModal) {
  }
  open() {
    this.modalService.open(NgbdModalContentComponent);
  }
}
