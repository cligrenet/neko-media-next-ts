import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/logo-clearbg.png';

const Navbar = () => {
	return (
		<div className="w-full flex justify-between items-center border-b-2 border-grey-200 py-2 px-4">
			<Link href="/">
				<div className="w-[150px] md:w-[130px] md:h-[45px] h-[55px]">
					<Image className="cursor-pointer" src={Logo} alt="neko media" layout="responsive" />
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
