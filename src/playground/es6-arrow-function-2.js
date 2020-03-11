const add = (a, b) => {
    // console.log(atguments);
    return a + b;
};


const user = {
    name: 'Andrew',
    cities: ['Bucharest', 'Athenes', 'Lisbon'],
    printPlacesLived() {
        return this.cities.map((city) => 
            this.name + ' has lived in ' + city
        );
    }
};

console.log(user.printPlacesLived());
console.log(user.cities);

// Challenge area

const multiplier = {
    numbers: [1, 2, 4, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((each) => 
            each * this.multiplyBy
        );
    }
}

console.log(multiplier.multiply());