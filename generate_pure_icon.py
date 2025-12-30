import struct
import zlib

def write_opaque_png(filename, width, height):
    # PNG Signature
    png_sig = b'\x89PNG\r\n\x1a\n'
    
    # IHDR Chunk
    # Width, Height, BitDepth(8), ColorType(2-RGB), Compression(0), Filter(0), Interlace(0)
    ihdr_data = struct.pack('!I I B B B B B', width, height, 8, 2, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
    ihdr_chunk = struct.pack('!I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('!I', ihdr_crc)
    
    # IDAT Chunk (Image Data)
    # Raw RGB data: (1 byte filter + width * 3 bytes RGB) * height
    # Solid Green pixel (just to be different): \00 \x00\xFF\x00
    line_data = b'\x00' + (b'\x00\xFF\x00' * width)
    raw_data = line_data * height
    compressed_data = zlib.compress(raw_data)
    idat_crc = zlib.crc32(b'IDAT' + compressed_data)
    idat_chunk = struct.pack('!I', len(compressed_data)) + b'IDAT' + compressed_data + struct.pack('!I', idat_crc)
    
    # IEND Chunk
    iend_crc = zlib.crc32(b'IEND')
    iend_chunk = struct.pack('!I', 0) + b'IEND' + struct.pack('!I', iend_crc)
    
    with open(filename, 'wb') as f:
        f.write(png_sig)
        f.write(ihdr_chunk)
        f.write(idat_chunk)
        f.write(iend_chunk)

print("Generating pure RGB PNG...")
write_opaque_png('/Users/yasser/Desktop/clueapp/ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-Pure.png', 1024, 1024)
print("Done.")
