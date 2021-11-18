import axios from "axios";
import { SrvRecord } from "dns";

export async function doubleEntry (orderId: string, issuerId: string | null) {

    //pubsub.publish(orderNumber, { checkoutEvent: {status:true,time:new Date()} });
    //const findcheckoutDetail = GpgbackendCheckoutDetails.findOne({orderNumber});
    const { data } = await axios.post(process.env.DOUBLE_ENTRY_URL as string, {
       orderId,issuerId
    });
    return data;
  }