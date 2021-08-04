import * as React from "react";
import { FormattedMessage } from "react-intl";

import {
  Tabs,
  TabTitle,
} from "@components/molecules/ProductDescription/styles";

import StoreCoverAddress from "../../images/store_contact_address.svg";
import StoreContactCompany from "../../images/store_contact_companyName.svg";
import StoreContactEmail from "../../images/store_contact_email.svg";
import StoreContactPhoneNumber from "../../images/store_contact_phoneNumber.svg";
import StoreAvatar from "../../images/store-avatar.png";
import StoreCoverImage from "../../images/store-cover-image.png";
import AllProducts from "./AllProducts";
import Overview from "./Overview";
import { WrapperContent } from "./styles";

import "./scss/index.scss";

enum TABS {
  DESCRIPTION = "DESCRIPTION",
  ATTRIBUTES = "ATTRIBUTES",
  REVIEW = "REVIEW",
}

const StoreCarousel: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TABS>(TABS.DESCRIPTION);
  return (
    <div>
      <div className="store_profile">
        <div className="store_profile_top">
          <div className="store_avatar">
            <div className="img_background">
              <img
                src={StoreCoverImage}
                alt="background"
                className="store_cover"
              />
              <img
                src={StoreAvatar}
                alt="avatar"
                className="store_profile_avatar"
              />
            </div>
            <div className="store_avatar_button">
              <div className="btn_follow">
                <button>Theo dõi</button>
              </div>
              <div className="btn_chat">
                <button>Chat ngay</button>
              </div>
            </div>
            <div className="store_name">
              <span>Anh Nông Dân Vui Vẻ</span>
            </div>
          </div>
          <div className="store_info">
            <div className="store_info_title">
              <span>Thông tin shop</span>
            </div>
            <div className="store_info_description">
              <p>
                Anh nông dân là một cơ sở phân phối các sản phẩm nông sản tươi
                ngon và đảm bảo an toàn vệ sinh thực phẩm với các sản phẩm được
                thu hoạch tại khu vườn tọa lạc trong khuôn viên Học viện Nông
                nghiệp Việt Nam ở xã Trâu Quỳ, huyện Gia Lâm, thành phố Hà Nội.
              </p>
              <p>
                Tất cả các loại nông sản đều được trong theo phương pháp tốt
                nhất, hạn chế sử dụng thuốc trừ sâu và được đóng gói cẩn thận
                nhất.
              </p>
              <p>Liên hệ ngay để nhận được sự hỗ trợ nhiệt tình nhất!</p>
            </div>
          </div>
          <div className="store_contact">
            <div className="store_contact_companyName store_contact_text">
              <img
                src={StoreContactCompany}
                alt="Company"
                className="store_contact_icon"
              />
              <span>Công ty TNHH Happy Farmer</span>
            </div>
            <div className="store_contact_email store_contact_text">
              <img
                src={StoreContactEmail}
                alt="Email"
                className="store_contact_icon"
              />
              <span>HappyFarmer@gmail.com</span>
            </div>
            <div className="store_contact_phoneNumber store_contact_text">
              <img
                src={StoreContactPhoneNumber}
                alt="Phone"
                className="store_contact_icon"
              />
              <span>0962.426.624</span>
            </div>
            <div className="store_contact_address store_contact_text">
              <div style={{ display: "flex" }}>
                <img
                  src={StoreCoverAddress}
                  alt="Address"
                  className="store_contact_icon"
                />
                <span>
                  Học viện Nông nghiệp Việt Nam ở xã Trâu Quỳ,
                  <br /> huyện Gia Lâm, thành phố Hà Nội.
                </span>
              </div>
              <div className="store_contact_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.69016931047!2d105.9295756147629!3d21.005053286011226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a94c1f882977%3A0x6d016e6656923f46!2zSOG7jWMgdmnhu4duIE7DtG5nIG5naGnhu4dwIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1627902234969!5m2!1svi!2s"
                  width="320"
                  height="130"
                  style={{ border: "0" }}
                  loading="lazy"
                  title="HVNN"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="store_profile_bottom">
          <Tabs>
            <TabTitle
              active={activeTab === TABS.DESCRIPTION}
              onClick={evt => {
                evt.stopPropagation();
                setActiveTab(TABS.DESCRIPTION);
              }}
            >
              <FormattedMessage defaultMessage="Tổng quát" />
            </TabTitle>
            <TabTitle
              active={activeTab === TABS.ATTRIBUTES}
              onClick={evt => {
                evt.stopPropagation();
                setActiveTab(TABS.ATTRIBUTES);
              }}
            >
              <FormattedMessage defaultMessage="Tất cả sản phẩm" />
            </TabTitle>
          </Tabs>
        </div>
      </div>
      <WrapperContent hidden={activeTab !== TABS.ATTRIBUTES}>
        <AllProducts />
      </WrapperContent>
      <WrapperContent hidden={activeTab !== TABS.DESCRIPTION}>
        <Overview />
      </WrapperContent>
    </div>
  );
};

export default StoreCarousel;
