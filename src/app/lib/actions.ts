'use server';
 
import { signIn } from '@/app/auth';
import { AuthError } from 'next-auth';
import { newAccount } from '@/app/api/signUpBDD';
import { newAppart } from '../api/newAppart';
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await newAccount(formData);
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function ajoutAppart(
  prevState: string | undefined,
  formData: FormData,
  mail:any,
) {
  try {
    await newAppart(mail,formData);
  } catch (error) {
    return 'Something went wrong.';
    }
}