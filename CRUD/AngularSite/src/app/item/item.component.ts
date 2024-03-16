import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[] = [];
  newItem: Item = { id: 0, name: '', description: '', price: 0 };

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItem().subscribe(items => {
      this.items = items;
    });
  }
  
  createNewItem(): void {
    this.itemService.addItem(this.newItem).subscribe(
      () => {
        console.log('Nowy element dodany');
        this.loadItems();
        this.newItem = { id: 0, name: '', description: '', price: 0 };
      },
      error => {
        console.error('Błąd podczas dodawania nowego elementu:', error);
      }
    );
  }

  editItem(item: Item): void {
    this.itemService.updateItem(item.id, item).subscribe(() => {
      console.log('Element zaktualizowany');
      this.loadItems();
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(() => {
      console.log('Element usunięty');
      this.loadItems();
    });
  }
}
