import Redis from "./Redis";

class RedisService {
  constructor(name) {
    try {
      console.log(`initialising redis ${name}`);
      this.redis = new Redis();
      this.name = name;
    } catch (ex) {
      console.error(`Error initialising redis ${name}`);
      console.error(ex);
    }
  }

  status() {
    const status = {};
    status[this.name] =
      this.redis && this.redis.status === "ready" ? "ok" : "failure";
    return status;
  }

  async get(key) {
    try {
      if (key.length === 0) {
        throw new Error("No key passed");
      }
      console.log(`Reading content from redis [${key}]`);
      return this.redis.get(key);
    } catch (err) {
      console.error(`get > ${err}`);
      throw new Error(`get > ${err}`);
    }
  }

  async set(key, data, expiryTime) {
    try {
      if (data.length === 0 || key.length === 0) {
        throw new Error("No key or data passed");
      }
      console.log(`Saving content to redis [${key}]`);

      if (expiryTime) {
        console.log(`Expiry Time: ${expiryTime}`);
        return await this.redis.set(key, data, expiryTime);
      }

      return await this.redis.set(key, data);
    } catch (err) {
      console.error(`set > ${err}`);
      throw new Error(`set > ${err}`);
    }
  }

  async del(key) {
    try {
      if (key.length === 0) {
        throw new Error("No key passed");
      }
      console.log(`Deleting from redis [${key}]`);
      return this.redis.del(key);
    } catch (err) {
      console.error(`del > ${err}`);
      throw new Error(`del > ${err}`);
    }
  }
}

export default RedisService;