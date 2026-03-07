# 喜庆版 Hello World PRD（V2 from scratch）

- 仓库：`https://github.com/t92/hello-world`
- 分支：`feat/festive-hello-world-redo-20260307-v2`

## 目标
重做一个“喜庆版 Hello World”单页，体现中国节庆氛围，并保证基础可访问性。

## 功能范围
1. 头部节庆标题
2. 主视觉：红金主题、灯笼元素、烟花效果
3. 祝福文案（中英）
4. CTA 按钮：点击触发额外烟花
5. 无障碍：键盘可操作、focus 可见、尊重 `prefers-reduced-motion`

## 验收标准
- 视觉符合“喜庆版”主题；文字清晰可读
- 点击“再来一束烟花”有可见反馈
- 键盘可触发按钮（Enter/Space）
- reduced-motion 下关闭动画

## 风险
- Step4 强依赖 Atlas 可用性
- Step6 强依赖 AWS 访问凭据
