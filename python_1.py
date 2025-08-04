import random

def roll_dice():
    """Simulate rolling two six-sided dice."""
    die1 = random.randint(1, 6)
    die2 = random.randint(1, 6)
    return die1, die2

# Roll the dice 5 times
for i in range(5):
    d1, d2 = roll_dice()
    print(f"Roll {i + 1}: {d1} and {d2} (Total: {d1 + d2})")
