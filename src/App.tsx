import authStore from "@/stores/authStore";

const App = () => {
  const auth = authStore();

  if (auth.loading) return <></>;
  return (
    <>
    </>
  );
};
export default App;
