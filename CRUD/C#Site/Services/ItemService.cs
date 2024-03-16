using System;
using System.Collections.Generic;
using System.Linq;
using CSharpSite.Models;

namespace CSharpSite.Services
{
    public class ItemService : IItemService
    {
        private List<Item> _items;
        private int _nextId;

        public ItemService()
        {
            _items = new List<Item>
            {
                new Item { Id = 1, Name = "Item 1", Description = "Description 1", Price = 10.99m },
                new Item { Id = 2, Name = "Item 2", Description = "Description 2", Price = 19.99m },
                new Item { Id = 3, Name = "Item 3", Description = "Description 3", Price = 5.99m }
            };
            _nextId = 4;
        }

        public IEnumerable<Item> GetAllItems()
        {
            return _items;
        }

        public Item GetItemById(int id)
        {
            var item = _items.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                throw new ArgumentException("Item not found", nameof(id));
            }
            return item;
        }

        public Item AddItem(Item item)
        {
            if (item == null)
            {
                throw new ArgumentNullException(nameof(item));
            }

            item.Id = _nextId++;
            _items.Add(item);
            return item;
        }

        public void UpdateItem(Item item)
        {
            var existingItem = _items.FirstOrDefault(i => i.Id == item.Id);
            if (existingItem != null)
            {
                existingItem.Name = item.Name;
                existingItem.Description = item.Description;
                existingItem.Price = item.Price;
            }
        }

        public void DeleteItem(int id)
        {
            var itemToRemove = _items.FirstOrDefault(i => i.Id == id);
            if (itemToRemove != null)
            {
                _items.Remove(itemToRemove);
            }
        }
    }
}
