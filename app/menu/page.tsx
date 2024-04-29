import NestedMenu from "./components/NestedMenuWithRecursive";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <NestedMenu />
    </div>
  );
};

export default page;
