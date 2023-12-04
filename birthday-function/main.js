export function getBirthdayDay(person) {
    if (person == 'Auca') {
        return ['May', 22] 

    }
    else if (person == 'Sofi') {
        return ['December', 4] 
    }
    else {
        console.error("I don't have the birtday of that person!");
    }
}

function main() {
    let obtener_cumple = getBirthdayDay('Yami')
    console.log(obtener_cumple)
}

main()