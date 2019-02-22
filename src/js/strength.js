/*NOT USED
idea for restricting password */


const hasNumbers = value => {
    return new RegExp(/[0-9]/).test(value)
}

const hasMixed = value => {
    return new RegExp(/[a-z]/).test(value) &&
           new RegExp(/[A-Z]/).test(value)
}

const strengthColor = count => {
    if(count < 8) return 'red'
    if(count < 9) return 'orange'
    if(count < 10) return 'yellow'
    if(count < 11) return 'green'
}

const strengthIndicator = value => {
    const matched = []
    if(value.length > 8) matched.push('greater-than-5')
    if(hasNumbers(value)) matched.push('has-numbers')
    if(hasMixed(value)) matched.push('has-mixed')

    return matched.length
}