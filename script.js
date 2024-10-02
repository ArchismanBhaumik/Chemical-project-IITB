const selectAllCheckbox = document.getElementById("select-all");
const rowCheckboxes = document.querySelectorAll(".row-select");
const removeBtn = document.getElementById("remove-btn");
const addBtn = document.getElementById("addBtn");
// JSON array
const data = [
    {
        id: 1,
        chemical_name: "Ammonium Persulfate",
        vendor: "LG Chem",
        density: 3525.92,
        viscosity: 60.63,
        packaging: "Bag",
        pack_size: 100,
        unit: "kg",
        quantity: 6495.18
    },
    {
        id: 2,
        chemical_name: "Caustic Potash",
        vendor: "Formosa",
        density: 3172.15,
        viscosity: 48.22,
        packaging: "Bag",
        pack_size: 100,
        unit: "kg",
        quantity: 8751.90
    },
    {
        id: 3,
        chemical_name: "Dimethylaminopropylamine",
        vendor: "LG Chem",
        density: 8435.37,
        viscosity: 12.62,
        packaging: "Barrel",
        pack_size: 75,
        unit: "L",
        quantity: 5964.61
    },
    {
        id: 4,
        chemical_name: "Mono Ammonium Phosphate",
        vendor: "Sinopec",
        density: 1597.65,
        viscosity: 76.51,
        packaging: "Bag",
        pack_size: 105,
        unit: "kg",
        quantity: 8183.73
    },
    {
        id: 5,
        chemical_name: "Ferric Nitrate",
        vendor: "DowDuPont",
        density: 364.04,
        viscosity: 14.90,
        packaging: "Bag",
        pack_size: 105,
        unit: "kg",
        quantity: 4154.33
    },
    {
        id: 6,
        chemical_name: "n-Pentane",
        vendor: "Sinopec",
        density: 4535.26,
        viscosity: 66.76,
        packaging: "N/A",
        pack_size: "N/A",
        unit: "t",
        quantity: 6272.34
    },
    {
        id: 7,
        chemical_name: "Glycol Ether PM",
        vendor: "LG Chem",
        density: 6495.18,
        viscosity: 72.12,
        packaging: "Bag",
        pack_size: 250,
        unit: "kg",
        quantity: 8749.54
    },
    {
        id: 8,
        chemical_name: "Sodium Hydroxide",
        vendor: "Sinopec",
        density: 4100.00,
        viscosity: 80.12,
        packaging: "Bag",
        pack_size: 200,
        unit: "kg",
        quantity: 9300.00
    },
    {
        id: 9,
        chemical_name: "Phosphoric Acid",
        vendor: "BASF",
        density: 1870.55,
        viscosity: 20.25,
        packaging: "Barrel",
        pack_size: 55,
        unit: "L",
        quantity: 2700.15
    },
    {
        id: 10,
        chemical_name: "Hydrochloric Acid",
        vendor: "Dow Chemical",
        density: 1500.35,
        viscosity: 18.50,
        packaging: "Drum",
        pack_size: 65,
        unit: "L",
        quantity: 3000.00
    },
    {
        id: 11,
        chemical_name: "Ammonia Solution",
        vendor: "LG Chem",
        density: 850.75,
        viscosity: 10.75,
        packaging: "Canister",
        pack_size: 25,
        unit: "L",
        quantity: 450.50
    },
    {
        id: 12,
        chemical_name: "Potassium Hydroxide",
        vendor: "Formosa",
        density: 1200.85,
        viscosity: 22.15,
        packaging: "Bag",
        pack_size: 150,
        unit: "kg",
        quantity: 5620.00
    },
    {
        id: 13,
        chemical_name: "Sulfuric Acid",
        vendor: "BASF",
        density: 1835.25,
        viscosity: 25.12,
        packaging: "Barrel",
        pack_size: 70,
        unit: "L",
        quantity: 3500.75
    },
    {
        id: 14,
        chemical_name: "Nitric Acid",
        vendor: "DowDuPont",
        density: 1350.75,
        viscosity: 15.50,
        packaging: "Bag",
        pack_size: 80,
        unit: "kg",
        quantity: 4600.65
    },
    {
        id: 15,
        chemical_name: "Sodium Chloride",
        vendor: "LG Chem",
        density: 2200.00,
        viscosity: 35.00,
        packaging: "Bag",
        pack_size: 100,
        unit: "kg",
        quantity: 9800.00
    }
];

// Select table body
const tableBody = document.querySelector("#chemical-table tbody");

