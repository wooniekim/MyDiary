import { NavLink } from "react-router-dom";

const MainScreen = () => {
  return (
    <>
      <section className="bg-white min-w-screen h-screen">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            一日
          </h1>
          <div>
            <h1>positive : 80%</h1>
            <h1>negative : 20%</h1>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-4 md:mt-4 md:grid-cols-2 border">
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  다른 사람의 일기 보기
                </a>

                <span className="text-sm text-gray-500">
                  On: 20 October 2019
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  일기 목록
                </a>

                <span className="text-sm text-gray-500">
                  On: 20 October 2019
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <NavLink
                  to={"/board_write"}
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  오늘의 일기 쓰기
                </NavLink>

                <span className="text-sm text-gray-500">
                  On: 20 October 2019
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  마이페이지
                </a>

                <span className="text-sm text-gray-500">
                  On: 20 October 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainScreen;
