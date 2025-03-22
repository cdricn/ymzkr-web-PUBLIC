'use client';
import styles from './dbworks.module.css'
import { EntriesPropsArr } from '../../lib/interface'
import { SlTrash, SlCheck, SlPencil, SlBan  } from "react-icons/sl";
import { useState, CSSProperties  } from 'react';
import { UUID } from 'crypto';
import { deleteEntry } from '@/app/lib/actions';

interface EditingItems {
  [id: string]: boolean;
}

export default function DBWorksList({data} : EntriesPropsArr){
  const [isEditing, setIsEditing] = useState<EditingItems>({});
  const [isDisabled, setIsDisabled] = useState(true)
  
  const styleDisabled: CSSProperties = {
    userSelect: 'none',
    cursor: 'not-allowed',
    backgroundColor: 'var(--background-darkgrey)'
  }

  const handleEdit = (id:UUID) => {
    setIsEditing((prevValue) => ({
      ...prevValue,
      [id]: !prevValue[id], // Toggle editing state for the specific item
    }));
    setIsDisabled(!isDisabled)
  }

  function handleDelete(id:UUID) {
    deleteEntry(id)
  }
  
  return (        
    <section className={styles['entries-container']}>
      <div className={styles['headers-row']}>
        <div>ID</div>
        <div>Title</div>
        <div>Link</div>
        <div>Date Created</div>
        <div>Date Completed</div>
        <div>Category</div>
        <div>Actions</div>
      </div>
      {data.map((item) => {
        // splice date backwards by 43 chars if we dont want to alter sql query
        return (
          <form className={styles['item-form']} key={item.id}>
            <input className={styles['']}
              type='text'
              name='id'
              value={item.id}
              disabled={isDisabled}
            />
            <div>{item.title}</div>
            <div className={styles['entry-link']}>{item.link}</div>
            <div>{item.date_created.toString()}</div>
            <div>{item.date_completed?.toString()}</div>
            <div>{item.category_id}</div>

            
            <div className={styles['action-buttons']}>
              <div className={styles['edit-button']}
                onClick={() => {handleEdit(item.id)}}>
                {
                  isEditing[item.id] ? 
                  <SlCheck className={styles['button-svg']}/> :
                  <SlPencil className={styles['button-svg']}/> 
                }
              </div>
              <div className={styles['delete-button']} 
                onClick={()=>handleDelete(item.id)}
                style={isEditing[item.id] ? styleDisabled : undefined}
              >
                <SlTrash className={styles['button-svg']}/>
              </div>
              <div className={styles['cancel-button']} 
                style={isEditing[item.id] ? undefined : styleDisabled}
                onClick={
                  ()=>isEditing[item.id] ? 
                  setIsEditing((prevValue)=> ({
                    ...prevValue, [item.id]: !prevValue[item.id]
                  })) 
                  : 
                  null 
                }
              >
                <SlBan className={styles['button-svg']}/>
              </div>
            </div>
          </form>
        );
      })}
    </section>
  )
}