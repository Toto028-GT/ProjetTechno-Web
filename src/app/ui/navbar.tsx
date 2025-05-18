import Link from "next/link";
import { auth, signOut } from "@/app/auth";
import { Building2} from 'lucide-react';

function SignIn({ co }: any) {
  if (co) {
    return (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: '/' });
          }}
        >
           <button className="bg-white text-red-700 border border-red-600 px-5 py-2 rounded-full shadow-md hover:bg-red-50 transition-all font-semibold">
            Se déconnecter
          </button>
        </form>
    );
  } else {
    return (
      <Link href="/login">
        <button className="bg-white text-purple-700 border border-purple-600 px-5 py-2 rounded-full shadow-md hover:bg-purple-50 transition-all font-semibold">
          Se connecter
        </button>
      </Link>
    );
  }
}

function SignUp({ co }: any) {
  if (!co) {
    return (
      <Link href="/signUp">
        <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all font-semibold">
          S'inscrire
        </button>
      </Link>
    );
  } else {
    return (
    <Link href="/newAppart">
      <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all font-semibold">
        + Ajouter un appartement
      </button>
    </Link>
    );
  }
}

export default async function NavBar() {
  const session = await auth();
  console.log("Etat connection");
  return (
    <div className="py-0 bg-gradient-to-b from-purple-100 to-purple-50 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-700">
          <div className="flex items-center space-x-3">
            <Building2 className="h-7 w-7 text-purple-600" />
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              VOS LOGEMENTS
            </h1>
          </div>
        </Link>
        <nav className="gap-4 flex items-center">
        <SignIn co={session} />
        <SignUp co={session} />
      </nav>
      </div>
    </div>
  );
}
