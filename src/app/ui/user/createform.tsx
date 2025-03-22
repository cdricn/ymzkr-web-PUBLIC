'use client';
import styles from './createform.module.css'
import { createEntry } from '@/app/lib/actions';
import { SlPlus } from "react-icons/sl";
import { useState } from 'react';

export default function CreateForm() {
  const [formValues, setFormValues] = useState({
    title: '',
    link: '',
    category: '',
    date_created: '',
    date_completed: ''
  });
  const [action, setAction] = useState('create');


  function handleOnChange(target: HTMLInputElement) {
    const { name, value } = target;
    setFormValues((prevValue)=>({...prevValue, [name]: value}))
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    switch(action) {
      case 'create':
        if (formValues.title == '') {
          alert('The title field is empty. Please add a title.')
        }
        else {
          const formData = new FormData();
          for (const key in formValues) {
            const typedKey = key as keyof typeof formValues;
            formData.append(key, formValues[typedKey]);
          }
          createEntry(formData)
        }
        break;
      case 'edit':
        break;
      case 'delete':
        break;
    }
  }

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <div className={styles['form-label-group']}>
        <label className={styles['form-label']}>Title:</label>
        <input
          id="title"
          name="title"
          value={formValues.title}
          onChange={(e)=>handleOnChange(e.target)}
          type="text"
          className={styles['form-input']}
        />
      </div>
      <div className={styles['form-label-group']}>
        <label className={styles['form-label']}>Link:</label>
        <input
          id="link"
          name="link"
          value={formValues.link}
          onChange={(e)=>handleOnChange(e.target)}
          type="text"
          className={styles['form-input']}
        />
      </div>

      <div className={styles['form-label-group']}>
        <label className={styles['form-label']}>Category:</label>
        <select id="category" 
          className={styles['form-input']}>
            <option disabled={true} value=""> -- select an option -- </option>
            <option value="book">Book</option>
            <option value="original">Original</option>
            <option value="fanfiction">Fanfiction</option>
        </select>
      </div>

      <div className={styles['form-label-group']}>
        <label className={styles['form-label']}>Date created:</label>
        <input
          id="date_created"
          name="date_created"
          onChange={(e)=>handleOnChange(e.target)}
          type="date"
          className={styles['form-input']}
        />
      </div>
      <div className={styles['form-label-group']}>
        <label className={styles['form-label']}>Date completed:</label>
        <input
          id="date_completed"
          name="date_completed"
          onChange={(e)=>handleOnChange(e.target)}
          type="date"
          className={styles['form-input']}
        />
      </div>
      <div className={styles['form-submit-container']}>
        <input type='submit' onClick={()=>setAction('create')} value="" className={styles['form-submit']}/>
        <SlPlus className={styles['submit-svg']}/>
      </div>
    </form>
  );
}