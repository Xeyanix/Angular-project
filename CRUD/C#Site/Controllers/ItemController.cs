using Microsoft.AspNetCore.Mvc;
using CSharpSite.Models;
using CSharpSite.Services;

namespace CSharpSite.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : ControllerBase
    {
        private readonly IItemService _itemService;

        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Item>> Get()
        {
            var items = _itemService.GetAllItems();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public ActionResult<Item> Get(int id)
        {
            var item = _itemService.GetItemById(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpPost]
        public ActionResult<Item> Post(Item item)
        {
            var newItem = _itemService.AddItem(item);
            return CreatedAtAction(nameof(Get), new { id = newItem.Id }, newItem);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _itemService.UpdateItem(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _itemService.DeleteItem(id);
            return NoContent();
        }
    }
}
