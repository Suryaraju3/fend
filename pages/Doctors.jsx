
import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import Header from '@/component/pages/Header';


// import { Didact_Gothic } from 'next/font/google';
const Doctors = () => {

 
    const [doct,setDocts]=useState({DoctorName:"",specialist:"",Block:"",Roomno:""});
    const [data,setData] = useState([]);

    useEffect(()=>{
    const fetchdata =()=>{
      axios.get('http://127.0.0.1:8000/api/doctor/')
      .then(res =>setData(res.data))
      .catch(error =>console.error(error))
    };
    fetchdata();
  },[]);

    const handleclick =(e)=>{
      e.preventdefault();
      axios.post('http://127.0.0.1:8000/api/doctor/',doct)
      .then(res=>{fetchdata('');
        setDocts({DoctorName:"",specialist:"",Block:"",Roomno:""});

      })
      .catch(error=> console.error(error))
    };

  return (
    <div className='bg-pink-200 h-500'>
      
         
      <div className='   px-100 py-6 '>
       
        <form action="" onSubmit={handleclick} className=' border-2 border-pink-700'>
           <h3 className='font-semibold border-2 border-t-0 border-l-0 border-r-0  '>DoctorDetails:</h3>
          <div className='h-'>

          <div className='p-2'>
          <label htmlFor="name">DoctorName</label>
          <input type="text" id='name'  className='border-2 rounded ml-1' value={doct.DoctorName} onChange={(e)=>setDocts({...doct, DoctorName:e.target.value})} />
          </div>

          <div className='p-2'>
          <label htmlFor="spc">specialist</label>
          <input type="text" id='spc'  className='border-2 rounded ml-7' value={doct.specialist} onChange={(e)=>setDocts({...doct, specialist:e.target.value})}/>
          </div>

          <div className='p-2'>
          <label htmlFor="block">Block</label>
          <input type="text" id='block'  className='border-2 rounded ml-13.5' value={doct.Block} onChange={(e)=>setDocts({...doct, Block:e.target.value})}/>
          </div>

          <div className='p-2'>
          <label htmlFor="Roomno">Roomno</label>
          <input type="text" id='roomno'  className='border-2 rounded ml-8' value={doct.Roomno} onChange={(e)=>setDocts({...doct, Roomno:e.target.nodeValue})} />
          </div>

          <div className='flex justify-end mr-5 mb-1'>
            <button type='submit' className='border-2 rounded bg-green-500 text-pink-600 hover:bg-green-300 hover:text-white outline-2  outline-pink-500 w-25 h-10 '>save</button>
          </div>


          </div>
        </form>
      </div>


       <div className='flex justify-evenly '>
      <table className='border-collapse border border-gray-400 ring-2 ring-red-200 '>
        <thead>
          <tr className=''>
            <td className='border border-gray-300 dark:border-gray-600'>Did</td>
            <td className='border border-gray-300 dark:border-gray-600'>DoctorName</td>
            <td className='border border-gray-300 dark:border-gray-600'>specialist</td>
            <td className='border border-gray-300 dark:border-gray-600'>Block</td>
            <td className='border border-gray-300 dark:border-gray-600'>Roomon</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map(datas=>(
              <tr key={datas.id}>
                <td className='border border-gray-300 dark:border-gray-600'>{datas.Did}</td>
                <td className='border border-gray-300 dark:border-gray-600'>{datas.DoctorName}</td>
                <td className='border border-gray-300 dark:border-gray-600'>{datas.specialist}</td>
                <td className='border border-gray-300 dark:border-gray-600'>{datas.Block}</td>
                <td className='border border-gray-300 dark:border-gray-600'>{datas.Roomno}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
      </div>
    </div>
  )
}

export default Doctors
