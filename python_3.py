import datetime

def days_until_new_year():
    """Calculate the number of days left until New Year's Day."""
    today = datetime.date.today()
    next_year = today.year + 1
    new_year = datetime.date(next_year, 1, 1)
    delta = new_year - today
    return delta.days

print(f"Days until New Year: {days_until_new_year()}")
