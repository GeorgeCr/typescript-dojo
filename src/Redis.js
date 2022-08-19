class Redis {
    constructor() {
        this.values = {};
    }

    get(key) {
        return this.values[key].data;
    }

    set(key, data, expiryTime) {
        this.values[key] = { data, expiryTime };
        return true;
    }

    get status() {
        return "ready";
    }

    del() {
        /* TODO: Unimplemented */
    }
}

export default Redis;