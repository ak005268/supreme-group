export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  }

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
  }
  
  export interface AuthContextType {
    state: AuthState;
    login: (user: User) => void;
    logout: () => void;
  }
  