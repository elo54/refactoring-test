class Item {

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    switch (this.name) {
      case "Sulfuras, Hand of Ragnaros":
        break;

      case "Aged Brie":
        if (this.quality <50) {
          this.quality+=1;
        }
        this.sellIn -=1;
        break;

      case "Backstage passes to a TAFKAL80ETC concert":
        if (this.sellIn < 11) {
          if (this.sellIn < 6) {
            if (this.quality <50) {
              this.quality +=1;
            }
          }
          if (this.quality <50) {
            this.quality +=1;
          }
        }
        if (this.quality <50) {
          this.quality +=1;
        }
        if (this.sellIn <0) {
          this.quality = 0;
        }
        this.sellIn-=1;
        break;

      case "Conjured Mana Cake":
        if (this.quality > 0) {
          this.quality-=1;
        }
        if (this.quality > 0) {
          this.quality-=1;
        }
        this.sellIn-=1;
        break;

      default:
        if (this.quality > 0) {
          this.quality-=1;
        }
        this.sellIn-=1;
        break;
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};
