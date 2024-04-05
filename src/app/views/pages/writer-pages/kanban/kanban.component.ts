import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent {

  ticketsArray : any [] = [
    {title: 'Ticket 1', description: 'Description 1', status: 'To Do'},
    {title: 'Ticket 2', description: 'Description 2', status: 'To Do'},
    {title: 'Ticket 3', description: 'Description 3', status: 'To Do'},
    {title: 'Ticket 4', description: 'Description 4', status: 'In Progress'},
    {title: 'Ticket 5', description: 'Description 5', status: 'In Progress'},
    {title: 'Ticket 6', description: 'Description 6', status: 'Done'},
    {title: 'Ticket 7', description: 'Description 7', status: 'Done'}
  ];
  currentItem: any;

  filterTickets(status: string) {
    return this.ticketsArray.filter(ticket => ticket.status === status);
 }

 onDragStart (item:any) {
  this.currentItem = item;
 }

 onDrop (event:any, status: string) {
  event.preventDefault();
  const record =this.ticketsArray.find(ticket => ticket.title === this.currentItem.title);
  if (record!==undefined) {
    record.status = status;
  }
  this.currentItem = null;
 }

 onDragOver(event:any) {
  event.preventDefault();
 }

 toggleEdit(item: any) {
  item.editable = !item.editable;
}

saveChanges(item: any) {
  item.editable = false;
}

}

