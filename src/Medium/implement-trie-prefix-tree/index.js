var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;

  for (const letter of word) {
    if (!cur.children[letter]) {
      cur.children[letter] = new TrieNode();
    }

    cur = cur.children[letter];
  }

  cur.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;

  for (const letter of word) {
    if (!cur.children[letter]) {
      return false;
    }

    cur = cur.children[letter];
  }

  return cur.isEndOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;

  for (const letter of prefix) {
    if (!cur.children[letter]) {
      return false;
    }

    cur = cur.children[letter];
  }

  return true;
};

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
