import React from 'react'

export function TitleRestaurantcard() {
  return (
<div className=' w-full bg-white   my-4 rounded-md'>
		<div className='p-4 flex flex-col gap-1 border-b-2'>
			<div className='flex items-baseline gap-3'>
				<h1 className='text-4xl'>Chithoe</h1>
				<h1 className='text-2xl text-gray-500'>Royal river hotel</h1>
				<p className='bg-blue-500 text-white rounded-md px-2 flex text-xs'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  				<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>OFFICIAL</p>
			</div>
			<div>
				<p className='text-gray-500 text-xs'>7 เรตติ้ง (3รีวิว)</p>
			</div>
			<div>
				<p className='text-gray-500 text-xs'>อาหารฟิวชั่น,อาหารกล่อง/ข้าวกล่อง เดลิเวอรี่</p>
			</div>
			<div>
				<p className='text-green-500 text-xs'>เปิดอยูุ่</p>
			</div>
		</div>
			<div className='p-4 flex gap-2'>
				<button className='flex bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 py-1 '>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
					</svg>
				เขียนรีวิว</button>
				<button className='flex bg-gray-200 hover:bg-gray-300  rounded-md px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  					<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
					</svg>
				เพิ่มรูป</button>
				<button className='flex bg-gray-200 hover:bg-gray-300  rounded-md px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  					<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
					</svg>
				บันทึก</button>
			</div>
	</div>  )
}

export function RestaurantMapcard() {
    return (<div className=' w-full bg-white  p-3 my-4 rounded-md'>
    <div className='flex gap-3'>
        <div className='bg-gray-300 w-40 h-40 rounded-md'><img src='https://www.nsm.or.th/nsm/sites/default/files/2021-12/20200204-2PNG.png'/></div>
        <div>
            <div className='flex justify-between pb-4 border-b-2'>
                <p className='text-xs w-2/4'>117 1 ถ. ทองหล่อ แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110</p>
                <button className='flex bg-gray-200 hover:bg-gray-300  rounded-md px-2 py-1'>ดูเส้นทาง</button>
            </div>
            <div className='flex justify-between pb-4 pt-4 border-b-2'>
                <div className='flex gap-1'>
                <p className='font-bold '>เบอร์โทร:</p>
                <p>099-999-9999</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
        </div>	
    </div>
</div>)
} 

export function RestaurantDetailCard() {
   return( <div className=' w-full bg-white  p-4 my-4 rounded-md'>
		<div className='flex flex-col gap-6'>
			<div>
				<p className='text-xs font-bold'>เวลาเปิดร้าน</p>
				<div className='flex-grow flex'>
				<p className='text-xs w-2/4 text-gray-500'>อังคาร</p>
				<p className='text-xs w-2/4 text-gray-500'>11:00 - 21:00</p>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<div className='flex gap-3'>
					<svg className='bg-green-500 w-4 h-4 text-white rounded-sm' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
					</svg>
					<p className='text-xs '>มีที่จอดรถ</p>
				</div>
				<div className='flex gap-3'>
					<svg className='bg-red-500 w-4 h-4 text-white rounded-sm' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>

					<p className='text-xs '>WIFI</p>
				</div>
			</div>

			<div className='flex flex-col'>
				<p className='text-xs font-bold'>ช่วงราคา</p>
				<div className='flex-grow flex '>
				<svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M144 0c-17.7 0-32 14.3-32 32V64H37.6C16.8 64 0 80.8 0 101.6V224v41.7V288 406.3c0 23 18.7 41.7 41.7 41.7H112v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c61.9 0 112-50.1 112-112c0-40.1-21.1-75.3-52.7-95.1C280.3 222.6 288 200.2 288 176c0-61.9-50.1-112-112-112V32c0-17.7-14.3-32-32-32zM112 128v96H64V128h48zm64 96V128c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-64 64v96H64V288h48zm64 96V288h32c26.5 0 48 21.5 48 48s-21.5 48-48 48H176z"/></svg>
				<p className='text-xs  text-gray-500'>(101 - 250 บาท)</p>
				</div>
			</div>
		</div>
	</div>)
}