import { login } from "../login.js"

const user = {
    email: 'workflowuser1@noroff.com',
    password: '12345678',
    accessToken: "testToken", 
}

const localStorageMock = {
    store: {},
    getItem(key) {
        return this.store[key] || null;
    },
    setItem(key, value) {
        this.store[key] = value;
    },
    removeItem(key) {
        delete this.store[key];
    },
    clear() {
        this.store = {};
    },
};

global.localStorage = localStorageMock;


global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: jest.fn().mockResolvedValue(user),
        statusText: 'OK',
    })
);

describe('Login Function', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Successful Login and fetches and stores token', async () => {
        await login(user);
        expect(localStorage.getItem('token')).toBe('"testToken"');
    });
});