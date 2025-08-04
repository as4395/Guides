import pandas as pd
import numpy as np

# Create sample data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
    'Age': [25, 30, 35, 40, 28],
    'Salary': [50000, 60000, 70000, 80000, 65000]
}

# Create dataframe
df = pd.DataFrame(data)

# Basic analysis
print("Data Summary:")
print(df.describe())

# Filter data
high_salary = df[df['Salary'] > 65000]
print("\nEmployees with high salary:")
print(high_salary)

# Add new column
df['Bonus'] = df['Salary'] * 0.1
print("\nDataframe with bonus:")
print(df)
