import http from "k6/http";
 
export let options = {
   thresholds: {
     "http_req_duration": ["p(95)<1000"],
     "http_req_failed": ["rate<0.01"]
    },
   stages: [
       { duration: '15s', target: 50 },
       { duration: '30s', target: 50 },
       { duration: '15s', target: 0 },
     ],
};
 
export default function() {
   http.get('{YOUR_STAGING_ENV_URL}')
 };