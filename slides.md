---
# Local Google-inspired presentation theme
theme: ./theme
title: What the F
info: |
  Ground.news for Taiwan and possibly more Asian countries
class: text-center
drawings:
  persist: false
comark: true
layout: intro
---



<AnimatedTitle />


---
layout: disclaimer
---

# Disclaimer

These news stories are examples I found online, without researching each issue in depth.

**They do not represent my political views.**

The selection and sequence may be dramatized to illustrate problems in Taiwan’s news coverage. Please do not treat this as a serious analysis of the issues.

---
layout: statement
---

# Taiwan’s media is a <span style="color: var(--google-red)">MESS</span>


---
layout: default
---
# A breakfast order becomes news

<div class="breakfast-example">
  <img src="/images/ebc-article.png" alt="Actual EBC News article page showing the Chinese headline and toast photograph" />
  <div>
    <h2>EBC News</h2>
    <p class="translation-label">English translation</p>
    <p class="translated-headline">“Strawberry-and-egg toast for breakfast! A puzzled server, and internet users share off-menu combinations.”</p>
  </div>
  <QrCode url="https://news.ebc.net.tw/news/living/162524" label="Original article" />
</div>

<!--
SPEAKER NOTES — ENGLISH (read aloud)
Let me start with something simple.
Someone ordered strawberry jam and egg on toast.
The server was surprised. People shared their favorite combinations online.
And this became a news story.
My question is simple: what did we learn from this?
[Pause for a moment.]
Source: https://news.ebc.net.tw/news/living/162524
Example of reaction-driven coverage, not evidence of political bias.
-->

---
layout: default
---
# Another outlet, more toast

<div class="breakfast-example">
  <img src="/images/tvbs-article.png" alt="Actual TVBS News article page showing the Chinese headline and toast photograph" />
  <div>
    <h2>TVBS News</h2>
    <p class="translation-label">Shortened English translation</p>
    <p class="translated-headline">“Is strawberry toast with egg gross? Food lovers share even wilder combinations.”</p>
  </div>
  <QrCode url="https://news.tvbs.com.tw/life/1311826" label="Original article" />
</div>

<!--
Source: https://news.tvbs.com.tw/life/1311826
These articles appeared on different dates; this is repetition of a topic, not a claim that they cover the same incident.
-->

---
layout: default
---
# One forum, three headlines

<p class="context-date">August 13, 2025 · Taiwan’s nuclear restart debate</p>

<div class="forum-content">
<div>

Taiwan was preparing to vote on restarting its third nuclear power plant, **subject to a safety review**.

<div class="forum-positions">
  <div><h2>Huang Kuo-chang</h2><p>黃國昌</p><strong>Argued for restarting it</strong></div>
  <div><h2>Wu Ya-hsin</h2><p>吳亞昕</p><strong>Argued against restarting it</strong></div>
</div>

The next three reports cover **this same public forum**.

</div>
<div class="context-sources">
  <QrCode url="https://www.cna.com.tw/news/aipl/202508135003.aspx" label="CNA · Full event" :size="136" />
  <QrCode url="https://news.pts.org.tw/article/765392" label="PTS · Coverage" :size="136" />
</div>
</div>

<!--
The forum was on August 13, before the August 23 referendum. This slide describes the proposed restart, not the referendum result.
Sources: https://www.cna.com.tw/news/aipl/202508135003.aspx and https://news.pts.org.tw/article/765392
-->

---
layout: default
---

<ArticleCard
  outlet="SET News · via Mirror Media"
  date="August 13, 2025 · 11:34"
  headline="黃國昌提過往反核立場！吳亞昕反問這1句"
  translation="Huang discusses his past anti-nuclear position. Wu challenges him with this question."
  label="Syndicated edition / 轉載版標題 · English translation below"
  focus="His change of position"
  detail="The headline highlights Wu’s challenge. The article also includes Huang’s explanation."
  source="https://www.mirrormedia.mg/external/setn_1703296"
/>

<!--
SPEAKER NOTES — ENGLISH (read aloud)
The first headline focuses on Mr. Huang's change of position.
He used to oppose nuclear power. Now he supports restarting the plant.
The headline highlights Ms. Wu challenging him.
Before we read the article, we are already thinking about his consistency.
That is one part of the event. But it is not the whole discussion.

中文提示：三立聚焦「以前反核、現在支持重啟」。不要說它完全沒寫黃的理由，內文有。
Source: https://www.mirrormedia.mg/external/setn_1703296
Original SET URL (not verified for this capture): https://www.setn.com/News.aspx?NewsID=1703296
Reporter: 詹宜庭 / SET News. The displayed headline is the Mirror Media republication.
-->

