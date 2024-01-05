const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-[calc(100vh-90px)] lg:pr-12 w-full pt-5 lg:pl-80 px-2 lg:px-10 lg:pt-24 pb-[100px] lg:pb-0">
      {children}
    </main>
  );
};

export default MainContainer;
