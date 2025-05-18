import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-200 via-[rgb(243,238,212)] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in-up p-6 rounded-lg text-gray-900 bg-white/30 backdrop-blur-sm shadow-md">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
