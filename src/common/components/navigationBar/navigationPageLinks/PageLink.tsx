import Link from 'next/link';

interface Props {
    page: string;
    current: boolean;
};

export function PageLink({ page, current, children }: React.PropsWithChildren<Props>) {
    return (
        <div className="flex flex-col justify-center h-full">
            <div className="py-2 m-auto">
                <Link href={`/${page.toLowerCase()}`} >
                    <p
                        className={
                            (current ? 'text-black ' : 'text-gray-600 ') +
                            'hover:bg-gray-50 hover:text-black font-semibold rounded-md text-sm px-3 py-2 m-auto flex items-center cursor-pointer select-none'
                        }
                    >
                        {page}
                        {children}
                    </p>
                </Link>
            </div>
            <span
                className={
                    'h-0.5 w-10/12 flex place-self-center rounded-full' +
                    (current && ' bg-blue-700')
                }
            ></span>
        </div>
    );
}