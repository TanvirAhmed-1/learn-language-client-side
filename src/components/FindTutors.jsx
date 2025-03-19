
import { useLoaderData } from "react-router-dom";
import Tutorials from "./Tutorials";

const FindTutors = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
            <h1 className="lg:text-3xl text-xl py-20 text-center font-semibold dark:text-white ">Choose Your Favorite Tutors and Start Learning Today!</h1>
      <div className="lg:w-8/12 mx-auto space-y-0">
        {data.map((value,index) => (
          <Tutorials key={index} tutorials={value}></Tutorials>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
