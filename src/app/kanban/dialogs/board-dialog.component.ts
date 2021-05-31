import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-dialog',
  styleUrls: ['./dialog.scss'],
  template: `
    <h1 mat-dialog-title>Board</h1>
    <div mat-dialog-content class="content">
      <p>What shall we call this board?</p>
      <mat-form-field>
        <input placeholder="Title" matInput [(ngModel)]="data.board.title" />
      </mat-form-field>
      <br>
      <mat-form-field>
        <textarea
          placeholder="Description"
          matInput
          [(ngModel)]="data.board.description"
        ></textarea>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>

      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>
        {{ data.isNew ? 'Add Board' : 'Update Board' }}  
      </button>
      
      <app-delete-button
        (delete)="handleBoardDelete()"
        *ngIf="!data.isNew"
      ></app-delete-button>
    </div>
  `
})
export class BoardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleBoardDelete() {
    this.boardService.deleteBoard(this.data.boardId);
    this.dialogRef.close();
  }
}
