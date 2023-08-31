import { UserProvider } from "./providers/userContext/userContext";
import { AppRouter } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
    return (
        <>
            <GlobalStyles />
            <UserProvider>
                <AppRouter />
            </UserProvider>
        </>
    );
}

export default App;
