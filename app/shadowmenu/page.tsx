import SideMenu from "./components/SideMenu";


const ShadowMenuPage = () => {
    return (
        <div className="flex">
            <SideMenu />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Main Content Area</h1>
                <p>
                    This is the main content area. You can place your product listings or other
                    content here.
                </p>
            </div>
        </div>
    );
};

export default ShadowMenuPage;
