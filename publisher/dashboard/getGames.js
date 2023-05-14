import Link from "next/link";
import MyLayout from "@/pages/component/layout";
import axios from "axios";
import { useRouter } from "next/router";
import SessionCheck from "../../component/sessioncheck";
import PublisherDrawer from "../../component/publisherdrawer";
import Footer from "../../../pages/component/footer";
export default function GetGames({ games }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <MyLayout title="Get Users" />
      <AdminDrawer />
      <div class="p-24 sm:ml-64">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          All Users
        </h1>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <Link href={"/publisher/dashboard/games/" + item.id}>
                <div className="font-bold text-blue-400 bg-gray-200 px-16 m-10">
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://nestjsproject-production-364f.up.railway.app/admin/index"
  );
  const data = await response.data;

  return { props: { data } };
}
