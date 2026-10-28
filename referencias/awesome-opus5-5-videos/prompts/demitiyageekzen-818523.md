# Opus 5.5 video by @DemitiyaGeekzen

[▶ Watch the original and a live remake on Skillry](https://skillry.dev/ai-videos/opus-5-5/demitiyageekzen-818523?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos) · [Original post](https://x.com/DemitiyaGeekzen/status/2103517910274818523)

- **Category:** 3D scenes
- **Remake built with:** GLSL · WebGL · Canvas · Web Audio
- **Author:** [@DemitiyaGeekzen](https://x.com/DemitiyaGeekzen)

> The author didn't publish the full prompt. Below is the text of their original post.

## Prompt

```text
opus5.5有点强，我让它自由选题做交互页面和视频，
提示词：用你最强的思维和能力，根据对我的了解，自行寻找我可能喜欢的主题，制作一个30s的视频还有互动html，尽可能的展示你的前端能力！
它的选题思路：滕王阁·中秋夜。 今天（2026-09-25）正好是丙午年八月十五。所以我选了《滕王阁序》里最有画面感的那句："落霞与孤鹜齐飞，秋水共长天一色"。短片是船上视角：落日时一只孤鹜飞过太阳，天上是鱼鳞云，然后江天一色，楼阁由下往上亮起灯，满月从东边升起，江面上漂着河灯，诗句以竖排书法字幕配印章出现。

前端做的更牛，但是这里没法放！
画面：整幅画面由一个 WebGL2 着色器逐像素算出来，没有用任何图片。包括天空的暮色层次、按南昌纬度推算的日月轨迹、程序生成的鱼鳞云、9 组波浪叠加的江面倒影，以及用 Canvas 2D 画出来的滕王阁立面。
声音：全部用 WebAudio 实时合成，没有一段录音。古筝用 Karplus-Strong 弦振动模型，带按滑和揉弦；另有箫、江水声、虫鸣和混响。
自由观赏模式：可以拖动环视和缩放，拖时间轴改变时辰；点江面放河灯，会弹出一句诗、响一声古筝；点月亮进入月面特写；还能切换查看渲染图层，或者在网页里直接录制视频。
```
