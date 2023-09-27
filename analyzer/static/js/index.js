const listProgrammers = async () => {
    try {
        const response = await fetch("http://localhost:8000/analyzer/list_programmers/");

        const data = await response.json();

        let content = ``;
        data.programmers.forEach((registro_data, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${registro_data.agrupacion}</td>
                    <td>${registro_data.clasificacion}</td>
                    <td>${registro_data.fecha}</td>
                    <td>${registro_data.hora}</td>
                    <td>
                        <button class='btn btn-sm btn-primary'><i class='fa-solid fa-pencil'></i></button>
                        <button class='btn btn-sm btn-danger'><i class='fa-solid fa-trash-can'></i></button>
                    </td>
                </tr>`;
        });

        // Append content to the table body
        tableBody_programmers.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});
