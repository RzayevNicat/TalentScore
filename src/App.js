import './styles/reset.css';
import './styles/global.css';
import Header from './components/Header';
import TehsilSections from './components/TehsilSections';
import { ToastContainer } from 'react-toastify';
import { QuickProvider } from './context/dataContext';
function App() {
	return (
		<div>
			<QuickProvider>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<Header />
				<TehsilSections />
			</QuickProvider>
		</div>
	);
}

export default App;
