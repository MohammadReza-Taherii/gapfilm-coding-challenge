import * as Service from "../services/serviceConfig";
import useSWR from "swr";

const fetcher = (url) => Service.get(url, (data) => data.result[0].list[0]);

const FirstList = () => {
  const typeId = 0;
  const { data, error } = useSWR(`FirstPage?type=${typeId}`, fetcher);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-96 relative">
      <div className="w-full absolute bottom-0 font-sans text-center p-5 z-10">
        <div className="text-white font-bold text-5xl mb-4">
          {data.SourceSiteTitle}
        </div>
        <span className="text-red">{data.Summary}</span>
      </div>
      <div className="w-full h-full after:bg-gradient-to-t after:from-black after:flex after:w-full after:h-full after:absolute after:bottom-0">
        <img src={data.ThumbImage} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default FirstList;