// Populate table with data from JSON array
data.forEach((item, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="checkbox" class="row-select"></td>
        <td>${index + 1}. ${item.chemical_name}</td>
        <td>${item.vendor}</td>
        <td>${item.density.toFixed(2)}</td>
        <td>${item.viscosity.toFixed(2)}</td>
        <td>${item.packaging}</td>
        <td>${item.pack_size}</td>
        <td>${item.unit}</td>
        <td>${item.quantity.toFixed(2)}</td>
        <td>
                <button type="button" class="btn btn-info edit-btn">
                    <img src="./edit-button.png" alt="" style="height: 30px; width: 30px;"> Edit
                </button>
            </td>
    `;

    tableBody.appendChild(row);
});

// Select All functionality
// selectAllCheckbox.addEventListener('click', () => {
//     rowCheckboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
// });

// Remove functionality
removeBtn.addEventListener('click', () => {
    // Get all the rows in the table body
    const rows = tableBody.querySelectorAll('tr');

    // Loop through the rows backwards to avoid skipping rows after deletion
    rows.forEach((row, index) => {
        const checkbox = row.querySelector('.row-select');
        if (checkbox.checked) {
            // Remove the row from the table body
            tableBody.removeChild(row);
        }
    });
});

addBtn.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('addChemicalModal'));
    modal.show();
});

// Handle form submission
addChemicalForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const newChemical = {
        id: data.length + 1, // Auto-generate ID
        chemical_name: document.getElementById("chemicalName").value,
        vendor: document.getElementById("vendor").value,
        density: parseFloat(document.getElementById("density").value),
        viscosity: parseFloat(document.getElementById("viscosity").value),
        packaging: document.getElementById("packaging").value,
        pack_size: parseFloat(document.getElementById("packSize").value),
        unit: document.getElementById("unit").value,
        quantity: parseFloat(document.getElementById("quantity").value),
    };

    // Add new chemical to data array
    data.push(newChemical);
    console.log(data)
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="checkbox" class="row-select"></td>
        <td>${newChemical.id}. ${newChemical.chemical_name}</td>
        <td>${newChemical.vendor}</td>
        <td>${newChemical.density.toFixed(2)}</td>
        <td>${newChemical.viscosity.toFixed(2)}</td>
        <td>${newChemical.packaging}</td>
        <td>${newChemical.pack_size}</td>
        <td>${newChemical.unit}</td>
        <td>${newChemical.quantity.toFixed(2)}</td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    const modal = bootstrap.Modal.getInstance(document.getElementById('addChemicalModal'));
    modal.hide();
})

const sortUpBtn = document.getElementById("sortUp"); // Sort Up button
const sortDownBtn = document.getElementById("sortDown"); // Sort Down button

function updateCheckboxListeners() {
    const rowCheckboxes = document.querySelectorAll(".row-select");
    
    // Select All functionality
    selectAllCheckbox.addEventListener('click', () => {
        rowCheckboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
    });
}


// Function to render the table body with data
function renderTable(data) {
    tableBody.innerHTML = ''; // Clear existing rows
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="row-select"></td>
            <td>${index + 1}. ${item.chemical_name}</td>
            <td>${item.vendor}</td>
            <td>${item.density.toFixed(2)}</td>
            <td>${item.viscosity.toFixed(2)}</td>
            <td>${item.packaging}</td>
            <td>${item.pack_size}</td>
            <td>${item.unit}</td>
            <td>${item.quantity.toFixed(2)}</td>
            <td>
                <button type="button" class="btn btn-info edit-btn">
                    <img src="./edit-button.png" alt="" style="height: 30px; width: 30px;"> Edit
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
     // Update row checkboxes and event listeners
     updateCheckboxListeners();

     addEditButtonListeners();
}

// Function to sort by a given key
function sortData(data, key, ascending = true) {
    return data.sort((a, b) => {
        if (typeof a[key] === 'string') {
            // For strings (e.g., chemical name, vendor), use localeCompare for sorting
            return ascending ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
        } else {
            // For numbers (e.g., density, viscosity, quantity), sort numerically
            return ascending ? a[key] - b[key] : b[key] - a[key];
        }
    });
}

// Add event listener for Sort Up (ascending) button
sortUpBtn.addEventListener('click', () => {
    const sortedData = sortData(data, 'chemical_name', true); // Sort by 'chemical_name' in ascending order
    renderTable(sortedData); // Re-render the table with sorted data
});

// Add event listener for Sort Down (descending) button
sortDownBtn.addEventListener('click', () => {
    const sortedData = sortData(data, 'chemical_name', false); // Sort by 'chemical_name' in descending order
    renderTable(sortedData); // Re-render the table with sorted data
});
function addEditButtonListeners() {
    const editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach((btn, rowIndex) => {
        btn.addEventListener('click', () => {
            // Get the corresponding row and data for editing
            const row = tableBody.rows[rowIndex];
            const chemical = data[rowIndex];

            // Convert the row's cells into editable fields
            row.innerHTML = `
                <td><input type="checkbox" class="row-select"></td>
                <td><input type="text" value="${chemical.chemical_name}"></td>
                <td><input type="text" value="${chemical.vendor}"></td>
                <td><input type="number" value="${chemical.density.toFixed(2)}"></td>
                <td><input type="number" value="${chemical.viscosity.toFixed(2)}"></td>
                <td><input type="text" value="${chemical.packaging}"></td>
                <td><input type="number" value="${chemical.pack_size}"></td>
                <td><input type="text" value="${chemical.unit}"></td>
                <td><input type="number" value="${chemical.quantity.toFixed(2)}"></td>
                <td>
                    <button type="button" class="btn btn-success save-btn m-2">Save</button>
                    <button type="button" class="btn btn-secondary cancel-btn">Cancel</button>
                </td>
            `;

            // Add event listeners for Save and Cancel buttons
            const saveBtn = row.querySelector('.save-btn');
            const cancelBtn = row.querySelector('.cancel-btn');

            // Save changes
            saveBtn.addEventListener('click', () => {
                // Save the edited values back to the data array
                chemical.chemical_name = row.querySelector('td:nth-child(2) input').value;
                chemical.vendor = row.querySelector('td:nth-child(3) input').value;
                chemical.density = parseFloat(row.querySelector('td:nth-child(4) input').value);
                chemical.viscosity = parseFloat(row.querySelector('td:nth-child(5) input').value);
                chemical.packaging = row.querySelector('td:nth-child(6) input').value;
                chemical.pack_size = parseFloat(row.querySelector('td:nth-child(7) input').value);
                chemical.unit = row.querySelector('td:nth-child(8) input').value;
                chemical.quantity = parseFloat(row.querySelector('td:nth-child(9) input').value);

                // Re-render the table after saving
                renderTable(data);
            });

            // Cancel the editing and revert the row back to its original state
            cancelBtn.addEventListener('click', () => {
                renderTable(data); // Re-render the table without saving
            });
        });
    });
}
// Default render
renderTable(data);
