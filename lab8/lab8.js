function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (val) {
    const node = new Node(val);
    if (!this.head) {
        this.head = node;
    } else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

}

LinkedList.prototype.remove = function (val) {
    if (this.head) {
        let currentNode = this.head;
        while (currentNode.next && currentNode.next.data !== val) {
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
    }
}

LinkedList.prototype.print = function () {
    let currentNode = this.head;
    const array = [];
    while (currentNode) {
        array.push(currentNode.data);
        currentNode = currentNode.next;
    }
    console.log(`LinkedList {${array.join(',')}}`);
}



let linkedlist = new LinkedList();

linkedlist.add(9);
linkedlist.add(2);
linkedlist.add(8);
linkedlist.add(4);
linkedlist.add(7);
linkedlist.print();
linkedlist.remove(4);
linkedlist.print();