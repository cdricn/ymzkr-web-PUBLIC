'use client';
import styles from './dbworks.module.css'
import { EntriesPropsArr } from '../../lib/interface'
import { SlTrash, SlCheck, SlPencil, SlBan  } from "react-icons/sl";
import { useState, CSSProperties  } from 'react';
import { UUID } from 'crypto';
import { deleteEntry } from '@/app/lib/actions';
import ConfirmAction from './confirmAction';

interface EditingItems {
  [id: string]: boolean;
}

export default function DBWorksList({data} : EntriesPropsArr){
  const [isEditing, setIsEditing] = useState<EditingItems>({});
  const [isDisabled, setIsDisabled] = useState(true)
  const [isConfirming, setIsConfirming] = useState({
    isVisible: false,
    id: '',
    title: ''
  });
  
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
  }

  function handleDelete(id:UUID, title:string|null) {
    if (!isEditing[id]) {
      setIsConfirming({
        isVisible: true, 
        id: id,
        title: title || ''
      });
    }
  }

  function handleCancel() {
    setIsConfirming({
      isVisible: false,
      id: '',
      title: '',
    });
  }

  function handleConfirm() {
    //deleteEntry(isConfirming.id)
    console.log('deleted')
    setIsConfirming({
      isVisible: false,
      id: '',
      title: '',
    });
  }
  
  return (
    <>
      <ConfirmAction 
        isVisible={isConfirming.isVisible} 
        title={isConfirming.title}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
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
              <div className={styles['entry-details']}>
                <div>{item.id}</div>
                <input className={styles['input-box']}
                  type='text'
                  name='title'
                  value={item.title || ''}
                  disabled={isDisabled}
                />
                <div>{item.link}</div>
                <div>{item.date_created.toString()}</div>
                <div>{item.date_completed?.toString()}</div>
                <div>{item.category_id}</div>
              </div>
              
              <div className={styles['entry-buttons']}>
                <div className={styles['edit-button']}
                  onClick={() => {handleEdit(item.id)}}>
                  {
                    isEditing[item.id] ? 
                    <SlCheck className={styles['button-svg']}/> :
                    <SlPencil className={styles['button-svg']}/> 
                  }
                </div>
                
                <div className={styles['delete-button']} 
                  onClick={()=>handleDelete(item.id, item.title)}
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
    
    </>
  )
}