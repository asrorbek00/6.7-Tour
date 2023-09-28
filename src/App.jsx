import { useEffect, useState } from "react";


import { useFetch } from "./hooks/useFetch";

import Loaderi from "./components/Loader"
import Header from "./components/HEader";
import Tours from "./components/Tours";

function App() {
  const [url, setUrl] = useState("https://course-api.com/react-tours-project");
  const { data, isPending, error } = useFetch(url);
  const [tours, setTours] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTours(data);
  }, [data]);

  const deleteTour = (id) => {
    setTours((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const handleRefresh = () => {
    if (tours && tours.length === 0) {
      setTours(data);
    }
    setRefresh(false);
  };

  return (
    <main className="bg-[#f8fafc]">
      <section className="pt-32 text-center">
        {tours && tours.length === 0 ? null : <Header />}
        {tours && tours.length === 0 && (
          <div>
            <h1 className="text-5xl pb-[40px]">No Tours :)</h1>
            <button
              className="text-white bg-red-500 py-3 px-6 border-2 border-emerald-400 hover:text-emerald-400 hover:bg-white"
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
        )}

        {error && (
          <section class="page_404">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 ">
                  <div class="col-sm-10 col-sm-offset-1  text-center">
                    <div class="four_zero_four_bg">
                      <h1 class="text-center error-four">404</h1>
                    </div>
                    <div class="contant_box_404">
                      <h3 class="h2">Look like you're lost</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {isPending && 
        <Loaderi/>}
      </section>
      <section className="max-w-6xl mx-auto px-3 py-10 ">
        {tours && <Tours tours={tours} deleteTour={deleteTour} />}
      </section>
    </main>
  );
}

export default App;
