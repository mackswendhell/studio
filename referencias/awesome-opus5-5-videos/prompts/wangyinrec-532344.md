# Renaissance Naturalist Manuscript Style Video

An Opus 5.5 video by [@wangyinrec](https://x.com/wangyinrec) · [Original post with the video](https://x.com/wangyinrec/status/2103725737551532344)

- **Category:** Motion graphics
- **Author:** [@wangyinrec](https://x.com/wangyinrec)

More Opus 5.5 videos, each next to a live remake: [skillry.dev/ai-videos/opus-5-5](https://skillry.dev/ai-videos/opus-5-5?utm_source=github&utm_medium=readme&utm_campaign=awesome-opus5-5-videos)

## Prompt

```text
我定的选题、风格，我想要那种文艺复兴博物学家手稿的感觉，查资料、写分镜、写动画、作曲都是  Opus5.5 做的，画是 Codex 照着 Opus5.5 写的需求文档画的。  
唯一让我惊讶的是音乐。它先用 Python 写出一份 MIDI 乐谱，里面有和弦进行，也有两段主旋律：竖笛吹 Claude 的主题，钢片琴弹 GPT 那种绕圈的琶音。名字乱飞那段，羽管键琴的音是用随机走位生成的，每一小节更密一点、更不和谐一点，最后砸一个密集的不协和和弦，然后停住。快版一小节 2 秒，关键切换都卡在小节线上。  

然后用开源合成器 FluidSynth 加一套免费的标准音色库，把乐谱"演奏"成音频。鲁特琴、竖笛、管风琴这些音色都来自这套库。最后用 ffmpeg 统一响度、做淡出，再和画面合成。
```
