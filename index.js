

const checkout = () => {
    let total = 0;

    return item => {
        if (item && item === 'avocado') {
            total += 1
        }
        if (item && item === 'apple') {
            total += .5
        }
        if (item && item === 'banana') {
            total += .3
        }
        return total;
    }
}

module.exports = checkout