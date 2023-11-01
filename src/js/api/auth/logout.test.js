import { logout } from "./logout";

describe('logout function', () => {
    // Mock localStorage functions
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
  
      // Expect that localStorage.removeItem was called with the 'token' key
      expect(localStorageRemoveItemMock).toHaveBeenCalledWith('token');
    });
  });