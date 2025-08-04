import time
import math

# Animated countdown using sine wave
for i in range(100):
    wave = math.sin(i / 10) * 10 + 10  # Create a wave pattern
    bar = '*' * int(wave)
    print(f"{bar}")
    time.sleep(0.05)

print("Wave animation complete!")
