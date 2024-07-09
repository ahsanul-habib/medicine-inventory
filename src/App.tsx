import {useState} from 'react';
import Billing from './components/Billing';
import { VscDashboard } from "react-icons/vsc";
import { GoDatabase } from "react-icons/go";
import { FaRegMoneyBillAlt, FaSearch } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoKeyOutline, IoNotifications } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import CreateBilling from './components/CreateBilling';
function App() {
  const [dir,changeDir]=useState('billing');


  return (
    <div className="min-h-screen w-screen flex flex-row text-sm">
      <aside className="hidden w-40 md:w-56 bg-whites md:inline-block border-r-2 border-gray">
        <h2 className='text-center text-2xl font-bold py-3'>Medical Store</h2>
        <div className="flex flex-col px-4 text-gray-500">
          <button onClick={()=>changeDir('dashboard')} className={`flex flex-row my-3 gap-1 rounded-lg hover:text-white w-full p-2 hover:bg-accent pointer items-center ${dir==='dashboard'?'bg-accent text-white':''}`}><VscDashboard className="w-7 h-7"/>Dashboard</button>
          <button onClick={()=>changeDir('inventory')} className={`flex flex-row my-3 gap-1 rounded-lg hover:text-white w-full p-2 hover:bg-accent pointer items-center ${dir==='inventory'?'bg-accent text-white':''}`}><GoDatabase className="w-7 h-7"/>Inventory</button>
          <button onClick={()=>changeDir('billing')} className={`flex flex-row my-3 gap-1 rounded-lg hover:text-white w-full p-2 hover:bg-accent pointer items-center ${dir==='billing'?'bg-accent text-white':''}`}><FaRegMoneyBillAlt className="w-7 h-7"/>Billing</button>
          <button onClick={()=>changeDir('createbilling')} className={`flex flex-row my-3 gap-1 rounded-lg hover:text-white w-full p-2 hover:bg-accent pointer items-center ${dir==='createbilling'?'bg-accent text-white':''}`}><LiaFileInvoiceDollarSolid className="w-7 h-7"/>Create Billing</button>
          <button onClick={()=>changeDir('permissions')} className={`flex flex-row my-3 gap-1 rounded-lg hover:text-white w-full p-2 hover:bg-accent pointer items-center ${dir==='permissions'?'bg-accent text-white':''}`}><IoKeyOutline className="w-7 h-7"/>Permissions</button>
          <button onClick={()=>changeDir('reporting')} className={`flex flex-row my-3 gap-1 rounded-lg hover:text-white w-full p-2 hover:bg-accent pointer items-center ${dir==='reporting'?'bg-accent text-white':''}`}><TbReportAnalytics className="w-7 h-7"/>Reporting</button>

        </div>
      </aside>
      <main className='flex-grow bg-grays relative'>
        <header className='flex justify-between flex-row h-20 bg-whites w-full items-center px-6'>
          <div className="bg-grays py-2 px-4 rounded-lg flex items-center gap-2">
              <label htmlFor="search">
                <FaSearch/>
              </label>
              <input className='bg-transparent w-52' type="text" placeholder='Search or type a command' />
          </div>
          <div className='flex gap-2'>
              <IoNotifications className='text-accent h-7 w-7'/>
              <button className='ring-2 w-7 h-7 rounded-full'></button>
          </div>        
        </header>
        <section className="p-6 mb-20">
          {dir=='billing'&&<Billing/>}
          {dir=='createbilling'&&<CreateBilling/>}
        </section>
      <div className='fixed flex justify-evenly bottom-0 h-16 w-full bg-white py-2 md:hidden'>
        <button  onClick={()=>changeDir('dashboard')} className={`bg-gray-300 aspect-square flex justify-center items-center py-2 rounded-2xl hover:bg-accent hover:text-white ${dir==='dashboard'?'bg-accent text-white':''}`}><VscDashboard className="w-7 h-7"/></button>
        <button  onClick={()=>changeDir('inventory')} className={`bg-gray-300 aspect-square flex justify-center items-center py-2 rounded-2xl hover:bg-accent hover:text-white ${dir==='inventory'?'bg-accent text-white':''}`}><GoDatabase className="w-7 h-7"/></button>
        <button  onClick={()=>changeDir('billing')} className={`bg-gray-300 aspect-square flex justify-center items-center py-2 rounded-2xl hover:bg-accent hover:text-white ${dir==='billing'?'bg-accent text-white':''}`}><FaRegMoneyBillAlt className="w-7 h-7"/></button>
        <button  onClick={()=>changeDir('createbilling')} className={`bg-gray-300 aspect-square flex justify-center items-center py-2 rounded-2xl hover:bg-accent hover:text-white ${dir==='createbilling'?'bg-accent text-white':''}`}><LiaFileInvoiceDollarSolid className="w-7 h-7"/></button>
        <button  onClick={()=>changeDir('permissions')} className={`bg-gray-300 aspect-square flex justify-center items-center py-2 rounded-2xl hover:bg-accent hover:text-white ${dir==='permissions'?'bg-accent text-white':''}`}><IoKeyOutline className="w-7 h-7"/></button>
        <button  onClick={()=>changeDir('reporting')} className={`bg-gray-300 aspect-square flex justify-center items-center py-2 rounded-2xl hover:bg-accent hover:text-white ${dir==='reporting'?'bg-accent text-white':''}`}><TbReportAnalytics className="w-7 h-7"/></button>
      </div>
      </main>

    </div>
  );
}

export default App;
