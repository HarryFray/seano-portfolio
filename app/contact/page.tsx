import peformRequest from "../global/datocms";
import ContactPage from "../components/contactPage";
import { SEAN_INFO_QUERY } from "../global/queries";

export interface seanInfo {
  workImage: {
    responsiveImage: {
      src: string;
    };
  };
}

const Contact = async () => {
  const { data } = await peformRequest({ query: SEAN_INFO_QUERY });

  const seanInfo: seanInfo = data.seanInfo;

  return <ContactPage seanInfo={seanInfo} />;
};

export default Contact;
