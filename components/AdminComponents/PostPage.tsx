import { getCreatorPosts } from '@/actions/posts';
import { Post } from '@prisma/client';
import { User } from 'lucia';
import React, { HTMLAttributes, useEffect, useState, useRef } from 'react';
import { cn } from '@/utility/style';
import { Button } from '../ui/button';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Props extends HTMLAttributes<HTMLDivElement> {
	creator: User | null;
	link?: string;
}

export default function PostPage({ link, creator, className }: Props) {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);
	const [embla] = useEmblaCarousel({ loop: true }); // Initialize Embla Carousel
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	const sliderContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const posts = await getCreatorPosts(creator!.id);
			setPosts(posts);
			setLoading(false);
		};
		if (creator) {
			fetchPosts();
		}
	}, [creator?.id, creator]);

	const reroute = () => {};

	return (
		<div
			onClick={reroute}
			className={cn(
				`transition-all h-fit bg-white p-2 md:p-1 w-full rounded-md flex flex-col gap-3 items-start lg:max-h-72`,
				className,
			)}
		>
			<div ref={emblaRef} className="embla rounded-md">
				<div className="embla__container" ref={sliderContainerRef}>
					{posts.map((post) => (
						<div key={post.id} className="embla__slide">
							<img
								src={post.imageUrl}
								alt={post.title}
								className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
							/>
						</div>
					))}
				</div>
			</div>
			<Button className="w-full hidden" variant={'secondary'}>
				<Link href="/gallery" className="w-full h-full">
					See all posts
				</Link>
			</Button>
		</div>
	);
}
