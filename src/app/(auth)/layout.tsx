export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='m-20 flex justify-between gap-5'>
            <div className='grow bg-[#020F1F]'>
                <h2 className="text-zinc-100">Seja bem-vindo(a)!</h2>
            </div>
            <div className='grow'>{children}</div>
        </div>
    );
}
