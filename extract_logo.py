from PIL import Image
import os

img_path = 'public/images/user_logo.png'
if not os.path.exists(img_path):
    print("Image not found:", img_path)
    exit(1)

# Load image
img = Image.open(img_path).convert('RGBA')
pixels = img.load()

width, height = img.size
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # Make white background transparent
        if r > 200 and g > 200 and b > 200:
            pixels[x, y] = (255, 255, 255, 0)
        # Make dark blue text white
        elif r < 100 and g < 100 and b < 150:
            pixels[x, y] = (255, 255, 255, 255)

img.save('public/images/logo_extracted.png')
print("Logo extracted successfully.")
