function evenNumbers(array, number) {
    let newArray = array.filter(n => n % 2 === 0)
    return newArray.slice(newArray.length - number)
}

function evenNumbers(array, number) {
    const newArr = [];
    for (let i = 0; i <= array.length; i++)
        if (array[i] % 2 === 0)
            newArr.push(array[i])
    return newArr.splice(newArr.length - number, number)

}