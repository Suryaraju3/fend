
// import Header from '@/component/pages/Header'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router';

// const Patientdetails = () => { 

  
//     const [formdata,setFormData]=useState({Name:"",Age:"",Sex:"",Dateorbirth:"",Phonenumber:"",Address:"",Date:"",Issue:"",DoctorName:"",Block:"",Roomno:""})
//     const [data,setData] = useState([]);
//     const router = useRouter();

//     useEffect(()=>{
//     const fetchdata = async()=>{
//      await axios.get('http://127.0.0.1:8000/api/pdetails/')
//       .then(Response =>setData(Response.data))
//       .catch(error =>console.error(error))
//     };
//     fetchdata();
//   },[]);

//     const handleclick =(e)=>{
//       e.preventdefault();
//       axios.post('http://127.0.0.1:8000/api/pdetails/',formdata)
//       .then(res=>{fetchdata('');
//         setFormData({Name:"",Age:"",Sex:"",Dateorbirth:"",Phonenumber:"",Address:"",Date:"",Issue:"",DoctorName:"",Block:"",Roomno:""});
//         router.push('/thank you')
//       })
//       .catch(error=> console.error(error))
//     };

   
    
//   return (

//     <div className='m-5'>
    
    
//     <form action="" onSubmit={handleclick} className='p- bg-pink-300 w-300'>
//       <div className='bg-blue-500 '>
//         <h3>PatientDetails</h3>
//       </div>

//       <div className='flex justify-between p-2'>

//         <label htmlFor="">Name</label>
//         <input type="text" className='border-2 rounded ' value={formdata.Name} onChange={(e)=>setFormData({...formdata,Name:e.target.value})} />

//         <label htmlFor="">Age</label>
//         <input type="text"  className='border-2 rounded ' value={formdata.Age} onChange={(e)=>setFormData({...formdata,Age:e.target.value})}  />

//          <label htmlFor="">Sex</label>
//         <input type="text"  className='border-2 rounded ' value={formdata.Sex} onChange={(e)=>setFormData({...formdata,Sex:e.target.value})}/>
    
//       </div>
     
//       <div className='flex justify-between mt-5'>

//         <label htmlFor="">Datefrbirth</label>
//         <input type="text"  className='border-2 rounded 'value={formdata.Dateorbirth} onChange={(e)=>setFormData({...formdata,Dateorbirth:e.target.value})}/>

//          <label htmlFor="">Phonenumber</label>
//         <input type="text"  className='border-2 rounded ' value={formdata.Phonenumber} onChange={(e)=>setFormData({...formdata,Phonenumber:e.target.value})}/>

//         <label htmlFor="">Address</label>
//         <input type="text"  className='border-2 rounded ' value={formdata.Address} onChange={(e)=>setFormData({...formdata,Address:e.target.value})}/>
     
//       </div>
      
//       <div className='flex justify-end pt-10 '>

//         <label htmlFor="">Date</label>
//         <input type="text"  className='border-2 rounded ' value={formdata.Date} onChange={(e)=>setFormData({...formdata,Date:e.target.value})}/>
//        </div>

//        <div className='flex justify-between p-2 mt-5'>
//         <label htmlFor="">Issue</label>
//         <input type="text"  className='border-2 rounded' value={formdata.Issue} onChange={(e)=>setFormData({...formdata,Issue:e.target.value})}/>

//         <label htmlFor="">DoctorName</label>
//         <input type="text"  className='border-2 rounded' value={formdata.DoctorName} onChange={(e)=>setFormData({...formdata,DoctorName:e.target.value})}/>

//         <label htmlFor="">Block</label>
//         <input type="text"  className='border-2 rounded 'value={formdata.Block} onChange={(e)=>setFormData({...formdata,Block:e.target.value})}/>
  
//         <label htmlFor="">Roomno</label>
//         <input type="text"  className='border-2 rounded ' value={formdata.Roomno} onChange={(e)=>setFormData({...formdata,Roomnoe:target.value})}/>
     
//         </div>
      
//         <div className='flex justify-center p-5'>
//         <button type='submit' className='border-1 bg-green-500 px-10 py-2 rounded cursor-pointer '>Save</button>
//       </div>

//    </form>
   

//       <table className='border-collapse border border-gray-400 ring-2 ring-red-200 mt-5'>
//         <thead>
//           <tr className=''>
//             <td className='border border-gray-300 dark:border-gray-600'>Pid</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Name</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Age</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Sex</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Dateorbirth</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Phonenumber</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Address</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Date</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Issue</td>
//             <td className='border border-gray-300 dark:border-gray-600'>DoctorName</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Block</td>
//             <td className='border border-gray-300 dark:border-gray-600'>Roomno</td>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map(datas=>(
//               <tr key={datas.id} onClick={()=>handleclick(datas.id)} style={{cursor: 'pointer'}}>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Pid}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Name}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Age}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Sex}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Dateorbirth}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Phonenumber}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Address}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Date}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Issue}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.DoctorName}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Block}</td>
//                 <td className='border border-gray-300 dark:border-gray-600'>{datas.Roomno}</td>
                    
//               </tr>
//             ))
//           }
//         </tbody>

//       </table>
//    </div>
//   )
// }
