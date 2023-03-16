const arr= [1,2,9,5,2];
function BubbleSort(arr:number[]){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
           const temp = arr[i];
           arr[i] = arr[j]
            arr[j] = temp
        }
        
    }
}
BubbleSort(arr)
