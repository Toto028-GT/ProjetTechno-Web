import SignUpForm from '@/app/ui/signup-form';
import { Suspense } from 'react';

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-200 via-purple-50 to-purple-100">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Suspense>
          <SignUpForm />
        </Suspense>
      </div>
    </main>
  );
}
