import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Github, Chrome } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('登录:', { email: formData.email, password: formData.password });
      alert('登录成功！');
    } else {
      console.log('注册:', formData);
      alert('注册成功！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* 主卡片 */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-slide-up">
          {/* 头部 */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isLogin ? '欢迎回来' : '创建账户'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? '登录到您的账户' : '注册新账户开始使用'}
            </p>
          </div>

          {/* 表单 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="姓名"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field pl-12"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="邮箱地址"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field pl-12"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="密码"
                value={formData.password}
                onChange={handleInputChange}
                className="input-field pl-12 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="确认密码"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input-field pl-12"
                  required={!isLogin}
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-600">记住我</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  忘记密码？
                </a>
              </div>
            )}

            <button type="submit" className="btn-primary">
              {isLogin ? '登录' : '注册'}
            </button>
          </form>

          {/* 分割线 */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">或者</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* 社交登录 */}
          <div className="space-y-3">
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Chrome className="w-5 h-5" />
              <span>使用 Google 继续</span>
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Github className="w-5 h-5" />
              <span>使用 GitHub 继续</span>
            </button>
          </div>

          {/* 切换登录/注册 */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? '还没有账户？' : '已有账户？'}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </p>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 我的应用. 保留所有权利.</p>
        </div>
      </div>
    </div>
  );
}

export default App;