function toggleDoors(numberOfDoors) {
    const result = [];
    for (i = 0; i < numberOfDoors; ++i) {
        result[i] = true;
    }
    for (i = 1; i <= numberOfDoors; ++i) {
        for (j = i; j <= numberOfDoors; j = j + i) {
            result[j - 1] = !result[j - 1];
        }
        return result;
    }
}