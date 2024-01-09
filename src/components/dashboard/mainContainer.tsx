const MainContainer = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) => {
  return (
    <main
      className={` overflow-y-scroll overflow-x-visible pt-4 px-4 pb-[100px] lg:pb-0 ${classes}`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
