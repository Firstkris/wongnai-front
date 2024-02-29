import React from 'react'
import Input from '../../components/Input'

function RegisterPage() {
  return (
    <div className='max-w-[1024] w-8/12 mx-auto flex flex-col items-center bg-gray_primary'>
        <form className=' w-8/12 bg-white h-full  my-12 flex flex-col items-center'>
            <div className=' mt-2 mb-6  flex flex-col items-center  w-2/4 gap-5 '>
                <h1 className='text-xl font-bold ite'>สมัครสมาชิกวงใน</h1>
                <div className=' w-28 h-28'><img className=' rounded-full' src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'/></div>
                <Input placeholder='เบอร์โทร หรือ อีเมลล์' />
                <Input placeholder='ชื่อ' />
                <Input placeholder='พาสเวิร์ด' />
                <Input placeholder='ยืนยันพาสเวิร์ด' />
                <Input placeholder='วันเกิด' />
                <div className=' w-full'>
                    <p className='text-gray-400'>เพศ</p>
                    <div className='w-full flex justify-around'>
                        <button className='border-2 w-20 text-gray-500 font-bold rounded-lg px-3 py-1 m-0 '>ชาย</button>
                         <button className='border-2 w-20 text-gray-500 font-bold rounded-lg px-3 py-1 m-0 '>หญิง</button>
                         <button className='border-2 w-20 text-gray-500 font-bold rounded-lg px-3 py-1 m-0  '>ไม่ระบุ</button>
                     </div>
                </div>
                <button className='text-white w-full rounded-lg px-3 py-2 m-0 bg-blue_primary'>ถัดไป</button>
            </div>
            
        </form>
    </div>
  )
}

export default RegisterPage