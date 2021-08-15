const {getLetterPosition, accumulate, simpleHash} = require("../index")

describe("getLetterPosition", () => {
  test("a = 1", () => {
    expect(getLetterPosition("a")).toBe(1)
  })
  test("z = 26", () => {
    expect(getLetterPosition("z")).toBe(26)
  })
})

describe("accumulate", () => {
  test("0, 1 is 1", () => {
    expect(accumulate(0, 1)).toBe(1)
  })
  test("2, 21 is 23", () => {
    expect(accumulate(2, 21)).toBe(23)
  })
})

describe("simpleHash", () => {
  test("a = 1", () => {
    expect(simpleHash("a")).toBe(1)
  })
  test("b = 1", () => {
    expect(simpleHash("b")).toBe(2)
  })
  test("aa = 2", () => {
    expect(simpleHash("aa")).toBe(2)
  })
  test("z = 8", () => {
    expect(simpleHash("z")).toBe(8)
  })
  test("kat = 5", () => {
    expect(simpleHash("kat")).toBe(5)
  })
  test("really long string", () => {
    expect(simpleHash("thisisareallylongone")).toBe(6)
  })
  test("soap", () => {
    expect(simpleHash("soap")).toBe(6)
  })
  test("soak", () => {
    expect(simpleHash("soak")).toBe(1)
  })
  test("soapy", () => {
    expect(simpleHash("soapy")).toBe(4)
  })
})
