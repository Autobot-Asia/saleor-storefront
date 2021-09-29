// import { useAuth } from "@saleor/sdk";
import React from "react";

// import { Loader } from "@components/atoms";
// import { orange } from "@styles/constants";
import ChatBox from "@temp/components/ChatBox";
// import { MainProductList } from "@temp/components/MainProductList";
import NavigationBar from "@temp/components/NavigationBar";

// import { channelSlug } from "@temp/constants";
// import FollowButton from "../../components/FollowButton";
// import { TypedHomePageQuery } from "../Home/queries";
// import AllProducts from "./AllProducts";
// import { CategorySection } from "./CategorySection";
// import Overview from "./Overview";
import {
  TypedListCarousel,
  // TypedListFollow,
  // TypedProductListQuery,
  // TypeStoreForUserQuery,
} from "./queries";
import StoreCarousel from "./StoreCarousel";
// import * as S from "./styles";

type Props = {
  storeId: string;
};

export type ListProductType = {
  id: string;
  name: string;
  imgUrl: string;
  tab: string[];
};
const Page: React.FC<Props> = ({ storeId }) => {
  // const [reRender, setRerender] = React.useState(false);

  // const { user } = useAuth();
  const ListNav = [
    {
      title: "Home",
    },
    {
      title: "Products",
      category: [
        {
          title: "category 11111 111111 111111",
          category: [
            {
              title: "category ",
            },
            {
              title: "category 1",
            },
            {
              title: "category 1",
            },
          ],
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
          category: [
            {
              title: "category ",
            },
            {
              title: "category 1",
            },
            {
              title: "category 1",
            },
          ],
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
      ],
    },
    {
      title: "Profile",
      category: [
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
        {
          title: "category 1",
        },
      ],
    },
    {
      title: "Contacts",
    },
    {
      title: "Video",
    },
    {
      title: "Promotion",
    },
    {
      title: "Feeds",
    },
  ];

  return (
    <>
      <TypedListCarousel>
        {_data => {
          // TODO : mock list carousel

          return (
            <>
              <NavigationBar listNav={ListNav} />
              <StoreCarousel />
              {/* <AllProducts /> */}
              {/* <Overview /> */}
              {/* {user ? (
                <S.Wrapper>
                  <TypeStoreForUserQuery variables={{ id: storeId }}>
                    {({ data }) => {
                      return (
                        <S.StoreName color={orange}>
                          {data.store && data.store.name}
                        </S.StoreName>
                      );
                    }}
                  </TypeStoreForUserQuery>

                  <TypedListFollow>
                    {({ data, refetch }) => {
                      if (reRender) {
                        refetch();
                        setRerender(false);
                      }
                      const listData =
                        data.socials.edges.find(
                          item => item?.node?.store?.id === storeId
                        ) || null;

                      return (
                        <FollowButton
                          isActive={(listData && listData.node.follow) || false}
                          storeId={storeId}
                          setRerender={setRerender}
                        />
                      );
                    }}
                  </TypedListFollow>
                </S.Wrapper>
              ) : (
                <S.Wrapper>
                  <TypeStoreForUserQuery variables={{ id: storeId }}>
                    {({ data }) => {
                      return (
                        <S.StoreName color={orange}>
                          {data.store && data.store.name}
                        </S.StoreName>
                      );
                    }}
                  </TypeStoreForUserQuery>
                  <FollowButton
                    isActive={false}
                    storeId={storeId}
                    setRerender={setRerender}
                  />
                </S.Wrapper>
              )}

              <TypedProductListQuery
                alwaysRender
                displayLoader={false}
                errorPolicy="all"
                variables={{ first: 8, channel: channelSlug }}
              >
                {({ data }) => {
                  const listMainProduct: ListProductType[] =
                    data?.products?.edges?.map(item => ({
                      id: item.node.id,
                      imgUrl:
                        item.node?.thumbnail?.url ||
                        "https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png",
                      name: item.node.name,
                      tab: [item.node.productType.name],
                    })) || [];
                  return (
                    <>
                      <MainProductList
                        title="Verify Main Product"
                        listProduct={listMainProduct}
                      />
                    </>
                  );
                }}
              </TypedProductListQuery>
              <TypedHomePageQuery variables={{ channel: channelSlug }}>
                {({ data }) => {
                  const categoryInfo = data.categories.edges.map(item => ({
                    categoryId: item.node.id,
                    categoryName: item.node.name,
                  }));
                  if (
                    !data.categories.edges ||
                    data.categories.edges.length === 0
                  ) {
                    return <Loader />;
                  }

                  return <CategorySection categoryInfo={categoryInfo} />;
                }}
              </TypedHomePageQuery> */}
            </>
          );
        }}
      </TypedListCarousel>

      <ChatBox />
    </>
  );
};

export default Page;
