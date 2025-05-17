import { NextResponse } from 'next/server';
import { auth } from "@/app/auth";
import { getAllAppartFromEmail, updateVisiteStatus } from '@/app/api/models'; // ta fonction serveur qui modifie la BDD

export async function POST(request: Request) {
  const { status, appartId } = await request.json();
  const session = await auth();

  if (!status || !appartId) {
    return NextResponse.json({ error: 'Données manquantes' }, { status: 400 });
  }

  try {
    await updateVisiteStatus(session?.user?.email, appartId, status);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}