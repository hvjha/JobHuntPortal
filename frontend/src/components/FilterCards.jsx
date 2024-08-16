import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
const filterData = [
    {
        filterType:"Location",
        array:["Delhi NCR","Banglore","Noida","Gurgram","Hydrabad","Pune","Mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer","FullStack Developer","MERN Stack Developer","React.js Developer",
  "Node.js Developer","Data Science","Graphic Designer",]
    },
    {
      filterType: "Salary",
      array: ["0-3LPA", "3-5LPA", "5-10LPA"]
    },
]
const FilterCards = () => {
  const [selectedValue,setSelectedValue] = useState('');
  const dispatch = useDispatch()
  const changeHandler = (value) =>{
    setSelectedValue(value);
  }
  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue))
  },[selectedValue])
  return (
    <div className='w-full bg-white p-3 rounded-md shadow-xl bg-white border border-gray-200'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup  value ={selectedValue} onValueChange={changeHandler}>
        {
            filterData.map((data,index)=>(
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item,idx)=>{
                          const itemId = `r${index}-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item} id={itemId}/>
                                <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                    })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCards
