const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" w-full overflow-y-scroll container pb-[100px] lg:pb-0">
      {children}
    </main>
  );
};

export default MainContainer;
