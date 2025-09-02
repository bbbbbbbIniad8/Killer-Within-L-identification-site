const personState = {
    checkList: Array(10).fill(false)
}

const dict = {
    0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J",
}

const people = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const personContainer = document.querySelector('.person');

people.forEach((personName, index) => {
    const div = document.createElement('div');
    div.id = personName;

    const innerElement = document.createElement('div'); 
    innerElement.id = `${personName}_name`;
    innerElement.className = 'person_name';
    innerElement.textContent = personName;

    const checked = document.createElement('div'); 
    checked.id = `${personName}_checked`;
    checked.className = 'person_checked';
    
    div.appendChild(innerElement);
    div.appendChild(checked);

    div.addEventListener('click', () => {
        check_person(index); 
    });
    personContainer.appendChild(div);
});

function check_person(index){
    const target = personState.checkList[index];
    personState.checkList[index] = (target === true) ? false : true;
    let element = document.getElementById(`${dict[index]}_checked`);
    element.textContent = (target === true) ? "" : "checked";
}

function judge_who_L() {
    const answer = personState.checkList
        .map((isChecked, index) => isChecked === false ? dict[index] : null)
        .filter(Boolean);

    document.getElementById("judgeText").textContent = `夜神月: Lはこの中に潜伏している可能性が高い。\n${answer.join(', ')}`
}
