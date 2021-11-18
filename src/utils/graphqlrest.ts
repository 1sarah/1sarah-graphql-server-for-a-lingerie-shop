import axios from "axios";
import express from "express";

const app = express();

export function preCheckout() {
    app.post('/precheckout', async (req: any, res: any) => {
      try {
        const { locale, apiKey, orderNumber, resultUrl, callbackUrl, checkoutLines } = req.body.data;
        console.log(checkoutLines);
        const { data } = await axios.post(process.env.REST_URL as string, {
          "data": {
            locale,
            apiKey,
            orderNumber,
            resultUrl,
            callbackUrl,
            checkoutLines
          }
        });
        return res.json(data);
      } catch (err) {
        console.error(err);
      }
    });
  }