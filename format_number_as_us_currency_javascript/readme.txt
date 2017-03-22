Format number as US currency

Format an unsigned integer or float to US currency string, e.g. $1,234,567.89.

1. Convert number to string.

2. If string contains period split at the period.
    1234567.89 => string a) 1234567, string b) 89

3. If string a is 4 character or longer insert ',' every third character.
    1234567 => 1,234,567

4. Concatenate string a and string b.
    1,234,567 + 89 => 1,234,567.89

5. If requested, prepend '$' to number sting.
    1,234,567.89 => $1,234,567.89
