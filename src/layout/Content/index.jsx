import { Route , Routes } from "react-router";
import UsersPage from "../../pages/Users";
import PostsPage from "../../pages/Posts";
import CommentsPage from "../../pages/Comments";
import TasksPage from "../../pages/Tasks";
import GalleryPage from "../../pages/Gallery";

const Content = () => {
    return (
        <div className=" bg-green-200 fixed top-0 left-0 h-screen w-full pr-64 pt-16">
            <div className="p-4 h-full w-full">
                <Routes>
                    <Route path="/users" element={<UsersPage/>} />
                    <Route path="/posts" element={<PostsPage/>} />
                    <Route path="/comments" element={<CommentsPage/>} />
                    <Route path="/tasks" element={<TasksPage/>} />
                    <Route path="/gallery" element={<GalleryPage/>} />
                </Routes>
            </div>
        </div>
    );
};

export default Content;