import { useTheme, ThemeProvider } from "./context";

//  this will done in app.jsx or main.jsx here for example we use it
function Parentcomponent() {
  return (
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}

function ContextComponent() {
  const context = useTheme();
  console.log(context);

  return (
    <>
      <h2>Context API</h2>
      <button
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
            return;
          }
          context.setTheme("dark");
        }}
      >
        Toggle Theme
      </button>
    </>
  );
}

export default Parentcomponent;
