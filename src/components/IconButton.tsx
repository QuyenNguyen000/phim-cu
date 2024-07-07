import { IconProps } from '@radix-ui/react-icons/dist/types';
import { Button } from './ui/button';

type IconButtonProps = {
    Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    title: string;
};

const IconButton = ({ Icon, title }: IconButtonProps) => {
    return (
        <Button variant="ghost" className="w-full justify-start">
            <Icon className="mr-2 h-4 w-4" />
            {title}
        </Button>
    );
};

export default IconButton;
