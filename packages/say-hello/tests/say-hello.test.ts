import { sayHello } from "../src";

describe("sayHello", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log all fields if provided", () => {
    sayHello({ firstName: "Raim", lastName: "Smith", age: 30 });

    expect(console.log).toHaveBeenCalledWith("Hello");
    expect(console.log).toHaveBeenCalledWith("Your first name is Raim");
    expect(console.log).toHaveBeenCalledWith("Your last name is Smith");
    expect(console.log).toHaveBeenCalledWith("Your age is 30");
  });

  it("should only log first name if other fields are missing", () => {
    sayHello({ firstName: "Raim" });
    expect(console.log).toHaveBeenCalledWith("Hello");
    expect(console.log).toHaveBeenCalledWith("Your first name is Raim");
    expect(console.log).not.toHaveBeenCalledWith(
      expect.stringContaining("last name")
    );
    expect(console.log).not.toHaveBeenCalledWith(
      expect.stringContaining("age")
    );
  });
});
