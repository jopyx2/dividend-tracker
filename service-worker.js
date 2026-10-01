// 최소 서비스워커: 설치 가능(installable) PWA 조건 충족용.
// 오프라인 캐싱은 하지 않음 — 대시보드가 매일 자동으로 갱신되므로
// 캐시를 썼다가는 폰에서 옛날 데이터를 계속 보게 될 수 있음.
// 그래서 fetch 이벤트는 그냥 네트워크로 그대로 흘려보내기만 한다.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
