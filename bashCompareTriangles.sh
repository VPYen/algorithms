read X
read Y
read Z

if [ $X -eq $Y ] || [ $X -eq $Z ] || [ $Y -eq $Z ]; then
    if [ $((X+Y)) -eq $((Z*2)) ]; then
        echo EQUILATERAL
    else
        echo ISOSCELES
    fi
else
    echo SCALENE
fi
