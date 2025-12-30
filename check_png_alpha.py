import sys

def check_png(path):
    with open(path, 'rb') as f:
        header = f.read(26)
        # PNG signature
        if header[:8] != b'\x89PNG\r\n\x1a\n':
            print(f"{path}: Not a PNG")
            return
        
        # IHDR chunk is after signature (8 bytes) + length (4) + type (4)
        # Color type is at offset 8+4+4 + 8 + 1 = 25?
        # Let's count properly.
        # 0-7: Sig
        # 8-11: Length of IHDR (usually 13)
        # 12-15: "IHDR"
        # 16-19: Width
        # 20-23: Height
        # 24: Bit depth
        # 25: Color type
        
        color_type = header[25]
        print(f"File: {path}")
        print(f"Color Type: {color_type}")
        if color_type == 2:
            print("Type 2: Truecolor (RGB) - NO ALPHA ✅")
        elif color_type == 6:
            print("Type 6: Truecolor with alpha (RGBA) - HAS ALPHA ❌")
        elif color_type == 4:
            print("Type 4: Grayscale with alpha - HAS ALPHA ❌")
        elif color_type == 0:
            print("Type 0: Grayscale - NO ALPHA ✅")
        elif color_type == 3:
            print("Type 3: Indexed - CHECK PLTE/tRNS")
        else:
            print(f"Unknown type: {color_type}")

check_png('/Users/yasser/Desktop/clueapp/ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-Final.png')
