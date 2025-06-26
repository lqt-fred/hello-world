import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Github } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* 主卡片 */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* 头部 */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-white mb-1">
              {isLogin ? '用户登录121233' : '用户注册'}
            </h1>
            <p className="text-green-100 text-sm">
              {isLogin ? '请输入您的账号信息' : '创建您的新账户'}
            </p>
          </div>

          {/* 表单内容 */}
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="form-item">
                  <label className="form-label">姓名</label>
                  <div className="input-wrapper">
                    <User className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="请输入姓名"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="form-item">
                <label className="form-label">邮箱</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="请输入邮箱"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input pl-10"
                    required
                  />
                </div>
              </div>

              <div className="form-item">
                <label className="form-label">密码</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="请输入密码"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="form-item">
                  <label className="form-label">确认密码</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="请再次输入密码"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2" 
                    />
                    <span className="ml-2 text-gray-600">记住密码</span>
                  </label>
                  <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
                    忘记密码？
                  </a>
                </div>
              )}

              <button type="submit" className="btn-primary">
                {isLogin ? '登 录' : '注 册'}
              </button>
            </form>

            {/* 分割线 */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-3 text-gray-500 text-sm bg-white">第三方登录</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* 第三方登录 */}
            <div className="space-y-3">
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Github className="w-4 h-4" />
                <span>GitHub 登录</span>
              </button>
            </div>

            {/* 切换登录/注册 */}
            <div className="mt-6 text-center">
              <span className="text-gray-600 text-sm">
                {isLogin ? '还没有账户？' : '已有账户？'}
              </span>
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
              >
                {isLogin ? '立即注册' : '立即登录'}
              </button>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="text-center mt-6 text-gray-400 text-xs">
          <p>© 2025 我的应用. 保留所有权利.</p>
        </div>
      </div>
    </div>
  );
}

export default App;