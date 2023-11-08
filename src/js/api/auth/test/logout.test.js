import { logout } from "../logout.js"

describe('logout function', () => {
    const localStorageRemoveItemMock = jest.fn();
    const localStorageMock = {
      removeItem: localStorageRemoveItemMock,
    };
  
    beforeAll(() => {
      global.localStorage = localStorageMock;
    });
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should clear the token from browser storage', () => {
      logout();
  
      expect(localStorageRemoveItemMock).toHaveBeenCalledWith('token');
    });
  });