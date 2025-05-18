import Link from "next/link";
import { auth, signOut } from "@/app/auth";

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
            Sign Out
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
    return null;
  }
}

export default async function NavBar() {
  const session = await auth();
  console.log("Etat connection");
  return (
    <div className="absolute top-6 right-6 flex gap-4 z-50">
      <SignIn co={session} />
      <SignUp co={session} />
    </div>
  );
}
