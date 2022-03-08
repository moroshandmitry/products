import { useRouter } from 'next/router';
import Image from 'next/image';
import maskable from '../public/icons/maskable.png';

const Offline = () => {
	const router = useRouter();

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<Image src={maskable} height='398' width='398' alt='maskable' />
			<h1 className='text-[#3490dc] font-bold mt-3'>Connection Lost</h1>
			<small className='text-[#51a3eb] text-justify mt-1'>
				Please check your Internet connection
			</small>
			<button
				className='mt-3 bg-[#3490dc] hover:bg-[#51a3eb] text-white font-bold py-2 px-4 rounded'
				onClick={router.reload}
			>
				refresh
			</button>
		</div>
	);
};

export default Offline;
