import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />{" "}
      </section>
      <section className=" hidden xl:inline-grid h-40   ">
        <MiniProfile />
        <Suggestions />
      </section>
    </div>
  );
};

export default Feed;
