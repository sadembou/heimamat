'use client'
import React from 'react'
import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types';
import CustomCheckbox from '../../../_components/CustomCheckbox';
import { HR } from '../../../_components/HR';
import RadioButton from '../../../_components/RadioButton';

const Filters = ({categories} : {categories: Category[]}) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter();

  const handleCategories = (category: string)=>{
    const newFilters = [...categoryFilters];
    const index = newFilters.indexOf(category);
    if(index !== -1){
      newFilters.splice(index, 1);
      //newFilters.filter((id)=>id!=category);
      }else{
        newFilters.push(category);
        }
        setCategoryFilters(newFilters);
  }
  const handleSort = (sort: string)=>{
    setSort(sort)
  }
  return (
    <div  className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories?.map((category)=>{
            const isSelected = categoryFilters.includes(category.id)
            return (
              <CustomCheckbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
        <HR className={classes.hr}/>
        <h6 className={classes.title}>Sort by</h6>
        <div className={classes.categories}>
          <RadioButton
            label='Latest'
            value='-createdAt'
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName='sort'
          />
          <RadioButton
            label='Oldest'
            value='createdAt'
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName='sort'
          />
        </div>
      </div>
    </div>
  )
}

export default Filters