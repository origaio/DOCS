import{_ as i,c as a,o as n,l as e,a as t}from"./chunks/framework.Z4G35HCh.js";const R=JSON.parse('{"title":"Rate Limiting","description":"","frontmatter":{"title":"Rate Limiting","slug":"rate-limiting"},"headers":[],"relativePath":"docs/rate-limiting.md","filePath":"docs/rate-limiting.md"}'),r={name:"docs/rate-limiting.md"},s=e("h1",{id:"rate-limiting",tabindex:"-1"},[t("Rate Limiting "),e("a",{class:"header-anchor",href:"#rate-limiting","aria-label":'Permalink to "Rate Limiting"'},"​")],-1),o=e("p",null,"To ensure fair usage and maintain optimal performance, the Origa API enforces rate limits on a per-client basis. The current rate limits are:",-1),l=e("ul",null,[e("li",null,"100 requests per minute"),e("li",null,"5000 requests per hour")],-1),c=e("p",null,[t("When a client exceeds the rate limit, the API will return a "),e("code",null,"429 Too Many Requests"),t(" response with a "),e("code",null,"Retry-After"),t(" header indicating the number of seconds to wait before making the next request.")],-1),d=[s,o,l,c];function m(u,h,_,p,g,f){return n(),a("div",null,d)}const b=i(r,[["render",m]]);export{R as __pageData,b as default};
