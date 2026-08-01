import ViewToggle from "./ViewToggle";

type HeaderProps = {
    searchParams: Record<string, string | string[] | undefined>;
};

const Header = ({ searchParams }: HeaderProps) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                    Explore <span className="text-primary">Innovation</span>
                </h1>
            </div>
            <div className="flex items-center gap-3">
                <ViewToggle searchParams={searchParams} />
            </div>
        </div>
    );
};

export default Header;
