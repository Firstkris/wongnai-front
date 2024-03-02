import React from 'react'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'
import { BahtIcon } from '../../icons/icon';


function UserReview() {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	const [inputLength, setInputLength] = useState(0);

	const handleChange = (event) => {
		setInputLength(event.target.value.length);}
  return (
<div className=' max-w-[1024] w-10/12 mx-auto flex flex-col items-center bg-gray_primary '>
	<div className=' w-7/12 bg-white h-full p-3 my-4 rounded-md'>
	<div className='flex justify-around '>
							<div className='flex gap-4 w-full'>
							<div className='bg-gray-300 w-32 h-32 rounded-md'></div>
								<div className='w-full'>
									<div className='flex justify-between'>
									<h1>BONHOMIE CRAFT BEER BAR </h1>
									<button className='bg-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-400'>บันทึก</button>
									</div>
									<p>0 เรตติ้ง (0 รีวิว)</p>
									<p>กึ่งผับ/ร้านเหล้า/บาร์</p>
								</div>
							</div>
						</div>
	</div>
	<div className=' w-7/12 bg-white h-full p-3 my-4 rounded-md flex flex-col gap-4 '>
		<div 
			className=' font-bold pb-4 m-2 mb-4 border-b-2 '>เขียนรีวิว
		</div>
		<div className='flex justify-center'>
			<h1>ให้คะแนนร้านอาหารนี้</h1>
		</div>
		<div className='flex justify-center'>
			{[...Array(5)].map((star,index) =>{
				const ratingValue = index + 1;
				return (<label>
					<input className=' hidden' type='radio' name='rating' value={ratingValue} onClick={()=>setRating(ratingValue)}/>
					<FaStar
					color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
					onMouseEnter={()=>setHover(ratingValue)}
					onMouseLeave={()=>setHover(null)}
					 size={50}/>
				</label>
				)})}
		</div>
		<div>
			<div className='flex justify-between mb-2'>
				<p>หัวเรื่องรีวิว</p>
				<p>0/120</p>
			</div>
			<input onChange={inputLength} maxLength={120} className='w-full p-1 border-2 rounded-md ' placeholder='อธิบาย ความพอใจ/ไม่พอใจ ใน 120 ตัวอักษร'></input>
		</div>
		<div>
			<div className='flex justify-between mb-2'>
				<p>รายละเอียดรีวิว</p>
				<p>{inputLength} ตัวอักษร</p>
			</div>
			<div className=' relative'>
			<textarea onChange={handleChange}   type='text' className=' w-full p-1 border-2 rounded-md pb-10 block  ' placeholder='เล่ารายละเอียดตรงนี้เลย เขียนรีวิวให้เหมือนเล่าให้เพื่อนฟังนะครับ 64 ตัวอักษรขึ้นไป'></textarea>
			</div>
		</div>
			<div>
				<p>ราคาต่อหัว</p>
				<div className='flex gap-1 mb-6'>
				<svg className='h-5 w-5 bg-gray-400 rounded-full hover:bg-red-600 ' fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
					<div className='flex gap-1'>
                    <BahtIcon/>
					<svg className='bg-gray-400 rounded-full w-5 h-5 hover:bg-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M144 0c-17.7 0-32 14.3-32 32V64H37.6C16.8 64 0 80.8 0 101.6V224v41.7V288 406.3c0 23 18.7 41.7 41.7 41.7H112v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c61.9 0 112-50.1 112-112c0-40.1-21.1-75.3-52.7-95.1C280.3 222.6 288 200.2 288 176c0-61.9-50.1-112-112-112V32c0-17.7-14.3-32-32-32zM112 128v96H64V128h48zm64 96V128c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-64 64v96H64V288h48zm64 96V288h32c26.5 0 48 21.5 48 48s-21.5 48-48 48H176z"/></svg>
					<svg className='bg-gray-400 rounded-full w-5 h-5 hover:bg-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M144 0c-17.7 0-32 14.3-32 32V64H37.6C16.8 64 0 80.8 0 101.6V224v41.7V288 406.3c0 23 18.7 41.7 41.7 41.7H112v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c61.9 0 112-50.1 112-112c0-40.1-21.1-75.3-52.7-95.1C280.3 222.6 288 200.2 288 176c0-61.9-50.1-112-112-112V32c0-17.7-14.3-32-32-32zM112 128v96H64V128h48zm64 96V128c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-64 64v96H64V288h48zm64 96V288h32c26.5 0 48 21.5 48 48s-21.5 48-48 48H176z"/></svg>
					</div>
				</div>
				<div>
					<div 
						className=' font-bold pb-4 m-2 mb-4 border-b-2 '>รูปภาพ
					</div>
						<div className='flex justify-around '>
							<div className='flex gap-4'>
							<div className='bg-gray-300 w-24 h-24 rounded-md'></div>
								<div >
									<button className='bg-blue-200 text-blue-500 rounded-md px-3 py-1.5'>Choose File</button>
									<p>No file selected</p>
									<p>ไฟล์ GIF,JPG หรือ PNG</p>
								</div>
							</div>
							<div>
							<div className='flex justify-between  mb-2'>
								<p>คำอธิบายรูป</p>
								<p>0/80</p>
							</div>
							<div className=' w-80'>
							<textarea   type='text' className=' w-full p-1 border-2 rounded-md pb-10 block  ' ></textarea>
							</div>
							</div>
						</div>
				</div>
			</div>
		
	</div>
	<div className='flex gap-2 mb-2'>
		<button className='w-32 py-1.5 px-3 rounded-md bg-blue-500 text-white hover:bg-blue-700'>บันทึกรีวิว</button>
		<button className='w-32 py-1.5 px-3 rounded-md bg-gray-300 text-white hover:bg-gray-400'>ยกเลิก</button>
	</div>
</div>  )
}

export default UserReview