import MyLayout from "@/pages/component/layout";
import axios from "axios";
import { useRouter } from "next/router";
import UserLayout from "@/pages/component/userlayout";
import SessionCheck from "../../../component/sessioncheck";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <SessionCheck />
      <MyLayout title={data.id} />
      <PublisherDrawer />

      <UserLayout
        filename={data.filename}
        name={data.name}
        email={data.email}
        address={data.address}
      />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get("http://localhost:3000/publisher/id" + id);
  const data = await response.data;

  return { props: { data } };
}
