document.getElementById("getAmountOfGrids").addEventListener("click", function () {
    let amount = changeGridAmount();
    generateGrid(amount); // Generate the initial grid
});

function generateGrid(amount) {
    const container = document.getElementById("gridSquare");
    container.innerHTML = ""; //Makes it possible to reload the grid with new values
    for (let i = 0; i < amount; i++) {
        for (let j = 0; j < amount; j++) {
            const div = document.createElement('div');
            //Sets class name for styling
            div.className = "gridSquare";
            //Sets unique id for each div
            div.id = `cell-${i}-${j}`;

            container.appendChild(div);

            div.addEventListener("mouseover", function() {
                const hue = Math.floor(Math.random() * 361); //Random hue between 0 and 360
                const saturation = 100; //100% saturation
                let lightness = Math.floor(Math.random() * 91) + 5; //Random lightness between 5 and 95

                //Calculate the amount of change (10% of the range between -100 and previous lightness value)
                const change = Math.ceil((lightness + 100) * 0.10);

                lightness -= change;
                if (lightness <= -100) {
                    lightness = -100; //Set lightness to -100 (black)
                }

                div.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

            });

        }
    }
}

function changeGridAmount() {
    let input;
    do {
        input = prompt("Enter the amount of grids you want? (max=100)")
        if (input > 100 || input <= 0) {
            {
                alert("Invalid input, try again");
            }

        }
    } while (isNaN(input) && input < 0 || input > 100);
    return parseInt(input);
}