---
layout: default
---

<ArticleCard
  outlet="Knews / 知新聞"
  date="August 13, 2025 · 12:22 · Updated 13:08"
  headline="跳過反核少女吳亞昕！黃國昌批民進黨墮落"
  translation="Skipping over anti-nuclear campaigner Wu, Huang attacks the ruling DPP."
  label="Headline excerpt / 標題節錄 · English translation of excerpt below"
  focus="His attack on the government"
  detail="DPP: Democratic Progressive Party, Taiwan’s ruling party at the time. The full title also asks where electricity for AI will come from."
  source="https://www.knews.com.tw/news/ADDE56799709D42B4383C04A2872F4ED"
/>

<!--
SPEAKER NOTES — ENGLISH (read aloud)
Now look at another report from the same event.
Here, Mr. Huang is attacking the ruling party.
The headline also asks where power for AI will come from.
The focus has moved from his change of position to his criticism of the government.
Same event. A very different first impression.

中文提示：知新聞把黃放在「攻擊政府」的位置，和上一張「遭到質問」形成對照。這是框架差異，尚非失實定論。
Source: https://www.knews.com.tw/news/ADDE56799709D42B4383C04A2872F4ED
-->

---
layout: default
---

<ArticleCard
  outlet="Public Television / 公視"
  date="August 13, 2025 · 13:16 · Updated 15:18"
  headline="黃國昌指能源韌性不足 吳亞昕憂核廢料難處置"
  translation="Huang warns about energy resilience; Wu raises concerns about nuclear waste disposal."
  label="Headline excerpt / 標題節錄 · English translation below"
  focus="The policy arguments on both sides"
  detail="Energy resilience means keeping electricity available during a disruption. Naming both positions does not establish that either claim is supported."
  source="https://news.pts.org.tw/article/765392"
/>

<!--
SPEAKER NOTES — ENGLISH (read aloud)
This headline gives us a different starting point.
Mr. Huang is concerned about keeping the electricity supply reliable.
Ms. Wu is concerned about what happens to nuclear waste.
Now we can see the policy questions they disagree on.
We still need to check their claims. But we have more of the picture.

中文提示：公視標題列出供電韌性與核廢料問題。平衡呈現不代表雙方論點已被證實。
Source: https://news.pts.org.tw/article/765392
-->

---
layout: default
---

# What these examples show

- Everyday reactions can become news stories.
- Headlines can give the same event very different emphasis.
- Comparing coverage helps us see what each headline leaves out.

These examples illustrate editorial choices; they do not establish an outlet-wide bias rating.

---
layout: fact
---

# What can we do?

---
layout: default
class: ground-demo-slide
---

<div class="ground-demo">
  <iframe src="https://ground.news/" title="Ground News website" />
  <aside><h2>Ground News</h2><QrCode url="https://ground.news/" label="Explore the site" /></aside>
</div>

---
layout: default
---

# A comparison built for Taiwan

- Group Taiwan’s coverage around the same event.
- Account for local political context, including the green (DPP) and blue (KMT) camps.
- Show differences that a single left–right label can miss.

---
layout: default
class: taiwan-demo-slide
---

<img class="taiwan-product-screenshot" src="/images/taiwan-product-demo.png" alt="What The F product demo: real nuclear referendum reports grouped on the event page, with coverage and timeline." />

<style>
.slidev-layout.taiwan-demo-slide { padding: 0; }
.slidev-layout.taiwan-demo-slide::after { display: none; }
.taiwan-product-screenshot { display: block; width: 100%; height: 100%; object-fit: contain; }
</style>

---
layout: default
---

# What the F
- Collect related reporting in one place, organized by event.
- Let readers compare headlines, sources, and timelines.
- Show Taiwan’s political context beyond a left–right label.

**Cost goal:** Reduce manual review through automated grouping.

---
layout: default
---

# An idea we’d love to see built

- We’ve wanted to build this for a long time.
- Other commitments have left us little time to work on it.
- The demo is a rough prototype, far from what we originally envisioned.

**Interested? Please steal this idea and make it happen.**

<!--
We’ve had this idea for a long time, but with everything else going on, we’ve barely had time to work on it.
The screenshot you saw is a very rough early version. It’s still a long way from the complete experience we imagined.
If this is something you’d like to build, please steal the idea. We’d love to see it happen.
-->
