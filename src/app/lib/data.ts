import { sql } from '@vercel/postgres';
import { WorksProps, EntriesProps } from './interface';

export async function fetchLatestWorks() {
  try {
    const data = await sql`
      -- Get 5 latest items from table
    `;

    return data.rows.map((works) => ({
      ...works,
    }));
  }
  catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch table data');
  }
}

export async function fetchAllWorks(): Promise<WorksProps[]> {
  try {
    const data = await sql`
      -- Get all works from table
    `;

    return data.rows.map((works) => ({
      ...works,
    }));
  }
  catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch table data');
  }
}

export async function fetchAllEntries(): Promise<EntriesProps[]> {
  try {
    const data = await sql`
      -- Get all entries from table
    `;

    return data.rows.map((works) => ({
      prop1: works.prop1,
      prop2: works.prop2,
      prop3: works.prop3,
      prop4: works.prop4,
      prop5: works.prop5,
      prop6: works.prop6
    }));
  }
  catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch table data');
  }
}