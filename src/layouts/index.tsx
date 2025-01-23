import {FC, PropsWithChildren} from "react";
import Header from "../components/Header/index";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="size-full tracking-wide flex items-center justify-center flex-col gap-12">
            <Header />
            {children}
        </div>
    );
}

export default MainLayout;
