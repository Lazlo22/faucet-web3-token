import MainLayout from "./layouts/index";
import Title from "./components/Title/index";
import ReownProvider from "./components/ReownProvider/index";

import './App.css';

function App() {
    return (
        <ReownProvider>
            <MainLayout>
                <Title/>
                <div
                    className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                </div>
            </MainLayout>
        </ReownProvider>
    );
}

export default App;
