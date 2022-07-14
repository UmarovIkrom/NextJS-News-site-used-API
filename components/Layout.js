import { Toolbar } from "./Toolbar";

export const Layout = ({children}) => {
    return (
        <div>
            <Toolbar/>
            {children}
        </div>
    )
}

export default Layout;
