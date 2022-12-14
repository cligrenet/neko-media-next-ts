import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/logo-clearbg.png';
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';
import { IUser } from '../types';

const Navbar = () => {
	const { userProfile, addUser, removeUser } = useAuthStore();

	const [user, setUser] = useState<IUser | null>();
	const [searchValue, setSearchValue] = useState('');

	const router = useRouter();

	useEffect(() => {
		setUser(userProfile);
	}, [userProfile]);

	const handleSearch = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (searchValue) {
			router.push(`/search/${searchValue}`);
		}
	};

	return (
		<div className="w-full flex justify-between items-center border-b-2 border-grey-200 py-2 px-4">
			{/* logo */}
			<Link href="/">
				<div className="w-[150px] md:w-[130px] md:h-[45px] h-[55px]">
					<Image className="cursor-pointer" src={Logo} alt="neko media" layout="responsive" />
				</div>
			</Link>

			{/* search bar */}
			<div className="relative hidden md:block">
				<form onSubmit={handleSearch} className="absolute md:static top-10 -left-20 bg-white">
					<input
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0"
						placeholder="Search accounts and videos"
					/>
					<button
						onClick={handleSearch}
						className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
					>
						<BiSearch />
					</button>
				</form>
			</div>

			{/* Google login/ logout */}
			<div>
				{user ? (
					<div className="flex gap-5 md:gap-10">
						<Link href="/upload">
							<button className="rounded-full cursor-pointer border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2 ">
								<IoMdAdd className="text-xl" />
								<span className="hidden md:block">Upload</span>
							</button>
						</Link>
						{user.image && (
							<Link href={`/profile/${user._id}`}>
								<div>
									<Image
										width={40}
										height={40}
										className="rounded-full cursor-pointer"
										src={user.image}
										alt="profile photo"
									/>
								</div>
							</Link>
						)}
						<button
							type="button"
							className="cursor-pointer p-2"
							onClick={() => {
								googleLogout(), removeUser();
							}}
						>
							<AiOutlineLogout fontSize={21} />
						</button>
					</div>
				) : (
					<GoogleLogin
						onSuccess={(res) => createOrGetUser(res, addUser)}
						onError={() => console.log('???? Login failed!')}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;
