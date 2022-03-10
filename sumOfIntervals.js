//https://www.codewars.com/kata/52b7ed099cdc285c300001cd
//Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
//
//Intervals
//Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

function sumIntervals(intervals) {
    let sortArr = intervals.sort((a, b)=>{
       return  a[0] - b[0]
    });
    let pairs = [[sortArr[0][0],sortArr[0][1]]];
    sortArr.forEach(el => {
        let interval = [];
        if(el[0] > pairs[pairs.length -1][0] && el[0] > pairs[pairs.length -1][1]) {
            interval.push(el[0]);
            if(el[1] >= el[0]) {
                interval.push(el[1]);
                pairs.push(interval);
            }
        }
        else if(el[0] >= pairs[pairs.length -1][0]) {         
            if(el[1] > pairs[pairs.length -1][1]) {
                pairs[pairs.length -1][1] = el[1];
            }
        }
    })
    return pairs.reduce((sum, curr) => {return sum += curr[1] - curr[0]}, 0) 
}
