// Local presentation fixture. Serves curated real reports to the unchanged
// ground.news.fto frontend, without writing to its database.
import { createServer } from 'node:http';

const outlets = [
  { id: 1, slug: 'setn', name: '三立新聞網', domain: 'setn.com' },
  { id: 2, slug: 'knews', name: '知新聞', domain: 'knews.com.tw' },
  { id: 3, slug: 'pts', name: '公視新聞網', domain: 'news.pts.org.tw' },
];
const articles = [
  { id: 3, outlet: outlets[2], headline: '核三公投發表4／黃國昌指能源韌性不足 吳亞昕憂核廢料難處置', url: 'https://news.pts.org.tw/article/765392', publishedAt: '2025-08-13T13:16:00+08:00', summary: 'Huang argues that nuclear power would strengthen energy security. Wu questions the safety of restarting the plant and the feasibility of nuclear waste disposal.' },
  { id: 2, outlet: outlets[1], headline: '核三公投辯論4｜跳過反核少女吳亞昕！黃國昌批民進黨墮落　就問AI電從哪來', url: 'https://www.knews.com.tw/news/ADDE56799709D42B4383C04A2872F4ED', publishedAt: '2025-08-13T12:22:00+08:00', summary: 'Huang criticizes the ruling DPP’s energy policy and asks how Taiwan will meet electricity demand from AI. The headline emphasizes his attack on the government.' },
  { id: 1, outlet: outlets[0], headline: '黃國昌提過往反核立場！吳亞昕反問這1句', url: 'https://www.mirrormedia.mg/external/setn_1703296', publishedAt: '2025-08-13T11:34:00+08:00', summary: 'Huang explains his earlier opposition to nuclear power. Wu challenges him over nuclear waste. This is the SET report’s syndicated headline on Mirror Media.' },
].map(article => ({ ...article, imageUrl: '', headlineOnly: false, reprints: [] }));
const event = {
  id: 813,
  title: '核三重啟公投：黃國昌與吳亞昕交鋒',
  summary: 'Taiwan’s nuclear restart debate: energy security, safety and nuclear waste. Demo with three selected reports from August 13, 2025.',
  firstSeenAt: '2025-08-13T11:34:00+08:00', updatedAt: '2025-08-13T15:18:00+08:00',
  articleCount: 3, outletCount: 3, articles,
  timeline: [{
    articleId: 1, happenedOn: '2025-08-13', dateIsApproximate: false,
    development: 'At the fourth public forum, Huang supports restarting Maanshan Nuclear Power Plant. Wu opposes restarting and raises concerns about safety and nuclear waste.',
    reports: [...articles].reverse().map(a => ({ articleId: a.id, outlet: a.outlet, publishedAt: a.publishedAt })),
  }],
};
createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  const body = path === '/api/v1/events/813' ? event
    : path === '/api/v1/events' ? { events: [{ ...event, latestDevelopment: event.timeline[0].development, imageUrl: '' }], nextCursor: null }
    : path === '/api/v1/outlets' ? { outlets } : null;
  res.writeHead(body ? 200 : 404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body ?? { error: 'Not found' }));
}).listen(8138, '127.0.0.1', () => console.log('Presentation fixture: http://127.0.0.1:8138'));
