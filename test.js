import http from "k6/http";

export let options = {
    thresholds: {
      "http_req_duration": ["p(95)<90"],
      "http_req_failed": ["rate<0.01"],
      "iteration_duration": ["p(95)<80"],
    },
    stages: [
        { duration: '15s', target: 50 },
        { duration: '30s', target: 50 },
        { duration: '15s', target: 0 },
      ],
};

export default function() {
    http.get('http://159.223.29.170/8080')
  };
