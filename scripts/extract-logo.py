from pathlib import Path
from PIL import Image

root = Path("public/brand")


def knockout(source: Path, target: Path, background: str) -> None:
    image = Image.open(source).convert("RGBA")
    pixels = image.load()
    width, height = image.size
    min_x, min_y, max_x, max_y = width, height, 0, 0

    for y in range(height):
        for x in range(width):
            red, green, blue, _alpha = pixels[x, y]
            if background == "white":
                distance = max(255 - red, 255 - green, 255 - blue)
            else:
                distance = max(red, green, blue)
            if distance < 18:
                alpha = 0
            elif distance < 48:
                alpha = int((distance - 18) / 30 * 255)
            else:
                alpha = 255
            pixels[x, y] = (red, green, blue, alpha)
            if alpha > 20:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)

    pad = 8
    crop = image.crop(
        (
            max(0, min_x - pad),
            max(0, min_y - pad),
            min(width, max_x + pad + 1),
            min(height, max_y + pad + 1),
        )
    )
    crop.save(target, optimize=True)
    print(target.name, crop.size)


knockout(root / "lockup-light.jpg", root / "logo-on-light.png", "white")

light = Image.open(root / "logo-on-light.png")
wordmark = light.crop((0, 0, light.width, 292))
wordmark.save(root / "logo-wordmark.png", optimize=True)

symbol = light.crop((448, 148, 672, 286))
side = max(symbol.size)
mark = Image.new("RGBA", (side, side), (0, 0, 0, 0))
mark.paste(symbol, ((side - symbol.width) // 2, (side - symbol.height) // 2), symbol)
mark.save(root / "logo-mark.png", optimize=True)

icon = Image.new("RGB", (512, 512), (255, 255, 255))
fitted = mark.resize((420, 420), Image.Resampling.LANCZOS)
icon.paste(fitted, (46, 46), fitted)
icon_path = Path("src/app/icon.png")
icon.save(icon_path, optimize=True)
icon.resize((180, 180), Image.Resampling.LANCZOS).save(Path("src/app/apple-icon.png"), optimize=True)
print("wordmark", wordmark.size, "mark", mark.size)
