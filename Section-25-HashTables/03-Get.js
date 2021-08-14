class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(char - 96);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let item of this.keyMap[index]) {
      if (item[0] === key) return item[1];
    }
  }
}

let ht = new HashTable();

// Set values
ht.set("maroon", "#8000000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

console.log(
  // Get Values
  ht.get("maroon"),
  ht.get("yellow"),
  ht.get("olive"),
  ht.get("salmon"),
  ht.get("lightcoral"),
  ht.get("mediumvioletred"),
  ht.get("plum"),
  ht.get('alphabet')
);
