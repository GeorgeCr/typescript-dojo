import RedisService from "./RedisService";

global.console = {
  ...global.console,
  log: jest.fn(),
  error: jest.fn(),
};

describe("Redis Service Tests", () => {
  let service: RedisService;

  beforeEach(() => {
    service = new RedisService("redis");
    jest.clearAllMocks();
  });

  it("should return a status", () => {
    expect(service.status()).toEqual({ redis: "ok" });
  });

  it("should be able to set and retrieve a key", async () => {
    await service.set("random-key", "random-value");

    expect(console.log).toHaveBeenCalledWith(
      "Saving content to redis [random-key]"
    );
    expect(await service.get("random-key")).toEqual("random-value");
    expect(console.log).toHaveBeenCalledWith(
      "Reading content from redis [random-key]"
    );
  });

  it("should be able to set a number", async () => {
    await service.set("other-random-key", 1010101);

    expect(console.log).toHaveBeenCalledWith(
      "Saving content to redis [other-random-key]"
    );
    expect(await service.get("other-random-key")).toEqual(1010101);
  });

  it("should accept an expiryTime", async () => {
    await service.set("expiry-key", "data", 3000);

    expect(console.log).toHaveBeenCalledWith(
      "Saving content to redis [expiry-key]"
    );
    expect(console.log).toHaveBeenCalledWith("Expiry Time: 3000");
    expect(await service.get("expiry-key")).toEqual("data");
  });

  it("should be able to delete a key", async () => {
    const expectedError =
      "get > TypeError: Cannot read property 'data' of undefined";

    await service.set("del-key", "data");

    expect(console.log).toHaveBeenCalledWith(
      "Saving content to redis [del-key]"
    );
    await service.del("del-key");
    expect(console.log).toHaveBeenCalledWith("Deleting from redis [del-key]");
    await expect(service.get("del-key")).rejects.toThrow(
      new Error(expectedError)
    );
    expect(console.error).toHaveBeenCalledWith(expectedError);
  });
});
