for (var index = 1; index <= 9; index++)
    document.getElementById(`hole${index}`).onclick = HoleClick;
    
var nCatch = 0;
var nMissed = 0;
    
function HoleClick() {
    if (this.classList.contains('hole_has-mole'))
        nCatch += 1;
    else 
        nMissed +=1;


        if (nCatch === 10 || nMissed === 5) {
            alert((nCatch === 10 ? "Вы победили !!!" : "Вы проиграли..."));
            nCatch = 0;
            nMissed = 0;
        }

        document.getElementById("dead").textContent = nCatch;
        document.getElementById("lost").textContent = nMissed;
}
