import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { EyeOpenIcon, PlayIcon } from '@radix-ui/react-icons';
import IconButton from '../IconButton';

const movies = [
    'Recently Added',
    'Recently Played',
    'Top Songs',
    'Top Albums',
    'Top Artists',
    'Logic Discography',
    'Bedtime Beats',
    'Feeling Happy',
    'I miss Y2K Pop',
    'Runtober',
    'Mellow Days',
    'Eminem Essentials'
];

const Discover = () => {
    return (
        <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
            <div className="space-y-1">
                <IconButton Icon={PlayIcon} title="Watch Now"></IconButton>
                <Button variant="ghost" className="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                    >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                    Browse
                </Button>
            </div>
        </div>
    );
};

const Favorite = () => {
    return (
        <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Favorite</h2>
            <div className="space-y-1">
                <IconButton Icon={EyeOpenIcon} title="Trending"></IconButton>
                <Button variant="ghost" className="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                    >
                        <circle cx="8" cy="18" r="4" />
                        <path d="M12 18V2l7 4" />
                    </svg>
                    Movies
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Made for You
                </Button>
            </div>
        </div>
    );
};

const Trending = () => {
    return (
        <div className="py-2">
            <h2 className="relative px-7 text-lg font-semibold tracking-tight">Trending</h2>
            <ScrollArea className="h-[300px] px-1">
                <div className="space-y-1 p-2">
                    {movies?.map((movie, i) => (
                        <Button
                            key={`${movie}-${i}`}
                            variant="ghost"
                            className="w-full justify-start font-normal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >
                                <path d="M21 15V6" />
                                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                <path d="M12 12H3" />
                                <path d="M16 6H3" />
                                <path d="M12 18H3" />
                            </svg>
                            {movie}
                        </Button>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

const SideBar = () => {
    return (
        <div className="pb-12">
            <div className="space-y-4 py-4">
                <Discover />
                <Favorite />
                <Trending />
            </div>
        </div>
    );
};

export default SideBar;
