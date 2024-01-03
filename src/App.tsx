import useAuthStore from "@/stores/authStore";
import Default from "@/components/templates/Default";
import Dashboard from "@/components/pages/Dashboard";
import SignIn from "@/components/pages/SingIn";

const App = () => {
  const { user, loading } = useAuthStore();

  if (loading) return <></>;
  return <Default>{user ? <Dashboard /> : <SignIn />}</Default>;
};
export default App;
