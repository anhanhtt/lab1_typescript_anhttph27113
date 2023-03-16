var arr = [1, 2, 9, 5, 2];
function BubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
BubbleSort(arr);
