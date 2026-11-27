// 라이브 묻기를 홈 화면 앱으로 설치할 수 있게 해 주는 최소한의 파일입니다.
// 아무것도 저장하지 않고, 모든 요청을 그대로 인터넷으로 보냅니다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
