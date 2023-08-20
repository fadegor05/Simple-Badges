
#*
#*      Color convertation file
#*


# HEX Color to RGB Color Convertor
def hex_to_rgb(hex):
    return [ int(hex[i:i+2], 16) for i in (0, 2, 4)]

# RGB Color to HEX Color Convertor
def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

# Sub-function
def sub_convert(color, gray, start):
    return 255 - (255 - color) * (255 - gray) / (255 - start)

# Сhanging color saturation using math
def convert(color, gray, start_gray):
    return rgb_to_hex([round(sub_convert(i, hex_to_rgb(gray)[0], hex_to_rgb(start_gray)[0])) for i in hex_to_rgb(color)])

