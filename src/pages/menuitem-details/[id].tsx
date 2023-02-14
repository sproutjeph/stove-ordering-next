import { GetStaticPaths, GetStaticProps } from "next";
import { MenuItemDetails } from "@/components";

type IProps = {
  id: string;
};

const MenuDetailsPage = ({ id }: IProps) => {
  return <MenuItemDetails id={id} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  return {
    props: {
      id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default MenuDetailsPage;
