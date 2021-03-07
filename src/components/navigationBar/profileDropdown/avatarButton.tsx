import React from 'react';
import noCache from '../../../utils/noCache';

type Props = {
    onClick: () => void;
    ref?: React.RefObject<any>;
    src: string;
    sr?: string;
};

function AvatarButton({ src, ref, onClick, sr }: Props) {
    return (
        <div ref={ref} className="m1-3 relative">
            <div>
                <button
                    onClick={onClick}
                    className="focus:outline-none focus:ring focus:ring-offset-blue-700 focus:ring-blue-700 flex text-sm bg-gray-800 rounded-full outline-none"
                    id="user-menu"
                    aria-haspopup="true"
                >
                    <span className="sr-only">{sr}</span>
                    <img className="w-8 h-8 rounded-full" src={ noCache(src) } alt="" />
                </button>
            </div>
        </div>
    );
}

export default AvatarButton;
