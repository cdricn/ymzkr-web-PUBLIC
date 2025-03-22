import Works from '../ui/worksPage/works';
import { fetchAllWorks } from '@/app/lib/data';

export default async function Page() {
  const allWorks = await fetchAllWorks();

  return (
    <Works data={allWorks}/>
  )
}