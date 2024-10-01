function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => {
		console.log(value, arr2[index]);
		return value === arr2[index];
	})

}

function getUsersNamesInAgeRange(users, gender) {
	const filterGender = users.filter(user => user.gender === gender);
	if (filterGender.length === 0) {
		return 0;
	}

	const ages = filterGender.map(user => user.age);
	const averageAge = (ages.reduce((acc, age) => (acc + age), 0)) / filterGender.length;
	return averageAge;

}