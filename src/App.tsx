import { Route, Routes } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<AppWrapper>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</AppWrapper>
	);
}

export default App;
