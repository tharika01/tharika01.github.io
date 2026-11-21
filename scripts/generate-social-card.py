"""Build the portfolio's exact 1200×630 typographic social preview (Pillow)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT_ROOT = Path('/System/Library/Fonts/Supplemental')

def font(name, size):
    return ImageFont.truetype(str(FONT_ROOT / name), size)

image = Image.new('RGB', (1200, 630), '#0e1116')
draw = ImageDraw.Draw(image)
draw.rounded_rectangle((28, 28, 1172, 602), radius=24, outline='#242b38', width=2)
draw.rectangle((80, 90, 150, 95), fill='#5b9dff')
draw.text((80, 135), 'SOFTWARE ENGINEER  /  APPLIED AI', font=font('Arial.ttf', 23), fill='#85b6ff')
draw.text((76, 207), 'Tharika Vikas', font=font('Georgia.ttf', 76), fill='#ffffff')
draw.text((76, 298), 'Srinivasa', font=font('Georgia.ttf', 76), fill='#ffffff')
draw.text((80, 425), 'Building reliable agentic and backend AI systems.', font=font('Arial.ttf', 28), fill='#c8ccd4')
draw.text((80, 537), 'tharikavsrinivasa.dev', font=font('Arial.ttf', 23), fill='#85b6ff')
image.save(ROOT / 'public/social-card.png', optimize=True)
print('Created public/social-card.png (1200×630)')
