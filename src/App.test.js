import { add, total } from './app'


// Below is a Unit Test (Because it only tests one thing) 

test("add", () => {
    const value = add(1, 2)
    expect(value).toBe(3)
})

// Below is an Integration Test (Because it relies on multiple functions in order to work)

test("total", () => {
    const value = total(5, 15)
    expect(value).toBe("$20")
})

// Test functions have a name (first argument) and the second argument is an assertion