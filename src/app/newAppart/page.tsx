import InsertApp from '@/app/ui/insert-appart';
import { Suspense } from 'react';

export default function NewAppart() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-700 px-4">
      <div className="w-full max-w-3xl">
        <Suspense>
          <InsertApp />
        </Suspense>
      </div>
    </main>
  );
}
