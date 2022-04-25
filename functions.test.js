const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('test returnTwo function', () => {
    expect(returnTwo()).toEqual(2)
})

test('test greeting function', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})



describe('Math functions tests', () => {
    test('test add function', () => {
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })

    test('test subtract function', () => {
        expect(subtract(1,2)).toEqual(-1)
        expect(subtract(10,9)).toEqual(1)
    })

    test('test multiply function', () => {
        expect(multiply(1,2)).toEqual(2)
        expect(multiply(5,9)).toEqual(45)
    })

    test('test divide function', () => {
        expect(divide(2,2)).toEqual(1)
        expect(divide(10,2)).toEqual(5)
    })
    
})