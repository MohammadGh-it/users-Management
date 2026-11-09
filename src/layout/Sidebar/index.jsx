import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <div className="bg-blue-200 shadow-lg fixed right-0 h-screen w-64 flex flex-col justify-between ">
            {/* top coontent */}
            <div className=" justify-between h-16 p-2  flex items-center bg-blue-300 ">
                <div>
                    <h1 className="text-black">پنل مدیریت </h1>
                </div>
                <div>
                    <h1 className="text-black">darkmode</h1>
                </div>
            </div>
            {/* buttom coontent */}
            <div className="flex flex-col gap-4 flex-1 p-4 bg-blue-200 rounded-b-lg ">
                <ul className="text-black">
                    <SidebarItem to="/users">کاربران</SidebarItem>
                    <SidebarItem to="/posts">پست ها</SidebarItem>
                    <SidebarItem to="/comments">کامنت ها</SidebarItem>
                    <SidebarItem to="/tasks">تسک ها</SidebarItem>
                    <SidebarItem to="/gallery">گالری</SidebarItem>
                </ul>
            </div>    
        </div>
    );
};

export default Sidebar;