function threeSum(arr, target) {
// write your code here
  let ans = 0;
	let minDiff = Infinity;
	for ( let i = 0; i < arr.length; i++ ){
		for ( let j = i+1; j < arr.length; j++ ){
			for ( let k = j+1; k < arr.length; k++ ){
				let sum = arr[i] + arr[j] + arr[k];
				let diff = Math.abs(target - sum);
				if ( diff < minDiff ){
					minDiff = diff;
					ans = sum;
				}
			}
		}
	}
	return ans;
}

module.exports = threeSum;
