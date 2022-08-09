import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IUser } from '../types';
import { GoVerified } from 'react-icons/go';

const UserCard = ({ user }: { user: IUser }) => {
	return (
		<Link href={`/profile/${user._id}`} key={user._id}>
			<div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
				<div className="w-8 h-8">
					<Image
						src={user.image}
						width={34}
						height={34}
						className="rounded-full"
						alt="user profile"
						layout="responsive"
					/>
				</div>
				<div className="hidden xl:block">
					<p className="flex gap-1 items-center text-md font-bold text-primary lowercase">
						{user.userName.replaceAll(' ', '')}
						<GoVerified className="text-blue-400" />
					</p>
					<p className="capitalize text-gray-400 text-xs">{user.userName}</p>
				</div>
			</div>
		</Link>
	);
};

export default UserCard;
