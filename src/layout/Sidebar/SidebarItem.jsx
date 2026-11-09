import { NavLink } from "react-router";

const SidebarItem = ({to , children})=>{
    return(
        <li>
            <NavLink
                to={to} 
                className={({isActive})=>
                    `hover:bg-blue-100 p-2 block rounded w-full h-full  ${
                        isActive ? "bg-blue-300" : "" }`
                }
            >
                {children}    
            </NavLink>
        </li>
    );
};

export default SidebarItem;

