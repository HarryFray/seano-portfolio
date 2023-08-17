"use client";
import ContactPage from "../components/contactPage";
import { SEAN_INFO_QUERY } from "../global/queries";
import { useQuerySubscription } from "react-datocms";

export interface seanInfo {
  workImage: {
    responsiveImage: {
      src: string;
    };
  };
}

const Contact = () => {
  const { status, data } = useQuerySubscription({
    enabled: true,
    query: SEAN_INFO_QUERY,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  });

  if (status === "connecting" || !data) {
    return null;
  }

  const seanInfo: seanInfo = data.seanInfo;

  return <ContactPage seanInfo={seanInfo} />;
};

export default Contact;
