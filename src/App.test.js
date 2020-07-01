import { add } from './app'


// Below is a Unit Test (Because it only tests one thing) 

test("add", () => {
    const value = add(1, 2)
    expect(value).toBe(3)
})

// Test functions have a name (first argument) and the second argument is an assertion