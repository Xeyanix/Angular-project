
using System.Collections.Generic;
using CSharpSite.Models;




namespace CSharpSite.Services
{
    public interface IItemService
    {
        IEnumerable<Item> GetAllItems();
        Item GetItemById(int id);
        Item AddItem(Item item);
        void UpdateItem(Item item);
        void DeleteItem(int id);
    }
}
