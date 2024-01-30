var SortUtil = /** @class */ (function () {
    function SortUtil(collection) {
        this.collection = collection;
    }
    SortUtil.prototype.sort = function () {
        var length = this.collection.length;
        var isSorted = false;
        var lastUnsorted = length - 1;
        while (!isSorted) {
            isSorted = true;
            for (var i = 0; i < lastUnsorted; i++) {
                // HANDLE LINKED LIST LOGIC HERE
                if (this.collection instanceof LinkedList) {
                    // HELP! -Sarah
                }
                // HANDLE LIST OF NUMBERS LOGIC HERE
                // I GOT IT TO WORK WITH ARRAY OF NUMBERS
                if (this.collection instanceof Array) {
                    if (this.collection[i] > this.collection[i + 1]) {
                        var tempLeft = collection[i];
                        this.collection[i] = this.collection[i + 1];
                        this.collection[i + 1] = tempLeft;
                        isSorted = false;
                    }
                }
                // HANDLE STRING LOGIC HERE
                if (typeof this.collection === "string") {
                    // HELP! -Sarah
                }
            }
            lastUnsorted--;
        }
    };
    return SortUtil;
}());
var sortUtil = new SorterUtil([10, 3, -5, 0]);
sortUtil.sort();
console.log(sorter.collection);
