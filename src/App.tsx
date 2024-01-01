import authStore from "@/stores/authStore";
import Default from "@/components/templates/Default";
import Dashboard from "@/components/pages/Dashboard";
import SignIn from "@/components/pages/SingIn";

const App = () => {
  const auth = authStore();

  if (auth.loading) return <></>;
  return <Default>{auth.user ? <Dashboard /> : <SignIn />}</Default>;
};
export default App;
