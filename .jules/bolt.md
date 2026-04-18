## 2025-05-14 - Canvas Path Batching Optimization
**Learning:** Calling `ctx.save()`/`ctx.restore()` and `ctx.fill()` inside a tight loop with thousands of iterations is a major bottleneck in Canvas 2D. Path batching (adding all sub-paths and calling `fill()` once) is significantly more efficient than drawing elements individually.
**Action:** Always prefer path batching for large numbers of identical-style elements in Canvas. Avoid `save()`/`restore()` and `translate()` inside loops if absolute coordinates can be calculated easily.
