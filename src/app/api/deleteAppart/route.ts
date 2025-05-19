import { NextResponse } from 'next/server';
import { auth } from "@/app/auth";
import { deleteAppart } from '@/app/api/models'; // ta fonction serveur qui modifie la BDD

export async function POST(request: Request) {
  const { status, appartId } = await request.json();
  const session = await auth();

  if (appartId === null || appartId === undefined) {
    return NextResponse.json({ error: 'Données manquantes' }, { status: 400 });
  }

  try {
    await deleteAppart(session?.user?.email, appartId);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}