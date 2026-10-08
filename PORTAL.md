# TZ-NutriQ Portal Integration

## Structure (target)

| Path | Description |
|------|-------------|
| `/index.html` | Hub entry: 營養查詢 + 大腦年齡 |
| `/nutric.html` | Original TZ-NutriQ nutrition tool |
| `/sirt-game/` | Brain Lab from apoprotein-stack/sirt-game |
| `/sirt-game/index.html` | 測測你的大腦年齡 |
| `/sirt-game/demo/` | 麻將消除 |
| `/sirt-game/games/2048/` | 2048 |

## Merge command (run locally with access to private sirt-game)

```bash
git clone https://github.com/apoprotein-stack/nutric1688.git
cd nutric1688

# Copy sirt-game contents into subdirectory
git clone https://github.com/apoprotein-stack/sirt-game.git _sirt_tmp
mkdir -p sirt-game
cp -a _sirt_tmp/. sirt-game/
rm -rf sirt-game/.git _sirt_tmp

# Optional: rename current nutrition entry if still named index.html only
# mv index.html nutric.html   # only if hub not yet applied

git add sirt-game
git commit -m "Integrate sirt-game (Brain Lab) under /sirt-game"
git push origin main
```

After merge, hub links should point to `nutric.html` and `sirt-game/index.html`.
