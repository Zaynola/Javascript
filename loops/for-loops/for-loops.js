const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i <= seatingChart.length; i++) {
    const row = (seatingChart[0]);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}