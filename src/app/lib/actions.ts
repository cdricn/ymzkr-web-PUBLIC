'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { signIn, signOut } from '../../auth';


const FormSchema = z.object({
  title: z.type,
  link: z.type,
  date_created: z.type,
  date_completed: z.type
})
const CreateEntry = FormSchema.omit({});

export async function createEntry(formData: FormData) {
  const dateCompleted_FormValue = formData.get('date_completed');
  const dateCompleted_ParsedValue = dateCompleted_FormValue === "" ? null : dateCompleted_FormValue;

  const {title, link, date_created, date_completed} = CreateEntry.parse({
    title: formData.get('title'),
    link: formData.get('link'),
    date_created: formData.get('date_created'),
    date_completed: dateCompleted_ParsedValue
  });

  try {
    await sql`
      -- Insert to table, table generates the ID 
    `;
  }
  catch (error) {
    console.error(error)
  }

  revalidatePath('/user');
}

export async function editEntry(formData: FormData) {

}

export async function deleteEntry(uuid: string) {
  
  try {
    await sql`
      -- Delete row that matches ID
    `;
  }
  catch (error) {
    console.error(error);
  }

  revalidatePath('/user');
}

export const login = async () => {
  await signIn("github", {redirectTo: '/user'});
}

export const logout = async () => {
  await signOut({redirectTo: '/login'});
}