# QA 报告（回流前）

- 日期：2026-03-07
- 测试对象：喜庆版 Hello World（本地静态页）
- 地址：`http://localhost:5173`

## 用例与结果
1. 首屏展示 Hello World（PASS）
2. 红金配色 + 灯笼/烟花视觉（PASS）
3. 点击“换一句祝福”可循环切换 >=3 条（PASS）
4. 375x812 / 1440x900 无明显破版（PASS）
5. 键盘可聚焦按钮，`aria-live` 播报文本变化（PASS）

## 缺陷分级
- P0: 0
- P1: 0
- P2: 1（建议）
  - 建议增加“减少动态效果”开关以兼容 `prefers-reduced-motion`

## 回流建议（一次）
- Frontend 增加 `prefers-reduced-motion` 兼容后可放行。
