const checkout = require('.')

describe('Checkout', () => {
    it('should return a total of zero when nothing has been added', () => {
        expect(checkout()()).toBe(0)
    });

    it('should return the total when a 🍏is added', () => {
        expect(checkout()('apple')).toBe(0.5)
    });

    it('should return the total when 2 🍏are added', () => {
        const checkoutItem = checkout()
        checkoutItem('apple')
        const total = checkoutItem('apple')
        expect(total).toBe(1)
    });

    it('should return the total when a 🍌is added', () => {
        expect(checkout()('banana')).toBe(0.3)
    });

    it('should return the total when a 🥑is added', () => {
        expect(checkout()('avocado')).toBe(1)
    });
})