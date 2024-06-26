'use client';

import { signOut } from '@/actions/signout';
import { toast } from '@/components/ui/use-toast';
import { useUser } from '@/store/UserDataStore';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

export default function Page() {
	const { logOut } = useUser();
	useEffect(() => {
		logOut();
		signOut().catch((error) => {
			toast({
				title: 'Error logging out',
				description: error.message,
			});
		});
	}, []);

	return (
		<main className="  w-full h-full flex flex-col gap-3 justify-center items-center text-red-500">
			<LoadingOutlined />
			<p>Logging you out...</p>
		</main>
	);
}
