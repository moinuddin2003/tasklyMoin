import React from 'react';
import { BarChart3 } from 'lucide-react';

const LoginForm = ({ loginForm, setLoginForm, onLogin, isLoading }) => {
  return (
    <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </div>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </div>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <button type="button" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Register
            </button>
            <button type="button" className="text-gray-600 hover:text-gray-700 transition-colors">
              Forgot Password?
            </button>
          </div>

          <button
            onClick={onLogin}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                Signing In...
              </div>
            ) : (
              'SIGN IN'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
