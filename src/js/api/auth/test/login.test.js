import { login } from '../login';

import 'jest-localstorage-mock';

// Mock the fetch function used in the login function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true, 
    json: () => Promise.resolve({ accessToken: 'testToken', otherData: 'data' }),
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

// Test a successful login
  test('Successful Login', async () => {
    const email = 'workflowtester1@noroff.com';
    const password = '12345678';

    const profile = await login(email, password);

    expect(profile).toEqual({ otherData: 'data' });
    expect(localStorage.getItem('token')).toBe('"testToken"');
  });

 // Test a failed login (mocking a failed API response)
  test('Failed Login', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    const email = 'workflowtester1@noroff.com';
    const password = 'invalid_password';

    await expect(login(email, password)).rejects.toThrow('Unauthorized');

    expect(localStorage.getItem('token')).toBe(null);
  });
});


