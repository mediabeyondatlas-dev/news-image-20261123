[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/mediabeyondatlas-dev/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard)
[![reward](https://make.fun/badge/news-image-20261123/mediabeyondatlas-dev/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

# The World Today — Monday 23 November 2026

A newspaper-style infographic (1024×1024 PNG) summing up the world news of
Monday 23 November 2026. Six stories, each with a short headline, a one-to-two
line summary and a simple drawn illustration.

## The six stories

1. **Nepal–India: Shah and Modi hold talks in Delhi** — Nepal's PM Balendra
   Shah meets Narendra Modi on his first state visit; the two sides sign pacts
   on energy, health and education and unveil a joint vision for the decade.
   (IANS / New Kerala, Nation Press)
2. **Climate: COP31 fallout — "difficult times"** — A day after the Antalya
   climate talks collapsed with no deal, Australia's PM calls the failure a
   sign of "difficult geopolitical times". (AFP via NAMPA, Reuters)
3. **South Asia: Pakistan seeks India talks on Indus waters** — Islamabad asks
   New Delhi to open talks on the Indus Waters Treaty, reviving dialogue over
   the rivers the two neighbours share. (The New Indian Express / The Hindu)
4. **Labour: Bangladesh garment owners table wage offer** — After almost three
   weeks of strikes, factory owners put a new minimum-wage proposal to the
   board; workers want Tk32,000 a month, up from Tk12,500.
   (Channel Bangladesh / The Business Standard)
5. **Libya: UN urges probe into Benghazi attacks** — The United Nations calls
   for an inquiry into attacks in Benghazi and warns Libya must not become a
   battleground again. (Korea Times)
6. **United States: Nine shot at California concert** — Gunfire at a concert in
   central California wounds nine people, one critically, during a busy
   Thanksgiving-weekend crowd. (Jerusalem Post wire, 23 Nov)

Stories were checked against their reporting dates: events from Sunday
22 November (the COP31 collapse itself, the "Chapo Isidro" capture, South
Korea's education minister resigning) were deliberately left out — only
events that happened, or were first reported, on Monday 23 November 2026
are shown, with the COP31 item framed explicitly as Monday's fallout.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
No network access and no randomness, so two runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see `LICENSE`.
