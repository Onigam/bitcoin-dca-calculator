# Bitcoin DCA Calculator

This is a simple calculator to help you decide how much to invest in Bitcoin on a regular basis.

## How to use

```bash

sh dca.sh
                                                                                                      
Bienvenue dans le programme de projection de Bitcoin
Amount invested by month USD: 1000
Number of years (by default 4 years):
Starting bitcoin price in USD (by default 20000 USD):
Percentage of increase by month of the Bitcoin price in USD (Hypothesis by default 2%):
┌─────────┬───────┬────────────────────┬────────────────┬───────────────────┬─────────────┐
│ (index) │ month │ bitcoinAccumulated │ usdAccumulated │ bitcoinPriceInUSD │ usdInvested │
├─────────┼───────┼────────────────────┼────────────────┼───────────────────┼─────────────┤
│    0    │   1   │       0.049        │       0        │       20400       │    1000     │
│    1    │   2   │       0.097        │      1020      │       20808       │    2000     │
│    2    │   3   │       0.144        │      2060      │       21224       │    3000     │
│    3    │   4   │        0.19        │      3121      │       21648       │    4000     │
│    4    │   5   │       0.236        │      4204      │       22081       │    5000     │
│    5    │   6   │        0.28        │      5308      │       22523       │    6000     │
│    6    │   7   │       0.324        │      6434      │       22973       │    7000     │
│    7    │   8   │       0.366        │      7582      │       23433       │    8000     │
│    8    │   9   │       0.408        │      8754      │       23901       │    9000     │
│    9    │  10   │       0.449        │      9949      │       24379       │    10000    │
│   10    │  11   │       0.489        │     11168      │       24867       │    11000    │
│   11    │  12   │       0.529        │     12412      │       25364       │    12000    │
│   12    │  13   │       0.567        │     13680      │       25872       │    13000    │
│   13    │  14   │       0.605        │     14973      │       26389       │    14000    │
│   14    │  15   │       0.642        │     16293      │       26917       │    15000    │
│   15    │  16   │       0.679        │     17639      │       27455       │    16000    │
│   16    │  17   │       0.715        │     19012      │       28004       │    17000    │
│   17    │  18   │        0.75        │     20412      │       28564       │    18000    │
│   18    │  19   │       0.784        │     21840      │       29136       │    19000    │
│   19    │  20   │       0.818        │     23297      │       29718       │    20000    │
│   20    │  21   │       0.851        │     24783      │       30313       │    21000    │
│   21    │  22   │       0.883        │     26298      │       30919       │    22000    │
│   22    │  23   │       0.915        │     27844      │       31537       │    23000    │
│   23    │  24   │       0.946        │     29421      │       32168       │    24000    │
│   24    │  25   │       0.976        │     31030      │       32812       │    25000    │
│   25    │  26   │       1.006        │     32670      │       33468       │    26000    │
│   26    │  27   │       1.035        │     34344      │       34137       │    27000    │
│   27    │  28   │       1.064        │     36051      │       34820       │    28000    │
│   28    │  29   │       1.092        │     37792      │       35516       │    29000    │
│   29    │  30   │        1.12        │     39568      │       36227       │    30000    │
│   30    │  31   │       1.147        │     41379      │       36951       │    31000    │
│   31    │  32   │       1.173        │     43227      │       37690       │    32000    │
│   32    │  33   │       1.199        │     45111      │       38444       │    33000    │
│   33    │  34   │       1.225        │     47033      │       39213       │    34000    │
│   34    │  35   │        1.25        │     48994      │       39997       │    35000    │
│   35    │  36   │       1.274        │     50994      │       40797       │    36000    │
│   36    │  37   │       1.298        │     53034      │       41613       │    37000    │
│   37    │  38   │       1.322        │     55114      │       42445       │    38000    │
│   38    │  39   │       1.345        │     57237      │       43294       │    39000    │
│   39    │  40   │       1.368        │     59401      │       44160       │    40000    │
│   40    │  41   │        1.39        │     61610      │       45044       │    41000    │
│   41    │  42   │       1.412        │     63862      │       45944       │    42000    │
│   42    │  43   │       1.433        │     66159      │       46863       │    43000    │
│   43    │  44   │       1.454        │     68502      │       47801       │    44000    │
│   44    │  45   │       1.475        │     70892      │       48757       │    45000    │
│   45    │  46   │       1.495        │     73330      │       49732       │    46000    │
│   46    │  47   │       1.514        │     75817      │       50726       │    47000    │
│   47    │  48   │       1.534        │     78353      │       51741       │    48000    │
└─────────┴───────┴────────────────────┴────────────────┴───────────────────┴─────────────┘
```