import { ScrollArea } from '@/components/ui/scroll-area';
import { PlayIcon, VideoIcon } from '@radix-ui/react-icons';
import IconButton from '../IconButton';
import useMovie from '@/hooks/useMovie';

const Discover = () => {
    return (
        <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
            <div className="space-y-1">
                <IconButton Icon={PlayIcon} title="Watch Now"></IconButton>
            </div>
        </div>
    );
};

const Favorite = () => {
    return (
        <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Favorite</h2>
            <div className="space-y-1">
                <IconButton Icon={VideoIcon} title="Movies"></IconButton>
            </div>
        </div>
    );
};

const Trending = () => {
    const { movies } = useMovie();
    return (
        <div className="py-2">
            <h2 className="relative px-7 text-lg font-semibold tracking-tight">Trending</h2>
            <ScrollArea className="h-[300px] px-1">
                <div className="space-y-1 p-2">
                    {movies?.map((movie, i) => (
                        <IconButton
                            key={`${movie}-${i}`}
                            Icon={VideoIcon}
                            title={movie.title}
                        ></IconButton>
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
