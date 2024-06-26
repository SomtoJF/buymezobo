'use client';
import Sidebar from '@/components/Navigation/Sidebar';
import AdminHeader from '@/components/Headers/AdminHeader';
import { Toaster } from '@/components/ui/toaster';
import AdminProvider from '@/providers/AdminProvider';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<AdminProvider>
			<section className="max-h-screen bg-black flex">
				<Sidebar />
				<main className="flex-1 min-h-dvh bg-zinc-100 flex flex-col">
					<AdminHeader />
					<section className="flex-1 max-h-screen overflow-y-scroll scrollbar-hide">{children}</section>
				</main>
				<Toaster />
			</section>
		</AdminProvider>
	);
}
