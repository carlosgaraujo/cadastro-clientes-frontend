import { AuthProvider } from "./providers/AuthProvider";
import { AppRouter } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    );
}

export default App;
