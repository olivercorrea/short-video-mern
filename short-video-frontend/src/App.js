import "./App.css";
import Video from "./components/Video";

// Función principal de la aplicación
function App() {
  return (
    <div className="app">
      {/* // Renderizamos el componente Header */}
      <h>short video frontend :)</h>
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

// Exportamos la función App como componente predeterminado
export default App;
