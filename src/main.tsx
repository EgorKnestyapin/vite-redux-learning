import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Provider - компонент, который оборачивает все приложение 
  // и принимает в качестве пропсы заранее созданный store
  // соответственно все компоненты в приложении могут иметь доступ к глобальному стору
  // следовательно все компоненты имею возможность запрашивать изменения в сторе(диспатчить action)
  // и имеют доступ к изменениям, которые произошли
  <Provider store={store}>
    <App />
  </Provider>
);
