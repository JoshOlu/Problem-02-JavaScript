class CountDuplicates {

    countDups(input){
    	var dupeCount = 0
    	var dict = {};
    	for (var key = 0; key < input.length; key++) {
    		if (dict.hasOwnProperty(input[key])) {
    			dict[input[key]] += 1;
    		} else {
    			dict[input[key]] = 0;
    		}
    	}
    	for (var i in dict) {
    		if (dict[i] > 0) {
    			dupeCount += 1;
    		}
    	}
        return dupeCount;
    }
}

module.exports = CountDuplicates;