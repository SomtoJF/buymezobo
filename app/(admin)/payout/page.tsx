import PayoutEarningPage from '@/components/AdminComponents/PayoutEarningPage';

import React from 'react';

export default async function Page() {
	return (
		<main className="w-full h-full transition-all duration-300">
			<section className="h-full md:w-5/6 lg:w-3/5 mx-auto p-5 flex flex-col gap-4">
				<PayoutEarningPage />
			</section>
		</main>
	);
}
