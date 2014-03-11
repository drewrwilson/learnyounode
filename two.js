var sum = 0;
var firsttime = true;

for (var i = 0; i < process.argv.length; i++) {
	if (i >= 2) {
		sum += +process.argv[i];
	};
	};

console.log(sum);