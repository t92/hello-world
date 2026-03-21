# Checkpoints

## step: Step1 PM
- status: DONE
- links:
  - PRD: `docs/PRD_BATTLE_DAMAGED_HELLO_WORLD.md`
- risks:
  - 视觉风格实现可能影响性能与可读性
- next:
  - 进入 Step2 Figma Make 设计并提交证据

## step: Step2 Designer
- status: DONE (GATE PASSED)
- links:
  - Figma Make: https://www.figma.com/make/GyCl3N8B0JqcY08I7wcNhw/Untitled?t=sR1DfWf42LlRr4Jj-0
  - 生成截图: `docs/evidence/step2_figma_make_generation.jpg`
- risks:
  - 当前为 Untitled 初版，需要在开发中固化视觉规范
- next:
  - 进入 Step3 前端实现

## step: Step3 Frontend
- status: DONE
- links:
  - Branch: `feat/battle-damaged-hello-world`
  - PR: https://github.com/t92/hello-world/pull/1
  - Local run: `python3 -m http.server 4173`
- risks:
  - 本地预览证据截图缺失（浏览器访问本地地址受限）
- next:
  - 进入 Step4 QA Atlas

## step: Step4 QA
- status: BLOCKED: ATLAS_REQUIRED
- links:
  - Report: `qa__/project/TEST_REPORT.md`
- risks:
  - Atlas 硬门禁未满足，流程不能进入回流与 Ops
- next:
  - 补齐 Atlas 执行、PRD上传证据、焦点链路、截图证据后重测
