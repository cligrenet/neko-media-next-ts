import React from 'react';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
	<div className={mt ? `flex flex-wrap gap-2 mt-5` : `flex flex-wrap gap-2`}>
		{items.map((item) => (
			<p className="cursor-pointer text-gray-400 text-sm hover:underline" key={item}>
				{item}
			</p>
		))}
	</div>
);

const Footer = () => {
	return (
		<div className="mt-6 hidden xl:block">
			<List items={footerList1} mt={false} />
			<List items={footerList2} mt />
			<List items={footerList3} mt />
			<p className="text-gray-400 text-sm mt-5">2022 &copy;Neko Media</p>
		</div>
	);
};

export default Footer;
