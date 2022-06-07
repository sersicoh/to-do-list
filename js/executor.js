{
    const tasks = [{
        content: "test",
    }
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };
    const checkDoneTask = () => {

        const doneButtons = document.querySelectorAll(".js-done");

        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                console.log("zrobione " + index);
                render();
            })
        });
    };
    const removeTask = () => {

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            })
        });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    
    };
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {

            htmlString += `
            <li class="newTask">
                <button class="js-done">Zrobione</button>
                ${task.content}
                <button class="js-remove">Usuń</button>
            </li>`
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        removeTask();
        checkDoneTask();
    };
    const init = () => {

        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };
    init();
}

