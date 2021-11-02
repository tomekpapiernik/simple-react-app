// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group("page_1 - http://159.223.29.170/8080", function () {
    response = http.get("http://159.223.29.170/8080", {
      headers: {
        Host: "159.223.29.170",
        Connection: "keep-alive",
        "Cache-Control": "max-age=0",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "pl-PL,pl;q=0.9",
        "If-None-Match": 'W/"845-17c9359a1c3"',
        "If-Modified-Since": "Mon, 18 Oct 2021 12:21:37 GMT",
      },
    });
    response = http.get(
      "http://159.223.29.170/static/css/main.be880f39.chunk.css",
      {
        headers: {
          Host: "159.223.29.170",
          Connection: "keep-alive",
          "If-Modified-Since": "Mon, 18 Oct 2021 12:21:38 GMT",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
          "If-None-Match": 'W/"4a7-17c9359a6cb"',
          Accept: "text/css,*/*;q=0.1",
          Referer: "http://159.223.29.170/8080",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "pl-PL,pl;q=0.9",
        },
      }
    );
    response = http.get("http://159.223.29.170/static/js/2.8be621da.chunk.js", {
      headers: {
        Host: "159.223.29.170",
        Connection: "keep-alive",
        "If-Modified-Since": "Mon, 18 Oct 2021 12:21:39 GMT",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        "If-None-Match": 'W/"20974-17c9359a8a7"',
        Accept: "*/*",
        Referer: "http://159.223.29.170/8080",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "pl-PL,pl;q=0.9",
      },
    });
    response = http.get(
      "http://159.223.29.170/static/js/main.d46062cf.chunk.js",
      {
        headers: {
          Host: "159.223.29.170",
          Connection: "keep-alive",
          "If-Modified-Since": "Mon, 18 Oct 2021 12:21:39 GMT",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
          "If-None-Match": 'W/"49d-17c9359ab17"',
          Accept: "*/*",
          Referer: "http://159.223.29.170/8080",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "pl-PL,pl;q=0.9",
        },
      }
    );
    response = http.get("http://159.223.29.170/favicon.ico", {
      headers: {
        Host: "159.223.29.170",
        Connection: "keep-alive",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        Referer: "http://159.223.29.170/8080",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "pl-PL,pl;q=0.9",
        "If-None-Match": 'W/"f1e-17c9359a307"',
        "If-Modified-Since": "Mon, 18 Oct 2021 12:21:37 GMT",
      },
    });
    response = http.get("ws://159.223.29.170/8080/ws", {
      headers: {
        Pragma: "no-cache",
        Origin: "http://159.223.29.170",
        "Accept-Encoding": "gzip, deflate",
        Host: "159.223.29.170",
        "Accept-Language": "pl-PL,pl;q=0.9",
        "Sec-WebSocket-Key": "bejY/oJ8F8lVZm8XCwM/VA==",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        Upgrade: "websocket",
        "Sec-WebSocket-Extensions":
          "permessage-deflate; client_max_window_bits",
        "Cache-Control": "no-cache",
        Connection: "Upgrade",
        "Sec-WebSocket-Version": "13",
      },
    });
  });

  // Automatically added sleep
  sleep(1);
}
