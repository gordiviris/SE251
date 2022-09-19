import pandas as pd
df = pd.read_excel('SeedUnofficialAppleData.xlsx')
prices = df.iloc[:,8][1:].dropna()
phones = df.iloc[:,0][1:].dropna()
dates = df.iloc[:,2][1:].dropna()

# Dates for 12 + 12 Mini
dates.iloc[-2] = str(dates.iloc[-2]).split("/")
# Dates for the 12Pro + 12 Pro Max
dates.iloc[-1] = str(dates.iloc[-1]).split("/")

# Remove all the 'contract' prices as they don't reflect the MSRP
for x in range(0,22):
    # if the number is odd, remove it
    if (x % 2) == 1:
        prices.iloc[x] = None
        prices.iloc[24] = None
        prices.iloc[26] = None
        prices.iloc[30] = None
prices = prices.dropna()

prices = prices.reset_index(drop=True)
print(prices)

df_phones = pd.concat([phones, prices, dates], axis=1)
df_phones = df_phones.reset_index()
print(df_phones)


'''
for row in prices:
    prices.loc[row] = str(row).replace("$", "")
''' 